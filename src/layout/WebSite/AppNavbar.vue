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
            <!-- Custom nav to avoid PrimeVue internal classes that block styling -->
            <nav class="w-full flex items-center justify-between bg-black rounded-2xl p-3 px-8">
                <!-- Start: logo -->
                <div class="flex items-center h-10">
                    <img src="@/assets/icons/logo.png" alt="Logo" class="logoNavbar h-10" />
                </div>

                <!-- Center: menu items -->
                <ul class="flex items-center gap-6 list-none m-0 p-0">
                    <template v-for="(option, idx) in desktopOptions" :key="idx">
                        <li v-if="option.separator" class="mx-2">
                            <!-- <div class="w-px h-6 bg-gray-600"></div> -->
                        </li>
                        <li v-else>
                            <button
                                @click="(option.command && option.command()) || (option.to && router.push(option.to))"
                                :class="['flex items-center gap-2 px-3 py-2 rounded-md transition', option.class || '']"
                                :style="option.style || ''"
                            >
                                <i v-if="option.icon" :class="option.icon + ' text-white'" aria-hidden="true"></i>
                                <span class="text-white">{{ option.label }}</span>
                            </button>
                        </li>
                    </template>
                </ul>

                <!-- End: login icon -->
                <div class="containerLogin cursor-pointer" @click="router.push('/login')">
                    <i class="ri-bard-fill text-white"></i>
                </div>
            </nav>
        </div>
    </Section>
</template>


<script setup>
import homeIcon from '@/assets/icons/home-icon.svg'
import catalogIcon from '@/assets/icons/catalog-icon.svg'
import loginIcon from '@/assets/icons/login-icon.svg'
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
        icon: homeIcon,
        command: () => router.push('/')
    },
    {
        id: 2, label: 'CATALOGO',
        icon: catalogIcon,
        command: () => router.push('/catalogo')
    },
    {
        id: 3, label: 'LOGIN',
        icon: loginIcon,
        command: () => router.push('/login')
    }
])

// Items para desktop
const desktopOptions = ref([
  {
    label: 'Inicio',
    icon: 'ri ri-home-fill',
    class: 'my-menuitem',
    command: () => router.push('/')
  },
  { separator: true },
  {
    label: 'Fichas de adopción',
    icon: 'ri-baidu-line',
    class: 'my-menuitem',
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
