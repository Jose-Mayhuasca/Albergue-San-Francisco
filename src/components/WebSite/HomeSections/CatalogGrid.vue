<template>
  <div>
    <div v-if="pets.length === 0" class="text-center text-gray-500 mt-10">
      No se encontraron resultados 🐶
    </div>

    <div v-else class="catalog-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <CatalogCard v-for="pet in pets" :key="pet.id" :pet="pet" />
    </div>
  </div>
</template>

<script setup>
import CatalogCard from './CatalogCard.vue'
defineProps({ pets: Array })
</script>
