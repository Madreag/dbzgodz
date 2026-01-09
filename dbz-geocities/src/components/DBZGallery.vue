<script setup lang="ts">
import { ref } from 'vue'

interface Character {
  name: string
  title: string
  description: string
  ascii: string
  powerLevel: string
  image: string
}

const characters = ref<Character[]>([
  {
    name: 'GOKU',
    title: 'The Legendary Super Saiyan',
    description: 'Earth\'s mightiest defender! Master of the Kamehameha wave!',
    ascii: `
    ⚡⚡⚡
   /|||||\\
   ( o o )
    \\═══/
     |||
    /||\\
   / || \\`,
    powerLevel: 'OVER 9000!!!',
    image: '/images/dbz/dbz-goku-1.webp'
  },
  {
    name: 'VEGETA',
    title: 'Prince of All Saiyans',
    description: 'The proud Saiyan warrior with an attitude!',
    ascii: `
    💥💥💥
   /▓▓▓▓▓\\
   (>_<)
    \\═══/
     |||
    /||\\
   / || \\`,
    powerLevel: '54 MILLION!',
    image: '/images/dbz/dbz-vegeta-2.webp'
  },
  {
    name: 'PICCOLO',
    title: 'The Namekian Warrior',
    description: 'Green warrior from Planet Namek!',
    ascii: `
    🟢🟢🟢
   /|||||\\
   (. .)
    \\═══/
     |||
    /||\\
   / || \\`,
    powerLevel: '2 MILLION',
    image: '/images/dbz/dbz-piccolo-3.webp'
  },
  {
    name: 'BULMA',
    title: 'The Genius Inventor',
    description: 'Brilliant scientist and Dragon Ball hunter!',
    ascii: `
    💡💡💡
   /|||||\\
   (^_^)
    \\═══/
     |||
    /||\\
   / || \\`,
    powerLevel: 'GENIUS IQ!',
    image: '/images/dbz/dbz-bulma-4.webp'
  },
  {
    name: 'FREEZER',
    title: 'The Galactic Tyrant',
    description: 'The most feared villain in the universe!',
    ascii: `
    ❄️❄️❄️
   /▓▓▓▓▓\\
   (X_X)
    \\═══/
     |||
    /||\\
   / || \\`,
    powerLevel: '530,000!!!',
    image: '/images/dbz/dbz-freezer-5.webp'
  },
  {
    name: 'GOHAN',
    title: 'The Ultimate Warrior',
    description: 'Goku\'s son who surpassed all limits!',
    ascii: `
    ⭐⭐⭐
   /|||||\\
   (^_^)
    \\═══/
     |||
    /||\\
   / || \\`,
    powerLevel: '45 MILLION!',
    image: '/images/dbz/dbz-gohan-10.webp'
  },
  {
    name: 'KRILLIN',
    title: 'Earth\'s Strongest Human',
    description: 'Goku\'s best friend and bald warrior!',
    ascii: `
    ⚪⚪⚪
   /OOOOO\\
   (^_^)
    \\═══/
     |||
    /||\\
   / || \\`,
    powerLevel: '1 MILLION!',
    image: '/images/dbz/dbz-krillin-11.webp'
  },
  {
    name: 'CELULA',
    title: 'The Perfect Android',
    description: 'Bio-engineered to be the ultimate life form!',
    ascii: `
    🦠🦠🦠
   /▓▓▓▓▓\\
   (O_O)
    \\═══/
     |||
    /||\\
   / || \\`,
    powerLevel: '250 MILLION!',
    image: '/images/dbz/dbz-celula-9.webp'
  },
  {
    name: 'GOTENKS',
    title: 'The Fusion Warrior',
    description: 'Goten + Trunks = MAXIMUM POWER!',
    ascii: `
    👥👥👥
   /|||||\\
   (^o^)
    \\═══/
     |||
    /||\\
   / || \\`,
    powerLevel: '65.6 MILLION!',
    image: '/images/dbz/dbz-gotenks-15.webp'
  },
  {
    name: 'TRUNKS',
    title: 'The Future Warrior',
    description: 'Time traveler with a sword and attitude!',
    ascii: `
    🗡️🗡️🗡️
   /|||||\\
   (o_o)
    \\═══/
     |||
    /||\\
   / || \\`,
    powerLevel: '50 MILLION!',
    image: '/images/dbz/dbz-trunks-16.webp'
  },
  {
    name: 'YAMCHA',
    title: 'The Desert Bandit',
    description: 'Former bandit turned Z-Fighter!',
    ascii: `
    🐺🐺🐺
   /|||||\\
   (^_^)
    \\═══/
     |||
    /||\\
   / || \\`,
    powerLevel: '1,980,000',
    image: '/images/dbz/dbz-yamcha-13.webp'
  },
  {
    name: 'TENSHINHAN',
    title: 'The Three-Eyed Warrior',
    description: 'Master of martial arts and the Tri-Beam!',
    ascii: `
    👁️👁️👁️
   /|||||\\
   (o_o)
    \\═══/
     |||
    /||\\
   / || \\`,
    powerLevel: '2.4 MILLION!',
    image: '/images/dbz/dbz-tenshinhan-12.webp'
  },
  {
    name: 'BARDOCK',
    title: 'Goku\'s Father',
    description: 'The legendary Saiyan who foresaw the future!',
    ascii: `
    🔥🔥🔥
   /|||||\\
   (>_<)
    \\═══/
     |||
    /||\\
   / || \\`,
    powerLevel: '450,000',
    image: '/images/dbz/dbz-bardock-18.webp'
  },
  {
    name: 'MASTER ROSHI',
    title: 'The Turtle Hermit',
    description: 'Ancient martial arts master and teacher!',
    ascii: `
    🐢🐢🐢
   /OOOOO\\
   (^_^)
    \\═══/
     |||
    /||\\
   / || \\`,
    powerLevel: '500,000',
    image: '/images/dbz/dbz-master-roshi-17.webp'
  },
  {
    name: 'CHI-CHI',
    title: 'The Ox-King\'s Daughter',
    description: 'Goku\'s wife and fierce mother!',
    ascii: `
    👸👸👸
   /|||||\\
   (^_^)
    \\═══/
     |||
    /||\\
   / || \\`,
    powerLevel: 'MOM POWER!',
    image: '/images/dbz/dbz-chi-chi-14.webp'
  },
  {
    name: 'GINYU',
    title: 'Leader of the Ginyu Force',
    description: 'Elite mercenary with body-swapping powers!',
    ascii: `
    💜💜💜
   /|||||\\
   (^_^)
    \\═══/
     |||
    /||\\
   / || \\`,
    powerLevel: '25,000',
    image: '/images/dbz/dbz-ginyu-8.webp'
  },
  {
    name: 'ZARBON',
    title: 'Frieza\'s Elite Warrior',
    description: 'Elegant fighter with a monstrous transformation!',
    ascii: `
    👹👹👹
   /▓▓▓▓▓\\
   (o_o)
    \\═══/
     |||
    /||\\
   / || \\`,
    powerLevel: '30,000',
    image: '/images/dbz/dbz-zarbon-6.webp'
  },
  {
    name: 'DODORIA',
    title: 'Frieza\'s Brutal Commander',
    description: 'Pink warrior known for ruthless brutality!',
    ascii: `
    💢💢💢
   /▓▓▓▓▓\\
   (>_<)
    \\═══/
     |||
    /||\\
   / || \\`,
    powerLevel: '20,000',
    image: '/images/dbz/dbz-dodoria-7.webp'
  }
])

const selectedCharacter = ref<Character | null>(null)

const showCharacter = (character: Character) => {
  selectedCharacter.value = character
}

const closeModal = () => {
  selectedCharacter.value = null
}
</script>

<template>
  <div class="gallery-section">
    <h3>📸 AWESOME DBZ CHARACTER GALLERY 📸</h3>
    <marquee behavior="scroll" scrollamount="3">
      🔥 Click on any character to see more info!!! 🔥
    </marquee>

    <div class="gallery-grid">
      <div
        v-for="character in characters"
        :key="character.name"
        class="character-card"
        @click="showCharacter(character)"
      >
        <div class="card-header">
          ⭐ {{ character.name }} ⭐
        </div>
        <div class="character-image-container">
          <img
            :src="character.image"
            :alt="character.name"
            class="character-image"
            loading="lazy"
          />
        </div>
        <div class="card-footer">
          <p>Power Level:</p>
          <p class="power-level">{{ character.powerLevel }}</p>
        </div>
      </div>
    </div>

    <!-- Modal for character details -->
    <div v-if="selectedCharacter" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h2>{{ selectedCharacter.name }}</h2>
          <button class="close-btn" @click="closeModal">✖</button>
        </div>
        <div class="modal-body">
          <h3>{{ selectedCharacter.title }}</h3>
          <div class="modal-image-container">
            <img
              :src="selectedCharacter.image"
              :alt="selectedCharacter.name"
              class="modal-character-image"
            />
          </div>
          <p class="description">{{ selectedCharacter.description }}</p>
          <div class="stats">
            <p><strong>Power Level:</strong> {{ selectedCharacter.powerLevel }}</p>
            <p><strong>Status:</strong> LEGENDARY FIGHTER</p>
            <p><strong>Series:</strong> Dragon Ball Z</p>
          </div>
        </div>
      </div>
    </div>

    <div class="gallery-footer">
      <marquee behavior="alternate">
        🌟 MORE PICTURES COMING SOON!!! 🌟
      </marquee>
      <p style="margin-top: 10px;">
        <blink>⚠️ All images are fan tributes ⚠️</blink>
      </p>
    </div>
  </div>
</template>

<style scoped>
.gallery-section {
  background-color: #FFFFFF;
  border: 5px solid #0066CC;
  padding: 20px;
  margin: 20px 0;
}

.gallery-section h3 {
  color: #0066CC;
  text-align: center;
  font-size: 24px;
  text-decoration: underline;
  margin-bottom: 15px;
  text-shadow: 2px 2px 0 #000000;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.character-card {
  background: linear-gradient(135deg, #66B3FF 0%, #0099FF 100%);
  border: 4px solid #000000;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.5);
}

.character-card:hover {
  transform: scale(1.05) rotate(-2deg);
  box-shadow: 8px 8px 0px rgba(0, 102, 204, 0.8);
  border-color: #0066CC;
}

.card-header {
  background-color: #0066CC;
  color: #FFFFFF;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  border: 2px solid #000000;
  margin-bottom: 10px;
}

.character-image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: #000000;
  border: 3px solid #00CCFF;
  display: flex;
  align-items: center;
  justify-content: center;
}

.character-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.character-card:hover .character-image {
  transform: scale(1.1);
}

.ascii-art {
  font-family: 'Courier New', monospace;
  font-size: 14px;
  text-align: center;
  margin: 15px 0;
  background-color: #000000;
  color: #00CCFF;
  padding: 10px;
  border: 2px solid #00CCFF;
  line-height: 1.2;
}

.ascii-art-large {
  font-family: 'Courier New', monospace;
  font-size: 18px;
  text-align: center;
  margin: 20px 0;
  background-color: #000000;
  color: #00CCFF;
  padding: 20px;
  border: 3px solid #00CCFF;
  line-height: 1.2;
}

.card-footer {
  background-color: #000000;
  color: #FFFFFF;
  padding: 10px;
  text-align: center;
  border: 2px solid #00CCFF;
}

.power-level {
  color: #0099FF;
  font-weight: bold;
  font-size: 20px;
  margin-top: 5px;
  animation: powerPulse 1s infinite;
}

@keyframes powerPulse {
  0%, 100% {
    color: #0099FF;
    text-shadow: 0 0 5px #0099FF;
  }
  50% {
    color: #00CCFF;
    text-shadow: 0 0 10px #00CCFF;
  }
}

.gallery-footer {
  margin-top: 20px;
  padding: 15px;
  background: linear-gradient(to right, #0066CC, #00CCFF);
  border: 3px dashed #000000;
  text-align: center;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  background: linear-gradient(135deg, #66B3FF 0%, #0099FF 100%);
  border: 8px solid #0066CC;
  padding: 30px;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 0 30px rgba(0, 102, 204, 0.8);
  animation: slideIn 0.3s;
}

@keyframes slideIn {
  from {
    transform: scale(0.8) translateY(-50px);
  }
  to {
    transform: scale(1) translateY(0);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0066CC;
  color: #FFFFFF;
  padding: 15px;
  margin: -30px -30px 20px -30px;
  border-bottom: 5px solid #000000;
}

.modal-header h2 {
  margin: 0;
  font-size: 28px;
  text-shadow: 2px 2px 0 #000000;
}

.close-btn {
  background-color: #000000;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  padding: 5px 15px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}

.close-btn:hover {
  background-color: #0066CC;
  transform: scale(1.1);
}

.modal-body h3 {
  color: #0066CC;
  text-align: center;
  margin-bottom: 15px;
  font-size: 22px;
}

.modal-image-container {
  width: 100%;
  max-height: 400px;
  overflow: hidden;
  background-color: #000000;
  border: 5px solid #0066CC;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.modal-character-image {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
}

.description {
  background-color: #FFFFFF;
  border: 3px solid #000000;
  padding: 15px;
  margin: 20px 0;
  font-size: 16px;
  text-align: center;
}

.stats {
  background-color: #000000;
  color: #00CCFF;
  border: 3px solid #00CCFF;
  padding: 15px;
  margin-top: 20px;
}

.stats p {
  margin: 10px 0;
  font-size: 16px;
}

.stats strong {
  color: #66B3FF;
}

/* Blinking text */
blink {
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
}
</style>
