<template>
    <Section v-if="viewPhone" class="sectionNavbarPhoneSystem">
        <div class="containerNavbarPhone">
            <div v-for="option in optionsNavbar" :key="option.id" class="containerIcon" @click="setActive(option.id)"
                :class="{ active: active === option.id }">
                <img :src="option.icon" :alt="option.label" class="icon-image" />
                <label>{{ option.label }}</label>
            </div>
        </div>
    </Section>
    <Section v-else class="sectionSideBarSystem">
        <div class="containerSideBar">
            <div class="logo">
                <img src="@/assets/icons/logo.png" alt="Logo" class="logoNavbar" />
            </div>
            <div class="options">
                <div v-for="option in optionsNavbar" :key="option.id" class="containerIconSidebar"
                    @click="setActive(option.id)" :class="{ active: active === option.id }">
                    <img :src="option.icon" :alt="option.label" class="icon-image" />
                    <!-- <label v-show="active === option.id">{{ option.label }}</label> -->
                    <label>{{ option.label }}</label>
                </div>
            </div>
            <div class="bottomSide">
                <div class="containerExit">
                    <img :src="exitIcon" class="icon-image" @click="logOut()" />
                    <label>Salir</label>
                </div>
                <div class="line"></div>
                <div class="messageWelcome">
                    <p>Bienvenida Stephanie</p>
                </div>
            </div>
        </div>
    </Section>
    <Toast />
</template>

<script setup>
import homeIcon from '@/assets/icons/home-icon-out.svg'
import catalogIcon from '@/assets/icons/catalog-icon-out.svg'
import applicantsIcon from '@/assets/icons/applicants-icon.svg'
import exitIcon from '@/assets/icons/exit-icon-out.svg'
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast';

const router = useRouter()
const toast = useToast();
const viewPhone = ref(false);

const checkScreenSize = () => {
    viewPhone.value = window.innerWidth < 1024;
}

const logOut = () => {
    toast.add({
        severity: 'success',
        summary: 'Operación Exitosa',
        detail: 'Cerrando sesión...',
        life: 2000
    });
    setTimeout(() => {
        router.push('/login');
    }, 2000);
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

// Items para el navbar
const optionsNavbar = ref([
    {
        id: 1, label: 'Inicio',
        icon: homeIcon,
        command: () => router.push('/admin')
    },
    {
        id: 2, label: 'Catalogo',
        icon: catalogIcon,
        command: () => router.push('/admin/catalogo')
    },
    {
        id: 3, label: 'Solicitudes',
        icon: applicantsIcon,
        command: () => router.push('/admin/solicitudes')
    }
])

const active = ref(null);

const setActive = (id) => {
    active.value = id
    const selectedOption = optionsNavbar.value.find(option => option.id === id)
    if (selectedOption && selectedOption.command) {
        selectedOption.command()
    }
}

</script>