<template>
  <section class="hero-four py-16 md:py-24">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <!-- Título -->
      <h1 class="text-md leading-[0.9] font-extrabold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
        Programa de
      </h1>
      <h2 class="text-md leading-[0.9] font-extrabold tracking-tight text-gray-500 md:text-3xl lg:text-4xl -mt-2">
       apadrinamiento
      </h2>

      <!-- Tarjeta principal -->
      <div
        class="relative mt-12 md:mt-16 rounded-3xl bg-[#CFA9E3] p-8 md:p-12 lg:p-16 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] overflow-hidden"
      >
        <!-- Adorno de huellas -->
        <div class="pointer-events-none absolute inset-0 opacity-15 [mask-image:radial-gradient(white,transparent_70%)]">
          <div class="absolute -left-10 -top-8 text-7xl">🐾</div>
          <div class="absolute right-6 top-10 text-6xl rotate-12">🐾</div>
          <div class="absolute left-10 bottom-6 text-8xl -rotate-6">🐾</div>
        </div>

        <div
          class="relative grid grid-cols-1 lg:grid-cols-3 items-start text-white gap-10 lg:gap-0
                 divide-y lg:divide-y-0 lg:divide-x divide-white/40"
        >
          <!-- Col 1 -->
          <div class="text-center px-4 md:px-10 pt-6 md:pt-10">
            <p class="text-2xl md:text-3xl font-extrabold">Infografías</p>
            <p class="mt-4 text-lg md:text-xl leading-relaxed">
              “Adopta y cuida”: tasas de guardado<br class="hidden md:block" />
              65% más altas que los reels.
            </p>
          </div>

          <!-- Col 2 -->
          <div class="text-center px-4 md:px-10 pt-6 md:pt-10">
            <p class="text-3xl md:text-4xl font-extrabold">Posts</p>
            <p class="mt-4 text-lg md:text-xl leading-relaxed">
              El formato más compartido, sobre todo<br class="hidden md:block" />
              con tips de cuidado y entrenamiento.
            </p>
          </div>

          <!-- Col 3 -->
          <div class="text-center px-4 md:px-10 py-6 md:py-10">
            <p class="text-3xl md:text-4xl font-extrabold">Video</p>
            <p class="mt-4 text-lg md:text-xl leading-relaxed">
              Ideal para alcance (tours del albergue,<br class="hidden md:block" />
              presentaciones de mascotas)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* Estilo base */
.hero-four {
  font-family: 'Inter', sans-serif;
}

/* Título en dispositivos móviles */
h1, h2 {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  /* Móvil */
  .hero-four {
    padding: 2rem 1.5rem;
  }

  h1 {
    font-size: 2.15rem;

  }

  h2 {
    font-size: 2rem;
  }

  /* Ajustamos la tarjeta para que ocupe todo el ancho */
  .relative {
    width: 100%;
  }

  .grid {
    grid-template-columns: 1fr; /* En móviles, todos los elementos se apilan verticalmente */
  }

  /* Ajustes en el tamaño de las tarjetas */
  .text-2xl {
    font-size: 1.5rem; /* Ajuste de tamaño de texto */
  }

  .text-3xl {
    font-size: 1.75rem; /* Ajuste de tamaño de texto */
  }

  .text-4xl {
    font-size: 2rem; /* Ajuste de tamaño de texto */
  }

  .p-8 {
    padding: 1.5rem; /* Ajuste de padding */
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  /* Tableta */
  .hero-four {
    padding: 2.5rem 2rem;
  }

  .grid {
    grid-template-columns: 1fr; /* En tabletas, apilamos en columna */
  }

  /* Ajustes en el tamaño de las tarjetas */
  .text-2xl {
    font-size: 1.75rem; /* Ajuste de tamaño de texto */
  }

  .text-3xl {
    font-size: 2rem; /* Ajuste de tamaño de texto */
  }

  .text-4xl {
    font-size: 2.25rem; /* Ajuste de tamaño de texto */
  }

  .p-8 {
    padding: 2rem; /* Ajuste de padding */
  }
}

@media (min-width: 1024px) {
  /* Computadora */
  .hero-four {
    padding: 3rem 2rem;
  }

  h1 {
    font-size: 3rem; /* Ajuste de tamaño de texto para título */
  }

  h2 {
    font-size: 3rem; /* Ajuste de tamaño de texto para título */
  }

  /* Tres columnas para computadoras */
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
  }

  /* Ajustes en el tamaño de las tarjetas */
  .text-2xl {
    font-size: 2.25rem; /* Ajuste de tamaño de texto */
  }

  .text-3xl {
    font-size: 2.5rem; /* Ajuste de tamaño de texto */
  }

  .text-4xl {
    font-size: 3rem; /* Ajuste de tamaño de texto */
  }

  .p-8 {
    padding: 2.5rem; /* Ajuste de padding */
  }
}
</style>
