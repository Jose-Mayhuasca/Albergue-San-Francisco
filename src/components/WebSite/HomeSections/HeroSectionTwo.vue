<template>
  <section class="font-montpellier">
    <div class="mx-auto px-10 w-[90vw]">
      <!-- GRID -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
  <!-- HERO: ocupa todo el ancho -->
  <article class="hero-main relative rounded-3xl overflow-hidden md:col-span-4 aspect-[21/5] shadow-lg">
          <img
            src="@/assets/img/albergue1.png"
            alt="Ciudad en escala de grises"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/25 dark:bg-black/50"></div>

          <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 class="font-ariela text-white font-extrabold text-4xl md:text-6xl leading-none">
              Adopta amor,
            </h1>
            <span class="mt-2 text-white/90 text-3xl md:text-5xl font-bold tracking-wide">
               adopta esperanza
            </span>
          </div>
        </article>

  <!-- IZQUIERDA (2 columnas) -->
  <article class="left-card relative rounded-3xl overflow-hidden md:col-span-2 shadow-lg h-72 md:h-80 bg-[#B4C5FF] dark:bg-slate-800">
          <div class="absolute inset-0 p-6 md:p-8 flex items-end">
            <div>
              <p class="uppercase tracking-[.35em] text-sm text-white/80 mb-2">Donde falta un hogar,</p>
              <h3 class="font-ariela text-white font-black text-5xl md:text-7xl leading-none">
               sobra ternura.
              </h3>
            </div>
          </div>
        </article>

  <!-- CENTRO (1 columna) -->
  <article class="center-card relative rounded-3xl overflow-hidden shadow-lg h-72 md:h-80 bg-neutral-100 dark:bg-neutral-800">
          <div class="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
            <p class="uppercase tracking-[.35em] text-sm text-neutral-500 dark:text-neutral-300">Donde otros pasaron</p>
            <h3 class="text-neutral-900 dark:text-neutral-100 font-bold text-2xl md:text-2xl leading-none">
              tú puedes detenerte y cambiarlo todo.
            </h3>
          </div>
        </article>

  <!-- DERECHA (1 columna) -->
  <article class="right-card relative rounded-3xl overflow-hidden shadow-lg h-72 md:h-80">
          <img
            src="@/assets/img/albergue3.jpg"
            alt="Ciudad en escala de grises"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
          <div class="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
            <p class="uppercase tracking-[.35em] text-sm text-white">Su mirada no pide…</p>
            <p class="text-white font-bold text-5xl leading-relaxed">
              solo espera.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Ariella+Sans:wght@700;900&family=Montpellier:wght@400;700&display=swap');

.font-montpellier { font-family: 'Montpellier', ui-sans-serif, system-ui, sans-serif; }
.font-ariela { font-family: 'Ariella Sans', ui-sans-serif, system-ui, sans-serif; }

/* Títulos en mayúsculas según la guía */
h3 { text-transform: none; } /* solo el hero usa mayúsculas/parcial */

/* Ajustes de diseño para vistas responsivas */

/* Estilo para móviles */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr; /* Solo una columna */
  }

  .h-72, .h-80 {
    height: auto; /* No sobrepasar el contenido */
  }

  /* Ajuste de los artículos para que sean cuadrados y uno debajo del otro */
  .relative {
    aspect-ratio: 1; /* Mantener cuadrados */
  }

  /* Aseguramos que todo el contenido se vea bien */
  .grid > article {
    width: 100%; /* Los artículos ocupan todo el ancho */
  }
}

/* Estilo para tabletas (768px a 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  /* En tablet: dos columnas, pero colocamos las áreas para
     que hero y left-card ocupen filas separadas y centro/derecha
     queden debajo de "sobra ternura". --tablet-main-height
     controla fácilmente la altura compartida. */
  .grid {
    --tablet-main-height: 280px; /* Ajusta este valor para cambiar ambas alturas */
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "hero hero"
      "left left"
      "center right";
    gap: 1rem;
  }

  .hero-main { grid-area: hero; height: var(--tablet-main-height); }
  .left-card { grid-area: left; height: var(--tablet-main-height); }

  .center-card { grid-area: center; height: 280px; }
  .right-card { grid-area: right; height: 280px; }

  /* No forzamos aspecto cuadrado en tablet; usamos las alturas definidas */
  .relative { aspect-ratio: auto; }

  /* Asegurar que las imágenes cubran bien las tarjetas */
  .hero-main img, .right-card img { height: 100%; width: 100%; object-fit: cover; }

  .grid > article { margin: 0; }
}

/* Estilo para PC (más de 1024px) */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr); /* 4 columnas para pantallas grandes */
  }

  .h-72, .h-80 {
    height: 320px; /* Establecer la altura para que se vean bien en pantallas grandes */
  }
}

/* Dark-mode image and overlay adjustments */
:global(.dark) .hero-main img,
:global(.dark) .right-card img {
  filter: brightness(0.8) contrast(0.95) saturate(0.9);
}

@media (prefers-color-scheme: dark) {
  .hero-main img,
  .right-card img {
    filter: brightness(0.85) contrast(0.95) saturate(0.95);
  }
}
</style>
