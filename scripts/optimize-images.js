import fs from 'fs';
import path from 'path';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminPngquant from 'imagemin-pngquant';
import imageminJpegtran from 'imagemin-jpegtran';

const imagesDir = path.join(process.cwd(), 'src', 'assets', 'images');
const outputDir = path.join(process.cwd(), 'src', 'assets', 'images');

async function optimizeImages() {
  try {
    console.log('开始优化图片...');
    
    // 确保输出目录存在
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // 压缩PNG和JPG图片
    const compressedImages = await imagemin([`${imagesDir}/*.{png,jpg}`], {
      destination: outputDir,
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8]
        }),
        imageminJpegtran({
          quality: 80
        })
      ]
    });
    
    console.log(`已压缩 ${compressedImages.length} 张图片`);
    
    // 转换为WebP格式
    const webpImages = await imagemin([`${imagesDir}/*.{png,jpg}`], {
      destination: outputDir,
      plugins: [
        imageminWebp({
          quality: 80
        })
      ]
    });
    
    console.log(`已转换 ${webpImages.length} 张图片为WebP格式`);
    
    console.log('图片优化完成！');
  } catch (error) {
    console.error('图片优化失败:', error);
  }
}

optimizeImages();
