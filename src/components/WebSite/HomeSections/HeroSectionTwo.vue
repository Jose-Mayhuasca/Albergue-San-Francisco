<template>
  <section class="font-montpellier">
    <div class="max-w-6xl mx-auto">
      <!-- Grid principal -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-0">

        <!-- Columna izquierda superior -->
        <article
          class="relative rounded-3xl overflow-hidden md:col-span-3 lg:col-span-2 aspect-[18/11] shadow-lg"
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
              Typography System
            </h3>
          </div>
        </article>

        <!-- Columna derecha inferior -->
        <article
          class="relative rounded-3xl overflow-hidden md:col-span-2 lg:col-span-1 aspect-[18/9] shadow-lg"
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
              Heading font: Ariella Sans <br class="hidden md:block" />
              Body font: Montpellier.
            </p>
          </div>
        </article>

        <!-- Columna izquierda inferior -->
        <article
          class="relative rounded-3xl overflow-hidden md:col-span-3 lg:col-span-2 aspect-[18/6] shadow-lg"
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
              Use bold serif only for H1 and H2. All caps for emphasis only.
            </h3>
          </div>
        </article>

        <!-- Columna derecha superior -->
        <article
          class="relative rounded-3xl overflow-hidden md:col-span-3 lg:col-span-1 shadow-lg"
        >
          <img
            src="@/assets/img/albergue1.jpg"
            alt="Typographic Layout"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/50"></div>
          <div class="absolute inset-0 flex items-center justify-center p-8">
            <h3
              class="text-white font-bold text-2xl md:text-3xl lg:text-4xl text-center px-6 leading-tight"
            >
              Hierarchy Tips
            </h3>
          </div>
        </article>

        <!-- Columna medio inferior -->
        <article
          class="relative rounded-3xl overflow-hidden md:col-span-2 lg:col-span-2 shadow-lg"
        >
          <img
            src="@/assets/img/albergue3.jpg"
            alt="Typography Visual"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/30"></div>
          <div class="relative flex flex-1 items-center justify-center p-8">
            <p
              class="text-center text-white font-bold text-2xl md:text-3xl leading-snug"
            >
              Font system breakdown: <br class="hidden md:block" />
              Ariella Sans for headings, Montpellier for body text.
            </p>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // Add any necessary data properties here
    };
  },
};
</script>

<style scoped>
/* Importing the typography system for the font styles */
@import url('https://fonts.googleapis.com/css2?family=Ariella+Sans:wght@400;700&family=Montpellier:wght@400;700&display=swap');

.font-montpellier {
  font-family: 'Montpellier', sans-serif;
}

.font-ariela {
  font-family: 'Ariella Sans', sans-serif;
}

h3 {
  font-weight: 700; /* Bold font for headings */
  text-transform: uppercase; /* All caps for emphasis */
}

p {
  font-weight: 700; /* Body font for emphasized text */
}
</style>
