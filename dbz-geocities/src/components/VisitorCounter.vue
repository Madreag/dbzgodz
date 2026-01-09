<script setup lang="ts">
import { ref, onMounted } from 'vue'

const visitorCount = ref(0)
const digits = ref<string[]>([])

onMounted(() => {
  // Simulate visitor count (in a real app, this would come from a backend)
  const storedCount = localStorage.getItem('visitCount')
  const count = storedCount ? parseInt(storedCount) : Math.floor(Math.random() * 99999) + 10000
  localStorage.setItem('visitCount', (count + 1).toString())
  visitorCount.value = count + 1

  // Split count into individual digits for the counter display
  digits.value = visitorCount.value.toString().padStart(6, '0').split('')
})
</script>

<template>
  <div class="visitor-counter">
    <h2>👁️ VISITORS 👁️</h2>
    <div class="counter-display">
      <div
        v-for="(digit, index) in digits"
        :key="index"
        class="digit"
      >
        {{ digit }}
      </div>
    </div>
    <p class="counter-text">You are visitor #{{ visitorCount }}!</p>
  </div>
</template>

<style scoped>
.visitor-counter {
  background-color: #000000;
  border: 3px solid #FF0000;
  padding: 15px;
  margin: 20px 0;
  text-align: center;
}

.visitor-counter h2 {
  color: #FFFF00;
  margin-bottom: 10px;
}

.counter-display {
  display: flex;
  justify-content: center;
  gap: 2px;
  margin: 10px 0;
  background-color: #000080;
  padding: 10px;
  border: 2px inset #FFFFFF;
}

.digit {
  background: linear-gradient(to bottom, #FF0000, #8B0000);
  color: #FFFF00;
  font-family: 'Courier New', monospace;
  font-size: 24px;
  font-weight: bold;
  width: 30px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px outset #FF0000;
  box-shadow:
    inset 0 0 5px rgba(255, 255, 0, 0.5),
    0 0 10px rgba(255, 0, 0, 0.8);
  text-shadow: 0 0 5px #FFFF00;
  animation: glow 2s infinite alternate;
}

@keyframes glow {
  0% {
    box-shadow:
      inset 0 0 5px rgba(255, 255, 0, 0.5),
      0 0 10px rgba(255, 0, 0, 0.8);
  }
  100% {
    box-shadow:
      inset 0 0 10px rgba(255, 255, 0, 0.8),
      0 0 20px rgba(255, 0, 0, 1);
  }
}

.counter-text {
  color: #00FF00;
  font-weight: bold;
  margin-top: 10px;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}
</style>
