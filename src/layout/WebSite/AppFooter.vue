<template>
  <footer class="w-full bg-black text-white py-12 px-6 md:px-16" style="width:100vw; position:relative;">

    <!-- Contenedor principal -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:px-32 lg:gap-20 md:grid-cols-3 gap-12">

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
          <li><i class="ri-whatsapp-fill mr-2"></i> +51 922 266 310</li>
        </ul>
      </div>

      <!-- Columna 3 - Redes -->
      <div>
        <h2 class="text-xl font-semibold mb-3">Síguenos</h2>
        <div class="flex space-x-4 text-2xl">
          <a href="https://www.facebook.com/alberguesanfrancisco?mibextid=ZbWKwL" target="_blank"
            rel="noopener noreferrer" class="hover:text-gray-400 transition"><i class="ri-facebook-circle-fill"></i></a>
          <a href="https://www.instagram.com/albergue.sanfrancisco/" target="_blank" rel="noopener noreferrer"
            class="hover:text-gray-400 transition"><i class="ri-instagram-fill"></i></a>
          <a href="https://www.tiktok.com/@stephanie_mv11?_r=1&_t=ZS-91SWCKTVjWx" target="_blank"
            rel="noopener noreferrer" class="hover:text-gray-400 transition"><i class="ri-tiktok-fill"></i></a>
          <!-- <a href="https://api.whatsapp.com/send/?phone=51951703662&text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n+sobre+adopciones&type=phone_number&app_absent=0"
            target="_blank" rel="noopener noreferrer" class="hover:text-gray-400 transition"><i
              class="ri-whatsapp-fill"></i></a> -->
        </div>
      </div>

    </div>

    <!-- Línea divisoria -->
    <div class="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm footer-copyright">
      © 2025 Albergue San Francisco — Todos los derechos reservados.
    </div>

  </footer>
</template>

<style scoped>
/* No se requiere CSS adicional: Tailwind ya maneja toda la responsividad */
@media (max-width: 640px) {
  .footer-copyright {
    padding-bottom: 60px;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .footer-copyright {
    padding-bottom: 60px;
  }
}
</style>

//si mi delegeit
