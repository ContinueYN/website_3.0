import pg from 'pg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const { Pool } = pg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pool = new Pool({
  host: '127.0.0.1',
  port: 5432,
  user: 'website_db',
  password: 'Yn123...',
  database: 'website_db',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export async function connectDatabase() {
  try {
    const client = await pool.connect();
    console.log('数据库连接成功');
    client.release();
    return true;
  } catch (error) {
    console.error('数据库连接失败:', (error as Error).message);
    return false;
  }
}

export async function initDatabase() {
  try {
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf-8');
    
    await pool.query(schema);
    console.log('数据库初始化成功');
    return true;
  } catch (error) {
    console.error('数据库初始化失败:', (error as Error).message);
    return false;
  }
}

export async function closeDatabase() {
  await pool.end();
  console.log('数据库连接已关闭');
}

export default pool;
