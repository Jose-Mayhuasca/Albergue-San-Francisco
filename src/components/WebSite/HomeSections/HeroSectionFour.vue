<template>
  <section class="py-16 md:py-18 font-sans">
    <div class="mx-auto px-10 w-[80vw] grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch h-[500px] md:h-[600px]">
      <!-- IZQUIERDA -->
      <div class="flex flex-col justify-center px-6 md:px-8 order-1 md:order-1 lg:order-none">
        <h1 class="text-5xl md:text-6xl font-extrabold leading-none text-neutral-900 dark:text-white">Historias</h1>
        <h2 class="text-5xl md:text-6xl font-extrabold leading-none text-neutral-500 dark:text-neutral-300 mt-1">de éxito</h2>
      </div>
      
      <!-- TARJETA A -->
      <div class="relative rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between text-white order-2 md:order-2 lg:order-none">
        <!-- Imagen de fondo -->
        <img :src="img1" alt="Ciudad en escala de grises" class="card-bg-img absolute inset-0 w-full h-full object-cover" />
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/30 dark:bg-black/60"></div>
        <!-- Historia 1 -->
        <div class="relative p-8 md:p-12 flex flex-col justify-between h-full">
          <p class="text-xl md:text-3xl font-bold leading-tight tracking-tight">Momentos reales<br />que muestran<br />cómo el amor<br />cambia destinos.</p>
        </div>
      </div>
      
      <!-- TARJETA B -->
      <div class="relative rounded-3xl overflow-hidden shadow-lg flex flex-col justify-end text-white order-3 md:order-3 lg:order-none">
        <!-- Imagen de fondo -->
        <img :src="img2" alt="Fondo suave" class="card-bg-img absolute inset-0 w-full h-full object-cover" />
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/25 dark:bg-black/50"></div>
        <!-- Historia 2 -->
        <div class="relative p-8 md:p-12">
          <p class="text-xl md:text-4xl font-semibold leading-tight tracking-tight">Pequeños actos,<br />grandes comienzos.<br />el afecto abre<br />caminos inesperados.</p>
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

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

.font-sans { font-family: 'Inter', sans-serif; }

@media (max-width: 768px) {
  /* Móvil */
  .grid {
    grid-template-columns: 1fr; /* En móviles, todos los elementos estarán en una sola columna */
  }

  .h-\[500px\] {
    height: 700px; /* Ajustamos la altura a auto para evitar el corte de los elementos */
  }

  .p-8 {
    padding: 2rem; /* Ajuste de padding para mejor presentación en móvil */
  }

  /* Hacer los textos de las historias más pequeños en móvil */
  .text-3xl {
    font-size: 1.25rem; /* más pequeño para historia 1 y 2 */
  }

  .text-4xl {
    font-size: 1.5rem; /* más pequeño en móvil para variantes mayores */
  }

  .text-5xl {
    font-size: 2.5rem; /* Tamaño de texto ajustado para móviles */
  }

  /* Mejorar visibilidad de las tarjetas y la imagen de fondo */
  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  /* Tableta */
  .grid {
    /* Una sola columna en tablet para apilar: 'Historias', Tarjeta A, Tarjeta B */
    grid-template-columns: 1fr; /* Una columna para tabletas */
    grid-template-rows: auto auto auto; /* Tres filas apiladas */
  }

  .h-\[500px\] {
    height: auto; /* Ajuste de la altura para tablets */
  }

  .p-8 {
    padding: 2.5rem; /* Ajuste de padding */
  }

  .text-3xl {
    font-size: 2.25rem; /* Ajuste de texto */
  }

  .text-4xl {
    font-size: 2.5rem; /* Ajuste de texto */
  }

  .text-5xl {
    font-size: 3rem; /* Ajuste de texto */
    text-align: center;
  }

  /* Ajustes de layout para las tarjetas */
  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }
}

@media (min-width: 1024px) {
  /* Computadora */
  .grid {
    grid-template-columns: 1fr 1fr 1fr; /* Tres columnas para computadoras */
  }

  .h-\[500px\] {
    height: 600px; /* Ajustamos la altura para computadoras */
  }

  .p-8 {
    padding: 3rem; /* Padding adecuado para computadoras */
  }

  .text-3xl {
    font-size: 2.5rem; /* Ajuste de texto */
  }

  .text-4xl {
    font-size: 3rem; /* Ajuste de texto */
  }

  .text-5xl {
    font-size: 4rem; /* Ajuste de texto */
  }
}


</style>
