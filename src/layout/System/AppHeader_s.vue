<template>
    <Section v-if="viewPhone" class="sectionHeaderPhoneSystem">
        <div class="containerHeaderPhone">
            <!-- <img src="/icons/exit-icon.svg" alt="menu" class="icon-image" @click="router.push('/login')" /> -->
            <div></div>
            <h5>Dashboard's</h5>
            <img src="/icons/exit-icon.svg" alt="menu" class="icon-image" @click="router.push('/login')" />
        </div>
    </Section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const viewPhone = ref(false);

const checkScreenSize = () => {
    viewPhone.value = window.innerWidth < 1024;
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

// Items para móvil
const mobileOptions = ref([
    {
        id: 1, label: 'Inicio',
        icon: '/icons/home-icon-out.svg',
        command: () => router.push('/admin')
    },
    {
        id: 2, label: 'Catalogo',
        icon: '/icons/catalog-icon-out.svg',
        command: () => router.push('/admin/catalogo')
    },
    {
        id: 3, label: 'Solicitudes',
        icon: '/icons/login-icon-out.svg',
        command: () => router.push('/admin/solicitudes')
    }
])

const active = ref(null);

const setActive = (id) => {
    active.value = id
    const selectedOption = mobileOptions.value.find(option => option.id === id)
    if (selectedOption && selectedOption.command) {
        selectedOption.command()
    }
}

</script>