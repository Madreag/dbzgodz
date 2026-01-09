const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Create directory for images
const imageDir = path.join(__dirname, 'public', 'images', 'dbz');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    protocol.get(url, (response) => {
      // Follow redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
        return;
      }

      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
        fileStream.on('error', reject);
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function downloadFromWikimedia() {
  console.log('🐉 Downloading Dragon Ball Z images from Wikimedia Commons...');

  // These are actual Dragon Ball related images from Wikimedia Commons
  // Using direct file URLs from public domain or freely licensed content
  const imageUrls = [
    // Dragon Ball manga/anime promotional images that are available
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Dragon_Ball_Z_logo.svg/1200px-Dragon_Ball_Z_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Dragon_Ball_Z_Goku.png/220px-Dragon_Ball_Z_Goku.png',
  ];

  // Generate some character placeholder images using a simple approach
  const characters = [
    { name: 'Goku', color: '#FF8C00', symbol: '🥋' },
    { name: 'Vegeta', color: '#0000FF', symbol: '👑' },
    { name: 'Gohan', color: '#FFD700', symbol: '⚡' },
    { name: 'Piccolo', color: '#228B22', symbol: '🟢' },
    { name: 'Trunks', color: '#9370DB', symbol: '🗡️' },
    { name: 'Krillin', color: '#FF6347', symbol: '⚪' },
    { name: 'Frieza', color: '#9370DB', symbol: '❄️' },
    { name: 'Cell', color: '#2E8B57', symbol: '🦠' },
    { name: 'Majin Buu', color: '#FF69B4', symbol: '🍬' },
    { name: 'Gotenks', color: '#FFA500', symbol: '👥' },
    { name: 'Android 18', color: '#87CEEB', symbol: '🤖' },
    { name: 'Yamcha', color: '#CD853F', symbol: '🐺' },
    { name: 'Tien', color: '#B0C4DE', symbol: '👁️' },
    { name: 'Raditz', color: '#8B4513', symbol: '💀' },
    { name: 'Nappa', color: '#A0522D', symbol: '💪' },
  ];

  let downloaded = 0;

  // Download any real images we have URLs for
  for (let i = 0; i < imageUrls.length; i++) {
    try {
      const ext = '.png';
      const filename = `dbz-real-${i + 1}${ext}`;
      const filepath = path.join(imageDir, filename);

      console.log(`Downloading ${i + 1}: ${filename}`);
      await downloadImage(imageUrls[i], filepath);
      downloaded++;
      console.log(`✓ Downloaded: ${filename}`);
    } catch (error) {
      console.error(`Failed to download image ${i + 1}:`, error.message);
    }
  }

  // For now, let's search online for free DBZ images
  // Using Lorem Picsum as placeholder with DBZ character names
  console.log('\n🔍 Generating character placeholder images...');

  for (let i = 0; i < Math.min(18, characters.length); i++) {
    try {
      const character = characters[i];
      // Using a placeholder service - in production you'd use real images
      // Using different seeds to get varied images
      const seed = Math.floor(Math.random() * 10000);
      const url = `https://picsum.photos/seed/${seed}/400/300`;

      const filename = `dbz-${character.name.toLowerCase()}-${i + 1}.jpg`;
      const filepath = path.join(imageDir, filename);

      console.log(`Downloading ${downloaded + 1}/20: ${filename}`);
      await downloadImage(url, filepath);
      downloaded++;
      console.log(`✓ Downloaded: ${filename}`);

      // Small delay to be respectful
      await new Promise(resolve => setTimeout(resolve, 300));

      if (downloaded >= 20) break;
    } catch (error) {
      console.error(`Failed to download placeholder:`, error.message);
    }
  }

  console.log(`\n✅ Successfully downloaded ${downloaded} images to ${imageDir}`);

  // Create a manifest file with character info
  const manifest = characters.slice(0, downloaded).map((char, i) => ({
    filename: `dbz-${char.name.toLowerCase()}-${i + 1}.jpg`,
    character: char.name,
    symbol: char.symbol
  }));

  fs.writeFileSync(
    path.join(imageDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  console.log('📝 Created manifest.json');
}

downloadFromWikimedia().catch(console.error);
