<template>
    <Section v-if="viewPhone" class="sectionHeaderPhoneSystem">
        <div class="containerHeaderPhone">
            <i v-if="showBackButton" class="pi pi-chevron-left back-icon" @click="goBack"></i>
            <div v-else></div>
            <h5>{{ currentPageTitle }}</h5>
            <img v-if="showLogoutButton" src="/icons/exit-icon.svg" alt="logout" class="icon-image" @click="logout()" />
            <div v-else></div>
        </div>
    </Section>
    <Section v-else class="sectionHeaderDesktopSystem">
        <div class="containerHeaderDesktop">
            <i v-if="showBackButton" class="pi pi-chevron-left back-icon" @click="goBack()"></i>
            <div v-else></div>
            <h5>{{ currentPageTitle }}</h5>
        </div>
    </Section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const viewPhone = ref(false);

const checkScreenSize = () => {
    viewPhone.value = window.innerWidth < 1024;
}

// Páginas principales del dashboard (donde se muestra el botón de logout)
const mainDashboardPages = [
    '/admin',
    '/admin/catalogo',
    '/admin/solicitudes'
]

// Función para obtener el título según el path
const getPageTitle = (path) => {
    // Páginas principales
    if (path === '/admin') return 'Dashboard'
    if (path === '/admin/catalogo') return 'Catálogo'
    if (path === '/admin/solicitudes') return 'Solicitudes'

    // Catálogo - crear/editar
    if (path === '/admin/catalogo/nuevo') return 'Agregar Perro'
    if (path.startsWith('/admin/catalogo/editar/')) return 'Editar Perro'

    // Solicitudes con ID dinámico
    if (path.match(/^\/admin\/solicitudes\/\d+$/)) return 'Perro Solicitado'
    if (path.match(/^\/admin\/solicitudes\/\d+\/detalle\/\d+$/)) return 'Solicitante'

    // Solicitudes pre-aprobadas
    if (path === '/admin/solicitudes/pre-aprobadas') return 'Solicitudes'
    if (path.match(/^\/admin\/solicitudes\/pre-aprobadas\/detalle\/\d+$/)) return 'Solicitante'

    return 'Dashboard'
}

// Computed property para obtener el título actual basado en la ruta
const currentPageTitle = computed(() => {
    return getPageTitle(route.path)
})

// Computed property para mostrar el botón de logout (solo en páginas principales)
const showLogoutButton = computed(() => {
    return mainDashboardPages.includes(route.path)
})

// Computed property para mostrar el botón de regreso (todas excepto /admin)
const showBackButton = computed(() => {
    return route.path !== '/admin'
})

// Función para retroceder
const goBack = () => {
    // Si está en una página principal del dashboard (excepto /admin), ir al home
    if (mainDashboardPages.includes(route.path) && route.path !== '/admin') {
        router.push('/admin')
    } else {
        // En páginas de detalle/editar/crear, ir a la página anterior
        router.back()
    }
}

const logout = () => {
    localStorage.clear();
    router.push('/login');
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