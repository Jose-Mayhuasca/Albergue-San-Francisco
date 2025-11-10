<template>
  <!-- Contenedor relativo con altura fija (igual que antes) -->
  <div
    class="catalog-card relative border rounded-xl overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1 h-[550px]">
    <!-- Imagen de fondo que ocupa todo el contenedor -->
    <img :src="pet.imagen || require('@/assets/img/dog_card.jpg')" :alt="pet.nombre"
      class="absolute inset-0 w-full h-full object-cover" />

    <!-- Overlay sutil para mejorar la legibilidad del texto -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

    <!-- Contenido en primer plano (texto) -->
    <!-- añadida clase items-end para alinear el bloque de texto hacia abajo -->
    <div class="relative z-10 p-4 h-full flex flex-row justify-between items-end text-white">
      <!-- Bloque de Texto -->
      <div>
        <h3 class="font-bold text-5xl mb-1 drop-shadow">{{ pet.nombre }}</h3>
      </div>
      <div class="flex flex-col items-end text-right gap-1">
        <p class="text-md text-gray-200">{{ pet.genero }}</p>
        <p class="text-md text-gray-200">
          <span v-if="pet.edad < 1">Cachorro (1 año)</span>
          <span v-else-if="pet.edad <= 3">Joven ({{ pet.edad }} años)</span>
          <span v-else>Adulto (3 años)</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ pet: Object })
</script>
