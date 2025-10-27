<script setup lang="ts">
/**
 * HeroSectionFive - Sección final simple y elegante
 * Diseño minimalista con call to action final
 */
</script>

<template>
  <section class="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-16 md:py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Título principal -->
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        ¿Listo para cambiar una vida?
      </h2>
      
      <!-- Descripción -->
      <p class="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Únete a nuestra comunidad de amor y compasión. Cada adopción es una historia de esperanza.
      </p>

      <!-- Botones de acción -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
          Ver Animales Disponibles
        </button>
        <button class="border-2 border-amber-500 text-amber-600 font-semibold py-4 px-8 rounded-lg hover:bg-amber-500 hover:text-white transform hover:scale-105 transition-all duration-200">
          Hacer Donación
        </button>
      </div>
    </div>
  </section>
</template>
