<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VisitorCounter from './components/VisitorCounter.vue'
import DBZGallery from './components/DBZGallery.vue'

const currentDate = ref('')

onMounted(() => {
  currentDate.value = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>

<template>
  <div class="geocities-container">
    <!-- Header with animated title -->
    <div class="header">
      <marquee behavior="alternate" scrollamount="5">
        <h1 class="title">
          🔥 WELCOME TO THE ULTIMATE DRAGON BALL Z FAN SITE!!! 🔥
        </h1>
      </marquee>
      <marquee behavior="scroll" scrollamount="3">
        ⭐ ⭐ ⭐ HOME OF THE SUPER SAIYAN WARRIORS ⭐ ⭐ ⭐
      </marquee>
    </div>

    <!-- Under Construction Banner -->
    <center>
      <img src="/gifs/construction.gif" alt="Under Construction" style="max-width: 200px;"
           onerror="this.style.display='none'">
      <p class="construction-text">🚧 SITE UNDER CONSTRUCTION 🚧</p>
      <p class="last-updated">Last Updated: {{ currentDate }}</p>
    </center>

    <!-- Main Content Area with Frames -->
    <table border="5" cellpadding="10" cellspacing="5" bgcolor="#000080" width="100%">
      <tr>
        <td bgcolor="#FF0000" width="200" valign="top">
          <!-- Left Sidebar -->
          <div class="sidebar">
            <h2>🔥 NAVIGATION 🔥</h2>
            <ul class="nav-menu">
              <li><a href="#home">⚡ HOME ⚡</a></li>
              <li><a href="#characters">💪 CHARACTERS 💪</a></li>
              <li><a href="#gallery">📸 GALLERY 📸</a></li>
              <li><a href="#episodes">📺 EPISODES 📺</a></li>
              <li><a href="#guestbook">📝 GUESTBOOK 📝</a></li>
              <li><a href="#links">🔗 LINKS 🔗</a></li>
            </ul>

            <div class="webring">
              <p>🌐 DBZ WEBRING 🌐</p>
              <a href="#">&lt;&lt; PREV</a> |
              <a href="#">RANDOM</a> |
              <a href="#">NEXT &gt;&gt;</a>
            </div>

            <VisitorCounter />
          </div>
        </td>

        <td bgcolor="#FFFF00" valign="top">
          <!-- Main Content -->
          <div class="main-content">
            <center>
              <h2 class="section-title">
                ⚔️ WELCOME TO GOKU'S PAGE ⚔️
              </h2>
            </center>

            <marquee behavior="scroll" direction="up" height="100" scrollamount="2">
              <p style="color: red; font-size: 20px;">
                🌟 NEW! Check out my DBZ picture gallery! 🌟
              </p>
            </marquee>

            <div class="content-section">
              <h3>📜 ABOUT THIS SITE 📜</h3>
              <p>
                Hi!!! Welcome to my AWESOME Dragon Ball Z fan site! I've been a huge
                DBZ fan since 1999 and this site has ALL the coolest DBZ stuff on the web!!!
              </p>
              <p>
                <blink>Check out my picture gallery below!!!</blink> I've got tons of
                pictures of Goku, Vegeta, Gohan, and all the Z-fighters!!!
              </p>
            </div>

            <center>
              <img src="/gifs/dragonball.gif" alt="Dragon Ball" style="max-width: 150px;"
                   onerror="this.style.display='none'">
            </center>

            <div class="content-section" id="characters">
              <h3>💥 FAVORITE CHARACTERS 💥</h3>
              <ul class="character-list">
                <li><strong>GOKU</strong> - The STRONGEST fighter in the universe! 🥋</li>
                <li><strong>VEGETA</strong> - The Prince of all Saiyans! 👑</li>
                <li><strong>GOHAN</strong> - Goku's son who became Super Saiyan 2! ⚡</li>
                <li><strong>PICCOLO</strong> - The coolest Namekian ever! 🟢</li>
                <li><strong>TRUNKS</strong> - The time traveler with purple hair! ⏰</li>
              </ul>
            </div>

            <div id="gallery">
              <DBZGallery />
            </div>

            <div class="content-section">
              <h3>🌟 COOL DBZ FACTS 🌟</h3>
              <marquee>
                Did you know Goku can lift over 100 tons??? |
                Vegeta's power level is OVER 9000!!! |
                The fusion dance can create the ultimate warrior!!! |
                There are 7 Dragon Balls that grant wishes!!!
              </marquee>
            </div>

            <div class="content-section">
              <h3>📧 CONTACT ME 📧</h3>
              <p>
                Email me at: <a href="mailto:goku_fan@geocities.com">goku_fan@geocities.com</a>
              </p>
              <p>
                Sign my <a href="#guestbook">GUESTBOOK</a>!!!
              </p>
            </div>
          </div>
        </td>

        <td bgcolor="#00FF00" width="200" valign="top">
          <!-- Right Sidebar -->
          <div class="sidebar">
            <h2>🎵 MIDI PLAYER 🎵</h2>
            <p>♪ DBZ Theme ♪</p>
            <p style="font-size: 10px;">(MIDI music would play here)</p>

            <h2>⭐ AWARDS ⭐</h2>
            <div class="awards">
              <p>🏆 Best DBZ Site 1999</p>
              <p>🥇 Cool Site Award</p>
              <p>💎 Geocities Featured</p>
            </div>

            <h2>🔗 AFFILIATES 🔗</h2>
            <ul class="links">
              <li><a href="#">DBZ Central</a></li>
              <li><a href="#">Anime Web</a></li>
              <li><a href="#">Saiyan Pride</a></li>
              <li><a href="#">Capsule Corp</a></li>
            </ul>

            <div class="banner">
              <p style="font-size: 12px;">
                🖥️ Best viewed in<br>
                Internet Explorer 5.0<br>
                800x600 resolution
              </p>
            </div>
          </div>
        </td>
      </tr>
    </table>

    <!-- Footer -->
    <center class="footer">
      <hr>
      <marquee behavior="scroll" scrollamount="4">
        ⚡⚡⚡ Thanks for visiting! Come back soon!!! ⚡⚡⚡
      </marquee>
      <p>
        © 1999-2000 Goku's DBZ Page |
        <img src="/gifs/netscape.gif" alt="Netscape" style="height: 20px;"
             onerror="this.style.display='none'">
        Hosted on GeoCities
      </p>
      <p>
        This site is part of the <a href="#">DBZ WebRing</a>
      </p>
      <img src="/gifs/hotlink.gif" alt="No Hotlinking" style="max-width: 88px;"
           onerror="this.style.display='none'">
    </center>
  </div>
</template>

<style>
/* GeoCities Classic Style */
@import url('https://fonts.googleapis.com/css2?family=Comic+Sans+MS&display=swap');

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #000080;
  background-image:
    repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,0,.1) 10px, rgba(255,255,0,.1) 20px),
    repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,0,255,.1) 10px, rgba(255,0,255,.1) 20px);
  font-family: 'Comic Sans MS', 'Comic Sans', cursive, sans-serif;
  color: #000000;
}

.geocities-container {
  margin: 0;
  padding: 10px;
}

.header {
  background: linear-gradient(90deg, #FF0000, #FFFF00, #00FF00, #00FFFF, #0000FF, #FF00FF);
  padding: 20px;
  border: 5px solid #000000;
  box-shadow: 5px 5px 0px #FF0000;
}

.title {
  color: #FFFFFF;
  text-shadow:
    3px 3px 0 #000000,
    -1px -1px 0 #FF0000,
    1px -1px 0 #FF0000,
    -1px 1px 0 #FF0000,
    1px 1px 0 #FF0000;
  font-size: 2.5em;
  text-align: center;
  animation: rainbow 3s infinite;
}

@keyframes rainbow {
  0% { color: #FF0000; }
  20% { color: #FFFF00; }
  40% { color: #00FF00; }
  60% { color: #00FFFF; }
  80% { color: #0000FF; }
  100% { color: #FF00FF; }
}

.construction-text {
  color: #FF0000;
  font-size: 24px;
  font-weight: bold;
  text-decoration: blink;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

.last-updated {
  color: #FFFFFF;
  background-color: #000000;
  padding: 5px;
  border: 2px solid #FFFF00;
  display: inline-block;
}

table {
  margin: 20px auto;
  box-shadow: 10px 10px 0px rgba(0,0,0,0.5);
}

.sidebar {
  padding: 15px;
  color: #000000;
}

.sidebar h2 {
  color: #FFFFFF;
  background-color: #000000;
  padding: 5px;
  border: 3px solid #FFFF00;
  text-align: center;
  margin-bottom: 10px;
}

.nav-menu {
  list-style: none;
  padding: 0;
}

.nav-menu li {
  margin: 10px 0;
  background-color: #FFFF00;
  border: 2px solid #000000;
  padding: 5px;
}

.nav-menu a {
  color: #0000FF;
  text-decoration: none;
  font-weight: bold;
  display: block;
}

.nav-menu a:hover {
  color: #FF0000;
  background-color: #00FFFF;
}

.webring {
  margin-top: 20px;
  background-color: #FFFFFF;
  border: 3px dashed #000000;
  padding: 10px;
  text-align: center;
}

.webring a {
  color: #0000FF;
  font-weight: bold;
}

.main-content {
  padding: 20px;
  color: #000000;
}

.section-title {
  background: linear-gradient(to right, #FF0000, #FFFF00);
  color: #FFFFFF;
  padding: 15px;
  border: 5px ridge #000000;
  text-shadow: 2px 2px 0 #000000;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.content-section {
  background-color: #FFFFFF;
  border: 3px solid #000000;
  padding: 15px;
  margin: 20px 0;
  box-shadow: 5px 5px 0px rgba(0,0,0,0.3);
}

.content-section h3 {
  color: #FF0000;
  text-decoration: underline;
  margin-bottom: 10px;
}

.character-list {
  list-style-type: none;
  padding-left: 0;
}

.character-list li {
  margin: 10px 0;
  padding: 10px;
  background: linear-gradient(to right, #FFFF00, #FFFFFF);
  border-left: 5px solid #FF0000;
}

.character-list strong {
  color: #FF0000;
  font-size: 1.2em;
}

.awards {
  background-color: #FFFF00;
  border: 3px double #000000;
  padding: 10px;
  margin: 10px 0;
  text-align: center;
}

.links {
  list-style: none;
  padding: 0;
}

.links li {
  margin: 5px 0;
  background-color: #FFFF00;
  padding: 5px;
  border: 1px solid #000000;
}

.links a {
  color: #0000FF;
  text-decoration: underline;
}

.banner {
  background-color: #000000;
  color: #00FF00;
  padding: 10px;
  margin-top: 20px;
  border: 2px solid #00FF00;
  text-align: center;
}

.footer {
  background-color: #000000;
  color: #FFFFFF;
  padding: 20px;
  margin-top: 20px;
}

.footer a {
  color: #FFFF00;
}

/* Blinking text effect */
blink, .blink {
  animation: blink 1s step-start infinite;
}

/* Center tag support */
center {
  text-align: center;
  display: block;
}

/* Link styling */
a {
  color: #0000FF;
  text-decoration: underline;
}

a:visited {
  color: #800080;
}

a:hover {
  color: #FF0000;
  background-color: #FFFF00;
}

/* Marquee styling */
marquee {
  color: #FFFFFF;
  font-weight: bold;
  font-size: 18px;
}
</style>
