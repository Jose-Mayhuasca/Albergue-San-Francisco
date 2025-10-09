<template>
    <Section v-if="viewPhone" class="sectionNavbarPhoneSystem">
        <div class="containerNavbarPhone">
            <div v-for="option in mobileOptions" :key="option.id" class="containerIcon" @click="setActive(option.id)"
                :class="{ active: active === option.id }">
                <img :src="option.icon" :alt="option.label" class="icon-image" />
                <label>{{ option.label }}</label>
            </div>
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
        icon: '/icons/applicants-icon.svg',
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