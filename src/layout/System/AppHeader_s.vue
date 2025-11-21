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
    const path = route.path

    // Si está en una página principal del dashboard (excepto /admin), ir al home
    if (mainDashboardPages.includes(path) && path !== '/admin') {
        router.push('/admin')
        return
    }

    // Navegación específica para evitar volver a páginas eliminadas/rechazadas

    // Desde páginas de catálogo
    if (path === '/admin/catalogo/nuevo' || path.startsWith('/admin/catalogo/editar/')) {
        router.push('/admin/catalogo')
        return
    }

    // Desde detalles de solicitante de solicitudes pre-aprobadas -> volver a solicitudes principal
    if (path.match(/^\/admin\/solicitudes\/pre-aprobadas\/detalle\/\d+$/)) {
        router.push('/admin/solicitudes')
        return
    }

    // Desde detalles de solicitante de solicitudes normales -> volver a solicitudes principal
    if (path.match(/^\/admin\/solicitudes\/\d+\/detalle\/\d+$/)) {
        router.push('/admin/solicitudes')
        return
    }

    // Desde perro solicitado -> volver a solicitudes principal
    if (path.match(/^\/admin\/solicitudes\/\d+$/)) {
        router.push('/admin/solicitudes')
        return
    }

    // Desde página de solicitudes pre-aprobadas -> volver a solicitudes principal
    if (path === '/admin/solicitudes/pre-aprobadas') {
        router.push('/admin/solicitudes')
        return
    }

    // Fallback: siempre ir al dashboard principal si no coincide con ningún patrón
    router.push('/admin')
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