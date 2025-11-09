<template>
    <div class="viewpage">
        <AppNavbar_s />
        <AppHeader_s />
        <router-view />
        <AppFooter_s v-if="showFooter" />
    </div>
</template>

<script setup>
import AppNavbar_s from './AppNavbar_s.vue';
import AppFooter_s from './AppFooter_s.vue';
import AppHeader_s from './AppHeader_s.vue';
</script>