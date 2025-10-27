<script setup lang="ts">
/**
 * HomePage - Página principal del sitio web del Albergue San Francisco
 * Contiene todas las secciones principales con diseño responsivo
 */

import HeroSectionFive from '@/components/WebSite/HomeSections/HeroSectionFive.vue';
import HeroSectionFour from '@/components/WebSite/HomeSections/HeroSectionFour.vue';
import HeroSectionOne from '@/components/WebSite/HomeSections/HeroSectionOne.vue';
import HeroSectionThree from '@/components/WebSite/HomeSections/HeroSectionThree.vue';
import HeroSectionTwo from '@/components/WebSite/HomeSections/HeroSectionTwo.vue';
</script>

<template>
  <div class="homepage min-h-screen">
    <HeroSectionOne />
    <HeroSectionTwo />
    <HeroSectionThree />
    <HeroSectionFour />
    <HeroSectionFive />
  </div>
</template>

<style scoped>
.homepage {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}

/* Espaciado responsivo entre secciones */
.homepage > * {
  margin-bottom: 0;
}

/* Ajustes para dispositivos móviles */
@media (max-width: 768px) {
  .homepage {
    gap: 2rem;
  }
}

/* Ajustes para tablets */
@media (min-width: 769px) and (max-width: 1024px) {
  .homepage {
    gap: 4rem;
  }
}

/* Ajustes para desktop */
@media (min-width: 1025px) {
  .homepage {
    gap: 7.875rem;
  }
}

/* Asegurar que no haya scroll horizontal */
.homepage {
  overflow-x: hidden;
}

/* Mejoras de rendimiento */
.homepage > * {
  will-change: transform;
}
</style>
