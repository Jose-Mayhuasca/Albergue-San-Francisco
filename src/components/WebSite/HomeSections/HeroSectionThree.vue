<template>
  <!-- Usamos background CSS en la sección para que el fondo pertenezca a la sección y se mueva con el scroll -->
  <div class="hero relative h-screen overflow-hidden flex items-center justify-between p-12">

    <!-- Contenido sin texto -->
    <div class="relative text-black w-1/2 ml-40 pr-40">

    </div>

    <!-- Contenido derecho: tarjeta de donación mejorada -->
    <div class="relative w-1/2 flex items-center justify-center pr-16">
      <aside class="max-w-lg w-full py-8 px-4 rounded-2xl" aria-labelledby="donation-title">

        <h3 id="donation-title" class="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">Dona comida para mascotas</h3>

        <p class="mt-3 text-xl font-semibold text-gray-800">Alimenta una vida hoy</p>

        <p class="mt-4 text-lg text-gray-700">Cada paquete de comida que dones ayuda a un animal a tener una segunda oportunidad. Rápido, seguro y directo al refugio.</p>

        <div class="mt-6 flex flex-col sm:flex-row gap-3">
          <button class="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white bg-amber-500 hover:bg-amber-600" aria-label="Dona ahora">
            Dona ahora
          </button>

          <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-green-700 bg-sky-50 hover:bg-blue-100 transition" aria-label="Contacto">
            Contacto
          </a>
        </div>

      </aside>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Numero de WhatsApp al que se enviarán los mensajes. Debe incluir el código de país sin el '+'.
      whatsappNumber: '51951703662',
      // Mensaje inicial que aparecerá en la conversación. Puedes personalizarlo.
      whatsappMessage: 'Hola, quiero más información sobre donaciones'
    }
  },
  computed: {
    whatsappLink() {
      return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`
    }
  }
}
</script>

<style scoped>
/* Opcional: sombra suave o ajustes extra */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Background confined to the section; moves with page scroll. No fixed attachment for better mobile behavior. */
.hero {
  position: relative; /* establish stacking context for pseudo-element */
  overflow: visible; /* allow the pseudo-element to escape container bounds */
}

/* Full-bleed background: use pseudo-element so content stays within the container while background spans viewport */
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw; /* span full viewport width */
  height: 100%;
  background-image: url('@/assets/img/dog_food.png');
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
  .hero > .relative.z-10.text-black.w-1\/2.ml-40.pr-40 {
    width: 100%;
    margin-left: 0;
  }
}

.donate-btn {
  min-width: 160px;
}

@media (max-width: 640px) {
  .donation-card {
    padding: 1.25rem;
    border-radius: 1rem;
  }

  .donation-badge {
    display: block;
  }
}
</style>
