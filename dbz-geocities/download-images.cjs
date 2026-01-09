const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directory for images
const imageDir = path.join(__dirname, 'public', 'images', 'dbz');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function searchAndDownloadImages() {
  console.log('🐉 Starting Dragon Ball Z image search...');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Search for Dragon Ball Z images on Wikimedia Commons
    console.log('Searching Wikimedia Commons...');
    await page.goto('https://commons.wikimedia.org/wiki/Category:Dragon_Ball', {
      waitUntil: 'networkidle'
    });

    // Get image links from the page
    const imageLinks = await page.$$eval('a.image img', imgs =>
      imgs.map(img => ({
        src: img.src,
        alt: img.alt || 'dbz'
      })).filter(img => img.src && !img.src.includes('icon'))
    );

    console.log(`Found ${imageLinks.length} images`);

    const maxImages = Math.min(20, imageLinks.length);
    let downloaded = 0;

    for (let i = 0; i < maxImages; i++) {
      try {
        const imgData = imageLinks[i];
        const ext = path.extname(new URL(imgData.src).pathname) || '.jpg';
        const filename = `dbz-${i + 1}${ext}`;
        const filepath = path.join(imageDir, filename);

        console.log(`Downloading ${i + 1}/${maxImages}: ${filename}`);

        // For Wikimedia, we need to get the full resolution image
        // Navigate to the file page to get the actual image URL
        const thumbnailUrl = imgData.src;

        // Try to get higher resolution by modifying URL
        let fullImageUrl = thumbnailUrl;
        if (thumbnailUrl.includes('/thumb/')) {
          fullImageUrl = thumbnailUrl.replace('/thumb/', '/').replace(/\/\d+px-[^/]+$/, '');
        }

        await downloadImage(fullImageUrl, filepath);
        downloaded++;
        console.log(`✓ Downloaded: ${filename}`);

        // Small delay to be respectful
        await page.waitForTimeout(500);
      } catch (error) {
        console.error(`Failed to download image ${i + 1}:`, error.message);
      }
    }

    // Also try DuckDuckGo image search as backup
    if (downloaded < 10) {
      console.log('\n🔍 Searching DuckDuckGo for more images...');
      await page.goto('https://duckduckgo.com/?q=dragon+ball+z+characters&iax=images&ia=images', {
        waitUntil: 'networkidle'
      });

      await page.waitForTimeout(2000);

      const ddgImages = await page.$$eval('img.tile--img__img', imgs =>
        imgs.slice(0, 15).map(img => img.src).filter(src => src && src.startsWith('http'))
      );

      console.log(`Found ${ddgImages.length} additional images on DuckDuckGo`);

      for (let i = 0; i < ddgImages.length && downloaded < 20; i++) {
        try {
          const imgUrl = ddgImages[i];
          const filename = `dbz-ddg-${downloaded + 1}.jpg`;
          const filepath = path.join(imageDir, filename);

          console.log(`Downloading ${downloaded + 1}/20: ${filename}`);
          await downloadImage(imgUrl, filepath);
          downloaded++;
          console.log(`✓ Downloaded: ${filename}`);

          await page.waitForTimeout(500);
        } catch (error) {
          console.error(`Failed to download DDG image:`, error.message);
        }
      }
    }

    console.log(`\n✅ Successfully downloaded ${downloaded} images to ${imageDir}`);

  } catch (error) {
    console.error('Error during image search:', error);
  } finally {
    await browser.close();
  }
}

searchAndDownloadImages().catch(console.error);
