<script setup lang="ts">
import { ref } from 'vue'

interface Character {
  name: string
  title: string
  description: string
  ascii: string
  powerLevel: string
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
    powerLevel: 'OVER 9000!!!'
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
    powerLevel: '8500+'
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
    powerLevel: '9000+'
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
    powerLevel: '7500+'
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
    powerLevel: '7000+'
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
    powerLevel: '5000+'
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
        <pre class="ascii-art">{{ character.ascii }}</pre>
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
          <pre class="ascii-art-large">{{ selectedCharacter.ascii }}</pre>
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
  border: 5px solid #FF0000;
  padding: 20px;
  margin: 20px 0;
}

.gallery-section h3 {
  color: #FF0000;
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
  background: linear-gradient(135deg, #FFFF00 0%, #FF8800 100%);
  border: 4px solid #000000;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.5);
}

.character-card:hover {
  transform: scale(1.05) rotate(-2deg);
  box-shadow: 8px 8px 0px rgba(255, 0, 0, 0.8);
  border-color: #FF0000;
}

.card-header {
  background-color: #FF0000;
  color: #FFFFFF;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  border: 2px solid #000000;
  margin-bottom: 10px;
}

.ascii-art {
  font-family: 'Courier New', monospace;
  font-size: 14px;
  text-align: center;
  margin: 15px 0;
  background-color: #000000;
  color: #00FF00;
  padding: 10px;
  border: 2px solid #00FF00;
  line-height: 1.2;
}

.ascii-art-large {
  font-family: 'Courier New', monospace;
  font-size: 18px;
  text-align: center;
  margin: 20px 0;
  background-color: #000000;
  color: #00FF00;
  padding: 20px;
  border: 3px solid #00FF00;
  line-height: 1.2;
}

.card-footer {
  background-color: #000000;
  color: #FFFFFF;
  padding: 10px;
  text-align: center;
  border: 2px solid #FFFF00;
}

.power-level {
  color: #FF0000;
  font-weight: bold;
  font-size: 20px;
  margin-top: 5px;
  animation: powerPulse 1s infinite;
}

@keyframes powerPulse {
  0%, 100% {
    color: #FF0000;
    text-shadow: 0 0 5px #FF0000;
  }
  50% {
    color: #FFFF00;
    text-shadow: 0 0 10px #FFFF00;
  }
}

.gallery-footer {
  margin-top: 20px;
  padding: 15px;
  background: linear-gradient(to right, #FF0000, #FFFF00);
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
  background: linear-gradient(135deg, #FFFF00 0%, #FF8800 100%);
  border: 8px solid #FF0000;
  padding: 30px;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 0 30px rgba(255, 0, 0, 0.8);
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
  background-color: #FF0000;
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
  background-color: #FF0000;
  transform: scale(1.1);
}

.modal-body h3 {
  color: #FF0000;
  text-align: center;
  margin-bottom: 15px;
  font-size: 22px;
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
  color: #00FF00;
  border: 3px solid #00FF00;
  padding: 15px;
  margin-top: 20px;
}

.stats p {
  margin: 10px 0;
  font-size: 16px;
}

.stats strong {
  color: #FFFF00;
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
