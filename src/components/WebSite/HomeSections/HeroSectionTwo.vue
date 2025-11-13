<template>
  <section class="font-montpellier">
    <div class=" mx-auto px-10 w-[90vw]">
      <!-- GRID -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- HERO: ocupa todo el ancho -->
        <article class="relative rounded-3xl overflow-hidden md:col-span-4 aspect-[21/5] shadow-lg">
          <img
            src="@/assets/img/albergue1.png"
            alt="Ciudad en escala de grises"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/25"></div>

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
        <article class="relative rounded-3xl overflow-hidden md:col-span-2 shadow-lg h-72 md:h-80 bg-[#B4C5FF]">
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
        <article class="relative rounded-3xl overflow-hidden shadow-lg h-72 md:h-80 bg-neutral-100">
          <div class="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
            <p class="uppercase tracking-[.35em] text-sm text-neutral-500">Donde otros pasaron</p>
            <h3 class="text-neutral-900 font-bold text-2xl md:text-2xl leading-none">
              tú puedes detenerte y cambiarlo todo.
            </h3>
          </div>
        </article>

        <!-- DERECHA (1 columna) -->
        <article class="relative rounded-3xl overflow-hidden shadow-lg h-72 md:h-80">
                    <img
            src="@/assets/img/albergue3.jpg"
            alt="Ciudad en escala de grises"
            class="absolute inset-0 w-full h-full object-cover"
          />
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ariella+Sans:wght@700;900&family=Montpellier:wght@400;700&display=swap');

.font-montpellier { font-family: 'Montpellier', ui-sans-serif, system-ui, sans-serif; }
.font-ariela { font-family: 'Ariella Sans', ui-sans-serif, system-ui, sans-serif; }

/* Títulos en mayúsculas según la guía */
h3 { text-transform: none; } /* solo el hero usa mayúsculas/parcial */
</style>
