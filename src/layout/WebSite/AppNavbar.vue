<template>
    <Section v-if="viewPhone" class="sectionNavbarPhone">
        <div class="containerNavbarPhone">
            <div v-for="option in mobileOptions" :key="option.id" class="containerIcon" @click="setActive(option.id)"
                :class="{ active: active === option.id }">
                <img :src="option.icon" :alt="option.label" class="icon-image" />
                <label v-show="active === option.id">{{ option.label }}</label>
            </div>
        </div>
    </Section>
    <Section v-else class="sectionNavbar">
        <div class="containerNavbar">
            <Menubar :model="desktopOptions">
                <template #start>
                    <h6>San Francisco Logo</h6>
                </template>
                <template #end>
                    <div class="containerLogin" @click="router.push('/login')">
                        <i class="pi pi-user"></i>
                        <label>LOGIN</label>
                    </div>
                </template>
            </Menubar>
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
        id: 1, label: 'INICIO',
        icon: '/icons/home-icon.svg',
        command: () => router.push('/')
    },
    {
        id: 2, label: 'CATALOGO',
        icon: '/icons/catalog-icon.svg',
        command: () => router.push('/catalogo')
    },
    {
        id: 3, label: 'LOGIN',
        icon: '/icons/login-icon.svg',
        command: () => router.push('/login')
    }
])

// Items para desktop
const desktopOptions = ref([
    {
        label: 'INICIO',
        icon: 'pi pi-home',
        command: () => router.push('/')
    },
    {
        label: 'CATÁLOGO',
        icon: 'pi pi-book',
        command: () => router.push('/catalogo')
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