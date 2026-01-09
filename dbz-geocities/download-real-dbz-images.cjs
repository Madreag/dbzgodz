const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create directory for images
const imageDir = path.join(__dirname, 'public', 'images', 'dbz');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    protocol.get(url, (response) => {
      // Follow redirects
      if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307 || response.statusCode === 308) {
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

async function downloadFromDragonBallAPI() {
  console.log('🐉 Fetching Dragon Ball Z characters from API...\n');

  try {
    // Try the Dragon Ball API
    const apiUrl = 'https://dragonball-api.com/api/characters?limit=20';
    console.log(`Fetching from: ${apiUrl}`);

    let characters;
    try {
      const response = await fetchJSON(apiUrl);
      characters = response.items || response.characters || response;
    } catch (error) {
      console.log('API fetch failed, trying alternative endpoint...');
      const altUrl = 'https://web.dragonball-api.com/api/characters?limit=20';
      const response = await fetchJSON(altUrl);
      characters = response.items || response.characters || response;
    }

    if (!Array.isArray(characters)) {
      throw new Error('Invalid API response format');
    }

    console.log(`Found ${characters.length} characters\n`);

    const manifest = [];
    let downloaded = 0;

    for (let i = 0; i < Math.min(20, characters.length); i++) {
      const character = characters[i];
      const name = character.name || character.Name || `Character${i + 1}`;
      const imageUrl = character.image || character.Image || character.imageUrl || character.img;

      if (!imageUrl) {
        console.log(`⚠️  Skipping ${name} - no image URL`);
        continue;
      }

      try {
        const ext = path.extname(new URL(imageUrl).pathname) || '.jpg';
        const filename = `dbz-${name.toLowerCase().replace(/\s+/g, '-')}-${i + 1}${ext}`;
        const filepath = path.join(imageDir, filename);

        console.log(`Downloading ${downloaded + 1}: ${name}`);
        console.log(`  URL: ${imageUrl}`);

        await downloadImage(imageUrl, filepath);

        manifest.push({
          filename: filename,
          character: name,
          description: character.description || character.Description || '',
          race: character.race || character.Race || '',
          ki: character.ki || character.Ki || '',
          maxKi: character.maxKi || character.MaxKi || ''
        });

        downloaded++;
        console.log(`✓ Downloaded: ${filename}\n`);

        // Small delay to be respectful
        await new Promise(resolve => setTimeout(resolve, 300));

      } catch (error) {
        console.error(`✗ Failed to download ${name}:`, error.message);
      }
    }

    if (downloaded === 0) {
      throw new Error('No images were downloaded successfully');
    }

    console.log(`\n✅ Successfully downloaded ${downloaded} images to ${imageDir}`);

    // Save manifest
    fs.writeFileSync(
      path.join(imageDir, 'manifest.json'),
      JSON.stringify(manifest, null, 2)
    );
    console.log('📝 Created manifest.json');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error('\nFalling back to known direct image URLs...\n');

    // Fallback: Use some known working DBZ image URLs
    await downloadFallbackImages();
  }
}

async function downloadFallbackImages() {
  console.log('Using fallback method with direct image URLs...\n');

  // These are some actual DBZ-related image URLs that should work
  // Using various free image sources
  const fallbackImages = [
    {
      name: 'Goku',
      url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Goku_SSJ.png/220px-Goku_SSJ.png',
      description: 'Super Saiyan Goku'
    },
    {
      name: 'Dragon Ball Z Logo',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Dragon_Ball_Z_logo.svg/1200px-Dragon_Ball_Z_logo.svg.png',
      description: 'Dragon Ball Z Official Logo'
    }
  ];

  const manifest = [];
  let downloaded = 0;

  for (let i = 0; i < fallbackImages.length; i++) {
    const item = fallbackImages[i];

    try {
      const ext = path.extname(new URL(item.url).pathname) || '.png';
      const filename = `dbz-${item.name.toLowerCase().replace(/\s+/g, '-')}-fallback-${i + 1}${ext}`;
      const filepath = path.join(imageDir, filename);

      console.log(`Downloading ${i + 1}: ${item.name}`);
      await downloadImage(item.url, filepath);

      manifest.push({
        filename: filename,
        character: item.name,
        description: item.description
      });

      downloaded++;
      console.log(`✓ Downloaded: ${filename}\n`);

    } catch (error) {
      console.error(`✗ Failed to download ${item.name}:`, error.message);
    }
  }

  if (downloaded > 0) {
    fs.writeFileSync(
      path.join(imageDir, 'manifest-fallback.json'),
      JSON.stringify(manifest, null, 2)
    );
    console.log(`\n✅ Downloaded ${downloaded} fallback images`);
  }
}

downloadFromDragonBallAPI().catch(console.error);
