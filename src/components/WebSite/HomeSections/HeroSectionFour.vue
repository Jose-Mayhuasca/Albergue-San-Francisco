<template>
  <section class="py-16 md:py-18 font-sans">
    <div class=" mx-auto px-10 w-[80vw] grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch h-[500px] md:h-[600px]">
      <!-- IZQUIERDA -->
      <div class="flex flex-col justify-center px-6 md:px-8">
        <h1 class="text-5xl md:text-6xl font-extrabold leading-none text-neutral-900">
          Historias
        </h1>
        <h2 class="text-5xl md:text-6xl font-extrabold leading-none text-neutral-500 mt-1">
          de éxito
        </h2>
      </div>

      <!-- TARJETA VERDE -->
      <div class="relative rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between text-white">
        <!-- Imagen de fondo -->
        <img
          :src="img1"
          alt="Ciudad en escala de grises"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <!-- Overlay -->
        <div class="absolute inset-0 "></div>

        <!-- Contenido -->
        <div class="relative p-8 md:p-12 flex flex-col justify-between h-full">
          <p class="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Keep overlays<br />
            subtle,<br />
            use branded<br />
            highlight<br />
            covers.
          </p>

        </div>
      </div>

      <!-- TARJETA GRIS -->
      <div class="relative rounded-3xl overflow-hidden shadow-lg flex flex-col justify-end text-white">
        <!-- Imagen de fondo -->
        <img
          :src="img2"
          alt="Fondo suave"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <!-- Overlay -->
        <div class="absolute inset-0 "></div>

        <!-- Contenido -->
        <div class="relative p-8 md:p-12">
          <p class="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
            Mix serif and<br />
            script fonts.<br />
            Avoid bright<br />
            backgrounds.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import img1 from '@/assets/img/albergue4.jpg';
import img2 from '@/assets/img/albergue5.jpg';

export default {
  data() {
    return {
      img1,
      img2,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

.font-sans {
  font-family: 'Inter', sans-serif;
}
</style>
