<template>
  <div class="catalog-page bg-gray-50 min-h-screen">
    <!-- Imagen de portada -->
    <div class="relative w-full h-64 mb-6">
      <img
        src="@/assets/img/albergue6.jpg"
        alt="Albergue San Francisco"
        class="w-full h-full object-cover rounded-b-2xl shadow-md"
      />
      <div class="absolute inset-0 bg-black/10 flex items-center justify-center">
        <h1 class="text-white text-3xl md:text-4xl font-bold drop-shadow-lg">
          Adopta un Amigo
        </h1>
      </div>
    </div>

    <!-- Filtros + grid -->
    <div class="flex flex-col md:flex-row gap-8 px-6">
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
</template>

<script setup>
import { ref, computed } from 'vue'
import CatalogFilter from '../../components/WebSite/HomeSections/CatalogFilter.vue'
import CatalogGrid from '../../components/WebSite/HomeSections/CatalogGrid.vue'

// 🐾 Datos de ejemplo (doc-cat como imagen temporal)
const pets = ref([
  { id: 1, nombre: 'Luna', genero: 'Hembra', edad: 0.5, tamaño: 'Pequeño', imagen: '@/assets/img/doc-cat.jpg' },
  { id: 2, nombre: 'Rocky', genero: 'Macho', edad: 2, tamaño: 'Mediano', imagen: '@/assets/img/doc-cat.jpg' },
  { id: 3, nombre: 'Max', genero: 'Macho', edad: 4, tamaño: 'Grande', imagen: '@/assets/img/doc-cat.jpg' },
  { id: 4, nombre: 'Nina', genero: 'Hembra', edad: 1.5, tamaño: 'Mediano', imagen: '@/assets/img/doc-cat.jpg' },
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
