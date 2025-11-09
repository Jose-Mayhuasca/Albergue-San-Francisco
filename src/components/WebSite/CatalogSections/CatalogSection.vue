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
                <CatalogGrid :pets="filteredPets" />
            </section>
        </div>
    </div>
    <AppFooter />
</template>

<script setup>
import { ref, computed } from 'vue'
import CatalogFilter from '@/components/WebSite/HomeSections/CatalogFilter.vue'
import CatalogGrid from '@/components/WebSite/HomeSections/CatalogGrid.vue'
import dogCard from '@/assets/img/dog_card.jpg'
import AppFooter from '@/layout/WebSite/AppFooter.vue'

// 🐾 Datos de ejemplo (dog_card como imagen temporal)
const pets = ref([
    { id: 1, nombre: 'Luna', genero: 'Hembra', edad: 0.5, tamaño: 'Pequeño', imagen: dogCard },
    { id: 2, nombre: 'Rocky', genero: 'Macho', edad: 2, tamaño: 'Mediano', imagen: dogCard },
    { id: 3, nombre: 'Max', genero: 'Macho', edad: 4, tamaño: 'Grande', imagen: dogCard },
    { id: 4, nombre: 'Nina', genero: 'Hembra', edad: 1.5, tamaño: 'Mediano', imagen: dogCard },
    { id: 5, nombre: 'Toby', genero: 'Macho', edad: 0.8, tamaño: 'Pequeño', imagen: dogCard },
    { id: 6, nombre: 'Bella', genero: 'Hembra', edad: 3, tamaño: 'Grande', imagen: dogCard },
    { id: 7, nombre: 'Charlie', genero: 'Macho', edad: 5, tamaño: 'Grande', imagen: dogCard },
    { id: 8, nombre: 'Molly', genero: 'Hembra', edad: 2.5, tamaño: 'Mediano', imagen: dogCard },
    { id: 9, nombre: 'Daisy', genero: 'Hembra', edad: 0.3, tamaño: 'Pequeño', imagen: dogCard },
    { id: 10, nombre: 'Buddy', genero: 'Macho', edad: 4.5, tamaño: 'Grande', imagen: dogCard },
    { id: 11, nombre: 'Lucy', genero: 'Hembra', edad: 1, tamaño: 'Mediano', imagen: dogCard },
    { id: 12, nombre: 'Jack', genero: 'Macho', edad: 3.5, tamaño: 'Grande', imagen: dogCard },
    { id: 13, nombre: 'Sadie', genero: 'Hembra', edad: 2, tamaño: 'Mediano', imagen: dogCard },
    { id: 14, nombre: 'Oliver', genero: 'Macho', edad: 0.9, tamaño: 'Pequeño', imagen: dogCard },
    { id: 15, nombre: 'Chloe', genero: 'Hembra', edad: 5, tamaño: 'Grande', imagen: dogCard },
    { id: 16, nombre: 'Zeus', genero: 'Macho', edad: 1.2, tamaño: 'Mediano', imagen: dogCard }
])

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
    return pets.value.filter(pet => {
        const matchTamaño = !filters.value.tamaño || pet.tamaño === filters.value.tamaño
        const matchGenero = !filters.value.genero || pet.genero === filters.value.genero
        const matchEdad =
            !filters.value.edad ||
            (filters.value.edad === 'Cachorro' && pet.edad < 1) ||
            (filters.value.edad === '1-3' && pet.edad >= 1 && pet.edad <= 3) ||
            (filters.value.edad === 'Adulto' && pet.edad > 3)
        return matchTamaño && matchGenero && matchEdad
    })
})
</script>

<style scoped>
.full-bleed {
    /* Break out of a centered container and occupy the full viewport width */
    position: relative;
    left: 50%;
    right: 50%;
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
