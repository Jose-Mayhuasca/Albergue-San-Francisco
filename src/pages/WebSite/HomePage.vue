<script setup lang="ts">

/**
 * *Importante: Aqui tienes que importar las secciones que vas a crear en la carpeta con el mismo nombre que esta en la carpeta de componentes
 */

import HeroSectionFive from '@/components/WebSite/HomeSections/HeroSectionFive.vue';
import HeroSectionFour from '@/components/WebSite/HomeSections/HeroSectionFour.vue';
import HeroSectionOne from '@/components/WebSite/HomeSections/HeroSectionOne.vue';
import HeroSectionThree from '@/components/WebSite/HomeSections/HeroSectionThree.vue';
import HeroSectionTwo from '@/components/WebSite/HomeSections/HeroSectionTwo.vue';
import HeroSectionSix from '@/components/WebSite/HomeSections/HeroSectionSix.vue';
import AppFooter from '@/layout/WebSite/AppFooter.vue';

</script>

<template>
    <div class="page">
        <HeroSectionOne />
        <HeroSectionTwo />
        <HeroSectionThree />
        <HeroSectionFour />
        <HeroSectionFive />
        <HeroSectionSix />
        <AppFooter />
    </div>
</template>

<style scoped>
/* .homepageContainer {
    width: 100%;
    height: auto;
}

.homepage {
    display: flex;
    flex-direction: column;
    gap: 7.875rem;
} */
</style>
