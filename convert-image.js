const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'Image', 'project-leadflow-dashboard.jpg');
const webpPath = path.join(__dirname, 'Image', 'project-leadflow-dashboard.webp');
const avifPath = path.join(__dirname, 'Image', 'project-leadflow-dashboard.avif');

async function convertImage() {
  try {
    // Convert to WebP
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(webpPath);
    console.log('Converted to WebP successfully!');

    // Convert to AVIF
    await sharp(inputPath)
      .avif({ quality: 70 })
      .toFile(avifPath);
    console.log('Converted to AVIF successfully!');
  } catch (err) {
    console.error('Error during conversion:', err);
  }
}

convertImage();
