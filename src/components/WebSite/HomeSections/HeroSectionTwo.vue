<template>
  <section class="">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Grid principal -->
      <div class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
        <!-- Izquierda arriba -->
        <article
          class="relative rounded-3xl overflow-hidden md:col-span-2 md:row-span-1 aspect-[18/9] 
                 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
        >
          <img
            src="@/assets/img/albergue1.jpg"
            alt="Personas jugando con perros del albergue"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/25"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <h3
              class="px-6 md:px-10 text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-snug text-center"
            >
              Poses naturales, en movimiento y
              <br class="hidden md:block" /> expresiones tranquilas 🐾
            </h3>
          </div>
        </article>

        <!-- Derecha (ocupa dos filas) -->
        <article
          class="relative rounded-3xl overflow-hidden md:col-span-1 md:row-span-2 
                 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] flex flex-col"
        >
          <img
            src="@/assets/img/albergue3.jpg"
            alt="Ciudad o zona con espacio negativo"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/30"></div>
          <div class="relative flex flex-1 items-center justify-center p-8">
            <p
              class="text-center text-white font-bold text-2xl md:text-3xl leading-snug"
            >
              Centrado o regla de tercios;<br class="hidden md:block" />
              mucho espacio negativo.
            </p>
          </div>
        </article>

        <!-- Izquierda abajo -->
        <article
          class="relative rounded-3xl overflow-hidden md:col-span-2 md:row-span-1 aspect-[18/9]
                 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
        >
          <img
            src="@/assets/img/albergue2.jpg"
            alt="Cielo azul sobre parque del albergue"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <h3
              class="text-white font-bold text-2xl md:text-3xl lg:text-4xl text-center px-6 leading-tight"
            >
              Tonos suaves y luz natural,<br class="hidden md:block" />
              sombras mínimas para resaltar<br class="hidden md:block" /> a cada
              peludo.
            </h3>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
