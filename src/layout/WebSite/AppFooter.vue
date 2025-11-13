<template>
  <footer class="w-full bg-black text-white py-12 px-6 md:px-16" style="width:100vw; position:relative;">

    <!-- Contenedor principal -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

      <!-- Columna 1 -->
      <div>
        <h1 class="text-2xl font-bold tracking-wide">ALBERGUE SAN FRANCISCO</h1>
        <p class="mt-4 text-base text-gray-300 leading-relaxed">
          Brindamos refugio, alimento y cuidado a quienes más lo necesitan.  
          Tu apoyo puede transformar vidas.
        </p>
      </div>

      <!-- Columna 2 - Contacto -->
      <div>
        <h2 class="text-xl font-semibold mb-3">Contáctanos</h2>
        <ul class="space-y-2 text-gray-300 text-sm">
          <li><i class="ri-map-pin-2-fill mr-2"></i> Av. Los Olivos 123, Lima, Perú</li>
          <li><i class="ri-phone-fill mr-2"></i> +51 123 456 789</li>
          <li><i class="ri-mail-unread-fill mr-2"></i> contacto@alberguesanfrancisco.pe</li>
        </ul>
      </div>

      <!-- Columna 3 - Redes -->
      <div>
        <h2 class="text-xl font-semibold mb-3">Síguenos</h2>
        <div class="flex space-x-4 text-2xl">
          <a href="#" class="hover:text-gray-400 transition"><i class="ri-facebook-circle-fill"></i></a>
          <a href="#" class="hover:text-gray-400 transition"><i class="ri-instagram-fill"></i></a>
          <a href="#" class="hover:text-gray-400 transition"><i class="ri-twitter-x-line"></i></a>
        </div>
      </div>

    </div>

    <!-- Línea divisoria -->
    <div class="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
      © 2025 Albergue San Francisco — Todos los derechos reservados.
    </div>

  </footer>
</template>

<style scoped>
/* No se requiere CSS adicional: Tailwind ya maneja toda la responsividad */
</style>
