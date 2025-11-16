<template>
  <!-- Contenedor relativo con altura fija (igual que antes) -->
  <div
    class="catalog-card relative border rounded-xl overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1 h-[550px] cursor-pointer"
    @click.stop="$emit('click')">
    <!-- Imagen de fondo que ocupa todo el contenedor -->
    <img :src="pet.imagen || require('@/assets/img/dog_card.jpg')" :alt="pet.nombre"
      class="absolute inset-0 w-full h-full object-cover" />

    <!-- Overlay sutil para mejorar la legibilidad del texto -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

  <!-- Contenido en primer plano (texto) -->
  <!-- Posicionar absolutamente y pegar al fondo para que el texto aparezca abajo -->
  <div class="absolute bottom-0 left-0 right-0 z-10 p-4 flex flex-col justify-end text-white">
      <!-- Bloque de Texto -->
      <div>
        <h3 class="font-bold text-5xl mb-1 drop-shadow">{{ pet.nombre }}</h3>
      </div> 
      <div class="flex flex-row text-right gap-1">
        <p class="text-md text-gray-200">{{ pet.genero }}</p>
        <p class="text-md text-gray-200 px-1"> ● </p>
        <p class="text-md text-gray-200">
          <span v-if="pet.edad < 1">Menos de 1 año</span>
          <span v-else-if="Math.floor(pet.edad) === 1">1 año</span>
          <span v-else>{{ Math.floor(pet.edad) }} años</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ pet: Object })
</script>
