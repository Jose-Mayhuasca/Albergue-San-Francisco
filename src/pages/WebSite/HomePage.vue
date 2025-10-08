<script setup lang="ts">

/**
 * *Importante: Aqui tienes que importar las secciones que vas a crear en la carpeta con el mismo nombre que esta en la carpeta de componentes
 */

import HeroSection from '@/components/WebSite/HomeSections/HeroSection.vue'

</script>

<template class="homePage">
    <div class="homepage">
        <HeroSection />
    </div>
</template>

<style scoped>
.homepageContainer {
    width: 100%;
    height: auto;
}

.homepage {
    display: flex;
    flex-direction: column;
    gap: 7.875rem;
}
</style>
