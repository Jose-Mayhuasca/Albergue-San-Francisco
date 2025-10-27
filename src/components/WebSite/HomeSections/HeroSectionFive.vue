<script setup lang="ts">
// Componente de ejemplo para HeroSectionFive
// Puedes reemplazar el contenido con la versión real que necesites
</script>

<template>
  <section class="hero-five">
    <div class="content">
      <div class="card green">
        <p class="check-text">Keep overlays subtle, use branded highlight covers.</p>
      </div>
      <div class="card red">
        <p class="x-text">Mix serif and script fonts. Avoid bright backgrounds.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-five {
  padding: 2rem 1rem;
  background: #ffffff; /* Fondo blanco */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.hero-five .content {
  display: flex;
  justify-content: space-between;
  width: 70%;
  max-width: 1200px;
}

.hero-five .card {
  padding: 2rem;
  width: 45%;
  text-align: center;
  border-radius: 8px;
  font-family: 'Arial', sans-serif;
}

.green {
  background-color: #00c851;
  color: white;
}

.red {
  background-color: #ff4444;
  color: white;
}

.hero-five .card p {
  font-size: 1.2rem;
  font-weight: bold;
}

.check-text {
  margin: 0;
}

.x-text {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.x-text::before {
  content: '✘';
  font-size: 2rem;
  color: white;
  margin-right: 0.5rem;
}
</style>
