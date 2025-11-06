<template>
    <Section v-if="viewPhone" class="sectionHeaderPhoneSystem">
        <div class="containerHeaderPhone">
            <i v-if="showBackButton" class="pi pi-chevron-left back-icon" @click="goToHome"></i>
            <div v-else></div>
            <h5>{{ currentPageTitle }}</h5>
            <img src="/icons/exit-icon.svg" alt="menu" class="icon-image" @click="router.push('/login')" />
        </div>
    </Section>
    <Section v-else class="sectionHeaderDesktopSystem">
        <div class="containerHeaderDesktop">
            <i v-if="showBackButton" class="pi pi-chevron-left back-icon" @click="goToHome"></i>
            <div v-else></div>
            <h5>{{ currentPageTitle }}</h5>
            <!-- <div class="container icon">
                <img src="/icons/exit-icon.svg" alt="menu" class="icon-image" @click="router.push('/login')" />
            </div> -->
        </div>
    </Section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const viewPhone = ref(false);

const checkScreenSize = () => {
    viewPhone.value = window.innerWidth < 1024;
}

// Títulos para cada ruta
const pageTitles = {
    '/admin': 'Dashboard',
    '/admin/catalogo': 'Catálogo',
    '/admin/solicitudes': 'Solicitudes'
}

// Computed property para obtener el título actual basado en la ruta
const currentPageTitle = computed(() => {
    return pageTitles[route.path] || 'Dashboard'
})

// Computed property para mostrar el botón de regreso
const showBackButton = computed(() => {
    return route.path !== '/admin'
})

// Función para volver al inicio
const goToHome = () => {
    router.push('/admin')
}

// Escuchar cambios en el tamaño de la ventana
onMounted(() => {
    checkScreenSize(); // Verificar tamaño inicial
    window.addEventListener('resize', checkScreenSize);
})

// Limpiar el event listener cuando el componente se desmonte
onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize);
})

</script>