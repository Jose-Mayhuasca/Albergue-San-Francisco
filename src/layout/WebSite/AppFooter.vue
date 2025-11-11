<template>
  <!-- Usamos background CSS en la sección para que el fondo pertenezca a la sección y se mueva con el scroll -->
  <div class="hero relative h-[600px] overflow-hidden flex items-center justify-between p-12">

    <!-- Contenido del footer -->
    <div class="relative text-black ml-12 pr-12 flex flex-row gap-6 z-10">
      <div>
        <h1 class="text-4xl font-bold">ALBERGUE SAN FRANCISCO</h1>

        <!-- Descripción breve del albergue -->
        <p class="mt-4 text-xl">
          Albergue San Francisco brinda refugio, alimento y cuidado a aquellos que más lo necesitan. Tu apoyo y
          generosidad son fundamentales para cambiar vidas.
        </p>
      </div>
      <!-- Información de contacto -->
      <div class="mt-6">
        <h2 class="text-2xl font-semibold">Contáctanos:</h2>
        <ul class="mt-2">
          <li class="text-lg">📍 Dirección: Av. Los Olivos 123, Lima, Perú</li>
          <li class="text-lg">📞 Teléfono: +51 123 456 789</li>
          <li class="text-lg">✉️ Email: contacto@alberguesanfrancisco.pe</li>
        </ul>
      </div>

      <!-- Redes sociales -->
      <div class="mt-6">
        <h2 class="text-2xl font-semibold">Síguenos:</h2>
        <ul class="flex space-x-6 mt-2">
          <li><a href="https://facebook.com/alberguesanfrancisco" class="text-lg hover:text-gray-300">Facebook</a></li>
          <li><a href="https://instagram.com/alberguesanfrancisco" class="text-lg hover:text-gray-300">Instagram</a>
          </li>
          <li><a href="https://twitter.com/alberguesf" class="text-lg hover:text-gray-300">Twitter</a></li>
        </ul>
      </div>
    </div>


  </div>
</template>

<style scoped>
/* Opcional: sombra suave o ajustes extra */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Background confined to the section; moves with page scroll. No fixed attachment for better mobile behavior. */
.hero {
  position: relative;
  /* establish stacking context for pseudo-element */
  overflow: hidden;
  /*El overflow hidden permite que el pseudo-elemento escape los límites del contenedor */
  /* allow the pseudo-element to escape container bounds */
}


/* Full-bleed background: use pseudo-element so content stays within the container while background spans viewport */
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  /* span full viewport width */
  height: 100%;
  background-image: url('@/assets/img/footer_dog.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}

/* Dog image sizing and mobile adjustments */
.hero-dog-img {
  height: 600px;
}

@media (max-width: 768px) {
  .hero {
    background-position: center top;
    padding: 2rem;
  }

  .hero-dog-img {
    height: 320px;
    margin-right: 0 !important;
    margin-top: 1rem !important;
  }

  /* Make text area full width on small screens */
  .hero>.relative.z-10.text-black.w-1\/2.ml-40.pr-40 {
    width: 100%;
    margin-left: 0;
    padding-right: 0;
  }
}
</style>
