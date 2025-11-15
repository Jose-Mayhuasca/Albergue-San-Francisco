<template>
    <div class="catalog-page full-bleed bg-white min-h-screen">
        <!-- Imagen de portada -->
        <div class="relative w-full h-64 mb-6">
            <img src="@/assets/img/albergue6.jpg" alt="Albergue San Francisco"
                class="w-full h-full object-cover shadow-md" />
            <div class="absolute inset-0 flex items-center justify-center">
                <h1 class="text-white text-3xl tracking-wide md:text-4xl font-bold drop-shadow-lg">
                    <br />
                    Adopta un Amigo
                </h1>
            </div>
        </div>

        <!-- Filtros + grids -->
        <!-- Botón hamburguesa (visible en tablet y móvil). En pantallas grandes el aside se muestra fijo. -->
        <div class="flex items-center justify-between gap-4 px-10 mb-4 lg:hidden">
            <h2 class="text-lg font-semibold text-gray-700">Catálogo</h2>
            <button
                @click="showFilters = true"
                aria-label="Abrir filtros"
                class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition"
            >
                <!-- simple icono hamburguesa -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Filtros
            </button>
        </div>

        <div class="flex flex-col lg:flex-row gap-8 px-10">
            <!-- 🔹 Filtros: oculto en pantallas < lg, visible como panel en lg+ -->
            <aside class="hidden lg:block w-full lg:w-1/4 bg-white rounded-xl shadow-md p-5 h-fit">
                <h2 class="text-lg font-semibold mb-4 text-gray-700">Filtros</h2>
                <CatalogFilter :filters="filters" @updateFilters="updateFilters" />
            </aside>

            <!-- 🔹 Grid --->
            <section class="flex-1">
                <CatalogGrid :pets="filteredPets" @petSelected="goDetail" />
            </section>
        </div>

        <!-- Drawer / panel para filtros en tablet y móvil -->
        <transition name="fade">
            <div v-if="showFilters" class="fixed inset-0 z-50 flex">
                <!-- Backdrop -->
                <div class="absolute inset-0 bg-black/40" @click="showFilters = false"></div>

                <!-- Panel lateral (desde la izquierda) -->
                <div class="relative bg-white w-full max-w-xs sm:max-w-sm h-full p-5 overflow-auto shadow-lg">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg font-semibold text-gray-700">Filtros</h2>
                        <button @click="showFilters = false" aria-label="Cerrar filtros" class="p-2 rounded-md text-gray-600 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <CatalogFilter :filters="filters" @updateFilters="onDrawerUpdate" />
                </div>
            </div>
        </transition>
    </div>
    <AppFooter />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CatalogFilter from '@/components/WebSite/HomeSections/CatalogFilter.vue'
import CatalogGrid from '@/components/WebSite/HomeSections/CatalogGrid.vue'
import AppFooter from '@/layout/WebSite/AppFooter.vue'
import CatalogService from '@/services/CatalogServices/CatalogService.js'

const catalogService = new CatalogService()
const oListPets = ref([])
const router = useRouter()

// Mostrar/ocultar drawer de filtros en tablet/móvil
const showFilters = ref(false)

// Cuando se actualizan filtros desde el drawer, aplicar y cerrar el panel
const onDrawerUpdate = (newFilters) => {
    updateFilters(newFilters)
    showFilters.value = false
}


onMounted(() => {
    Initialize()
})

const Initialize = async () => {
    const response = await catalogService.GetCatalogService();
    if (response.status === 200) {
        // Mapear los datos del endpoint al formato esperado por los componentes
        oListPets.value = response.data.map(pet => ({
            id: pet.idRefAnimals,
            nombre: pet.animalName,
            genero: pet.animalGenderDesc,
            edad: pet.animalAge,
            tamaño: pet.animalSizeDesc,
            imagen: pet.animalImage,
            // Mantener los datos originales para filtrado
            animalSizeDesc: pet.animalSizeDesc,
            animalGenderDesc: pet.animalGenderDesc,
            animalAge: pet.animalAge
        }));
    }
}

// 🎛️ Estado de filtros
const filters = ref({
    tamaño: '',
    edad: '',
    genero: ''
})

// 🔁 Actualizar filtros
const updateFilters = (newFilters) => {
    filters.value = { ...filters.value, ...newFilters }
}

// 🧮 Lógica de filtrado
const filteredPets = computed(() => {
    return oListPets.value.filter(pet => {
        const matchTamaño = !filters.value.tamaño || pet.animalSizeDesc === filters.value.tamaño
        const matchGenero = !filters.value.genero || pet.animalGenderDesc === filters.value.genero
        const matchEdad =
            !filters.value.edad ||
            (filters.value.edad === 'Cachorro' && pet.animalAge < 1) ||
            (filters.value.edad === '1-3' && pet.animalAge >= 1 && pet.animalAge <= 3) ||
            (filters.value.edad === 'Adulto' && pet.animalAge > 3)
        return matchTamaño && matchGenero && matchEdad
    })
})

const goDetail = (id) => {
    localStorage.clear();
    localStorage.setItem('idDog', id);
    router.push({ path: `catalogo/detalle/${id}` })
}


</script>

<style scoped>
.full-bleed {
    /* Break out of a centered container and occupy the full viewport width */
    position: relative;
    /* left: 50%;
    right: 50%; */
    margin-left: -50vw;
    margin-right: -50vw;
    width: 100vw;
}

/* Optional: ensure the hero image stretches edge-to-edge */
.full-bleed .relative.w-full.h-64 img {
    width: 100vw;
    max-width: 100vw;
    margin-left: calc(-50vw + 50%);
}
</style>
