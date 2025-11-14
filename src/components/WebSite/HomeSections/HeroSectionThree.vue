<template>
  <!-- Usamos background CSS en la sección para que el fondo pertenezca a la sección y se mueva con el scroll -->
  <div class="hero relative h-screen overflow-hidden flex flex-col md:flex-row items-center justify-between">

    <!-- Contenedor A -->
    <div class="relative text-black w-full md:w-1/2 ml-40 pr-40">
      <!-- Aquí puedes agregar el contenido de contenedor A -->
    </div>

    <!-- Contenedor B derecho: tarjeta de donación mejorada -->
    <div class="relative w-full md:w-1/2 flex items-center justify-center pr-10">
      <aside class="max-w-3xl w-full py-8 rounded-2xl" aria-labelledby="donation-title">

        <h3 id="donation-title" class="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">Dona comida para mascotas</h3>

        <p class="mt-3 text-xl font-semibold text-gray-800">Alimenta una vida hoy</p>

        <p class="mt-4 text-lg text-gray-700">Cada paquete de comida que dones ayuda a un animal a tener una segunda oportunidad. Rápido, seguro y directo al refugio.</p>

        <div class="mt-6 flex flex-col sm:flex-row gap-3">
          <button class="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-amber-500/90 to-amber-500 hover:bg-gradient-to-r hover:from-amber-500/90 hover:to-amber-500/90" aria-label="Dona ahora">
            Dona ahora
          </button>

          <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-green-700 bg-emerald-50 hover:bg-emerald-100 transition" aria-label="Contacto">
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
@import url('https://fonts.googleapis.com/css2?family=Ariella+Sans:wght@700;900&family=Montpellier:wght@400;700&display=swap');

.font-montpellier { font-family: 'Montpellier', ui-sans-serif, system-ui, sans-serif; }
.font-ariela { font-family: 'Ariella Sans', ui-sans-serif, system-ui, sans-serif; }

/* Títulos en mayúsculas según la guía */
h3 { text-transform: none; } /* solo el hero usa mayúsculas/parcial */

/* Ajustes generales para la imagen de fondo */
.hero {
  position: relative; /* establece el contexto de apilamiento para el pseudo-elemento */
  overflow: visible; /* permite que el pseudo-elemento se salga de los límites del contenedor */
  /* Variables para controlar la posición del fondo (se pueden ajustar para trasladar la imagen en X/Y) */
  --bg-pos-x: 50%;
  --bg-pos-y: 50%;
}

/* Fondo de pantalla completo: se usa un pseudo-elemento para que el contenido se quede dentro del contenedor mientras que el fondo cubre todo el viewport */
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw; /* abarca todo el ancho del viewport */
  height: 100%;
  background-image: url('@/assets/img/dog_food.png');
  background-size: cover;
  /* Usamos variables para poder trasladar la imagen en X/Y desde CSS (mobile/tablet tendrán valores específicos) */
  background-position: var(--bg-pos-x) var(--bg-pos-y);
  background-repeat: no-repeat;
  z-index: -1;
}

/* Ajustes para la vista móvil */
@media (max-width: 768px) {
  .hero {
    /* En móvil movemos el fondo hacia arriba para alinearlo con el Contenedor A (ajusta los valores si quieres otro punto) */
    --bg-pos-x: 10%;
    --bg-pos-y: 25%;
    padding: 2rem;
  }

  /* Ajuste para los contenedores */
  .hero > .relative {
    width: 100%;
    margin-left: 0;
    padding-right: 0;
  }

  .hero > .relative.text-black.w-1\/2.ml-40.pr-40 {
    width: 100%;
    margin-left: 0;
  }

  /* Cambio de orden: el contenedor A se coloca arriba del contenedor B */
  .hero > .relative.text-black {
    order: 1;
  }

  .hero > .relative.w-full.md\:w-1\/2 {
    order: 2;
  }
}

/* Ajustes para tabletas (768px a 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .hero {
    /* En tablet también desplazamos el fondo para que coincida con la altura del Contenedor A (A arriba de B) */
    --bg-pos-x: 10%;
    --bg-pos-y: 18%;
    padding: 2rem;
    /* For tablet we want the two containers stacked vertically (A arriba de B) */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Los contenedores deben seguir el mismo orden: el contenedor A encima del contenedor B */
  .hero > .relative.text-black {
    /* Contenedor A (texto) primero */
    order: 0;
    width: 100%;
    margin-left: 0;
    padding-right: 0;
  }

  .hero > .relative.w-full.md\:w-1\/2 {
    /* Contenedor B (tarjeta) después */
    order: 1;
    width: 100%;
    padding-right: 0;
    display: flex;
    justify-content: center;
  }
}

/* Ajustes para PC (más de 1024px) */
@media (min-width: 1024px) {
  /* Aquí no hacemos cambios significativos en la disposición, ya que está correcto. Solo aseguramos que no se vean afectados por los cambios de las otras vistas */
  .hero > .relative.text-black {
    order: 0;
  }

  .hero > .relative.w-full.md\:w-1\/2 {
    order: 1;
  }
}
</style>
