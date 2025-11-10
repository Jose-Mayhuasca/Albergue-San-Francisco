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

        <!-- Filtros + grid -->
        <div class="flex flex-col md:flex-row gap-8 px-10">
            <!-- 🔹 Filtros -->
            <aside class="w-full md:w-1/4 bg-white rounded-xl shadow-md p-5 h-fit">
                <h2 class="text-lg font-semibold mb-4 text-gray-700">Filtros</h2>
                <CatalogFilter :filters="filters" @updateFilters="updateFilters" />
            </aside>

            <!-- 🔹 Grid -->
            <section class="flex-1">
                <CatalogGrid :pets="filteredPets" @petSelected="goDetail" />
            </section>
        </div>
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
        console.log("Lista de perros:", oListPets.value);
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
