import pool from './connection.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: number;
  tags: string[];
  content: string;
}

export async function migrateArticles() {
  try {
    const jsonPath = path.join(__dirname, '../data/blogPosts.json');
    const articles: Article[] = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

    console.log(`开始迁移 ${articles.length} 篇文章...`);

    for (const article of articles) {
      await pool.query('BEGIN');

      try {
        const articleResult = await pool.query(
          `INSERT INTO articles (id, title, excerpt, date, category, reading_time, content)
           VALUES ($1, $2, $3, $4, $5, $6, $7)
           ON CONFLICT (id) DO UPDATE SET
             title = EXCLUDED.title,
             excerpt = EXCLUDED.excerpt,
             date = EXCLUDED.date,
             category = EXCLUDED.category,
             reading_time = EXCLUDED.reading_time,
             content = EXCLUDED.content
           RETURNING id`,
          [
            article.id,
            article.title,
            article.excerpt,
            article.date,
            article.category,
            article.readingTime,
            article.content
          ]
        );

        const articleId = articleResult.rows[0].id;

        for (const tagName of article.tags) {
          const tagResult = await pool.query(
            `INSERT INTO tags (name) VALUES ($1)
             ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name
             RETURNING id`,
            [tagName]
          );

          const tagId = tagResult.rows[0].id;

          await pool.query(
            `INSERT INTO article_tags (article_id, tag_id)
             VALUES ($1, $2)
             ON CONFLICT (article_id, tag_id) DO NOTHING`,
            [articleId, tagId]
          );
        }

        await pool.query('COMMIT');
        console.log(`✓ 文章 "${article.title}" 迁移成功`);
      } catch (error) {
        await pool.query('ROLLBACK');
        console.error(`✗ 文章 "${article.title}" 迁移失败:`, (error as Error).message);
        throw error;
      }
    }

    console.log('所有文章迁移完成！');
    return true;
  } catch (error) {
    console.error('迁移失败:', (error as Error).message);
    return false;
  }
}

export async function getAllArticles() {
  try {
    const result = await pool.query(`
      SELECT 
        a.*,
        COALESCE(
          json_agg(
            json_build_object('id', t.id, 'name', t.name)
            ORDER BY t.name
          ) FILTER (WHERE t.id IS NOT NULL),
          '[]'
        ) as tags
      FROM articles a
      LEFT JOIN article_tags at ON a.id = at.article_id
      LEFT JOIN tags t ON at.tag_id = t.id
      GROUP BY a.id
      ORDER BY a.date DESC
    `);

    return result.rows.map(row => ({
      id: row.id,
      title: row.title,
      excerpt: row.excerpt,
      date: row.date,
      category: row.category,
      readingTime: row.reading_time,
      tags: row.tags.map((t: any) => t.name),
      content: row.content
    }));
  } catch (error) {
    console.error('获取文章失败:', (error as Error).message);
    return [];
  }
}

export async function getArticleById(id: number) {
  try {
    const result = await pool.query(`
      SELECT 
        a.*,
        COALESCE(
          json_agg(
            json_build_object('id', t.id, 'name', t.name)
            ORDER BY t.name
          ) FILTER (WHERE t.id IS NOT NULL),
          '[]'
        ) as tags
      FROM articles a
      LEFT JOIN article_tags at ON a.id = at.article_id
      LEFT JOIN tags t ON at.tag_id = t.id
      WHERE a.id = $1
      GROUP BY a.id
    `, [id]);

    if (result.rows.length === 0) {
      return null;
    }

    const row = result.rows[0];
    return {
      id: row.id,
      title: row.title,
      excerpt: row.excerpt,
      date: row.date,
      category: row.category,
      readingTime: row.reading_time,
      tags: row.tags.map((t: any) => t.name),
      content: row.content
    };
  } catch (error) {
    console.error('获取文章失败:', (error as Error).message);
    return null;
  }
}

export async function getArticlesByCategory(category: string) {
  try {
    const result = await pool.query(`
      SELECT 
        a.*,
        COALESCE(
          json_agg(
            json_build_object('id', t.id, 'name', t.name)
            ORDER BY t.name
          ) FILTER (WHERE t.id IS NOT NULL),
          '[]'
        ) as tags
      FROM articles a
      LEFT JOIN article_tags at ON a.id = at.article_id
      LEFT JOIN tags t ON at.tag_id = t.id
      WHERE a.category = $1
      GROUP BY a.id
      ORDER BY a.date DESC
    `, [category]);

    return result.rows.map(row => ({
      id: row.id,
      title: row.title,
      excerpt: row.excerpt,
      date: row.date,
      category: row.category,
      readingTime: row.reading_time,
      tags: row.tags.map((t: any) => t.name),
      content: row.content
    }));
  } catch (error) {
    console.error('获取分类文章失败:', (error as Error).message);
    return [];
  }
}
