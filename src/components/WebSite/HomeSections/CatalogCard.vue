<template>
  <div class="catalog-card bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1">
    <img :src="resolveImage(pet.imagen)" :alt="pet.nombre" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="font-bold text-lg mb-1">{{ pet.nombre }}</h3>
      <p class="text-sm text-gray-600">{{ pet.genero }} • {{ pet.tamaño }}</p>
      <p class="text-sm text-gray-600">
        Edad:
        <span v-if="pet.edad < 1">Cachorro (&lt;1 año)</span>
        <span v-else-if="pet.edad <= 3">{{ pet.edad }} año(s)</span>
        <span v-else>Adulto (&gt;3 años)</span>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({ pet: Object })

// 🔹 Usa doc-cat como fallback temporal
const resolveImage = (img) => {
  try {
    return new URL(img, import.meta.url).href
  } catch {
    return new URL('@/assets/img/dog_card.jpg', import.meta.url).href
  }
}
</script>
