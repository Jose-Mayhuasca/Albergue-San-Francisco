<template>
  <!-- Sección hero -->
  <div class="hero relative h-screen overflow-hidden flex flex-col lg:flex-row items-center justify-between p-6 md:p-12 xs:mb-80">

    <!-- Imagen del perro (quedará arriba en móviles y a la derecha en PC) -->
  <div class="hero-image relative w-full lg:w-1/2 flex justify-center lg:order-2">
      <img 
        src="@/assets/img/happy_dog.png" 
        alt="Perro" 
        class="hero-dog-img w-auto object-contain mt-10 lg:mr-60"
      />
    </div>

    <!-- Contenido de texto -->
  <div class="relative text-black dark:text-white w-full lg:w-1/2 lg:ml-40 lg:pr-40 lg:text-left sm:text-left xs:text-left mt-10 lg:mt-0">
      <h1 class="text-xl md:text-lg">ADOPTAR CAMBIA VIDAS</h1>
      <h2 class="text-4xl font-semibold mt-2 md:text-4xl xs:text-2xl sm:text-3xl">HAZ FELIZ A UN NUEVO AMIGO</h2>
      <p class="mt-4 text-lg md:text-lg xs:text-base">Tú puedes ser su héroe y llenar tu vida de amor incondicional.</p>
      <button @click="goToCatalog" type="button" class="mt-6 bg-[color:var(--color-primary)] dark:bg-amber-700 text-gray-800 dark:text-gray-100 px-6 py-2 rounded-full hover:bg-amber-500 dark:hover:bg-amber-600 transition">
        CONÓCELOS
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goToCatalog = () => {
  router.push('/catalogo')
}
</script>

<style lang="scss" scoped>
/* Opcional: sombra suave o ajustes extra */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Background confinado a la sección; se mueve con el scroll */
.hero {
  position: relative;
  overflow: visible;
}

/* Fondo de pantalla completo: usando pseudo-elemento para que el contenido quede dentro del contenedor mientras el fondo abarca todo el viewport */
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw; 
  height: 100%;
  background-image: url('@/assets/img/fondo_dog.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  /* ensure content sits above the background image */
}

/* Dark mode: when parent `html` or `body` has `.dark` class (Tailwind class strategy) */
:global(.dark) .hero::before {
  /* add a dark overlay on top of the existing background image */
  background-image: linear-gradient(rgba(6,6,23,0.6), rgba(6,6,23,0.6)), url('@/assets/img/fondo_dog.png');
  background-blend-mode: overlay;
  filter: brightness(0.75) contrast(0.95);
}

/* Respect user's system preference if Tailwind is set to `media` or for users without toggles */
@media (prefers-color-scheme: dark) {
  .hero::before {
    background-image: linear-gradient(rgba(6,6,23,0.6), rgba(6,6,23,0.6)), url('@/assets/img/fondo_dog.png');
    background-blend-mode: overlay;
    filter: brightness(0.75) contrast(0.95);
  }
}

/* Ajustes de tamaño de la imagen del perro y ajustes móviles */
.hero-dog-img {
  height: 600px;
  max-width: 100%;
  transition: filter 200ms ease, transform 200ms ease;
}

/* Dark adjustments for the hero image */
:global(.dark) .hero-dog-img {
  filter: brightness(0.95) saturate(0.9);
}

@media (prefers-color-scheme: dark) {
  .hero-dog-img {
    filter: brightness(0.95) saturate(0.9);
  }
}

@media (max-width: 1024px) {
  /* Ajustes para tabletas (entre 768px y 1024px) */
  .hero {
    background-position: center top;
    padding: 3rem 2rem;
  }

  .hero-dog-img {
    height: 400px;
    margin-right: 0 !important;
    margin-top: 1rem !important;
  }

  /* Contenedor de texto */
  .hero > .relative.text-black {
    width: 100%;
    margin-left: 0;
    padding-right: 0;
    text-align: center; /* Centrado de texto en dispositivos pequeños */
  }
}

@media (max-width: 768px) {
  /* Ajustes para móviles (menos de 768px) */
  .hero {
    padding: 2rem;
    margin-bottom: 40px;
  }

  /* Aseguramos que la imagen quede arriba y el texto abajo */
  .hero > .relative.text-black {
    width: 100%;
    margin-left: 0;
    padding-right: 0;
  }

  .hero-dog-img {
    height: 540px;
    margin-top: 0;
   
  }

  /* Ajustes para el texto */
  .hero h1, .hero h2, .hero p {
    text-align: center;
  }

  /* Ajuste de tamaño de texto */
  .hero h1 {
    font-size: 1.25rem;
  }

  .hero h2 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }
}

/* Asegurar que el orden cambie en móviles (imagen arriba, texto abajo) y en PC (imagen derecha, texto izquierda) */
.hero-image {
  order: 0; /* Imagen arriba en móvil */
}

@media (min-width: 1024px) {
  /* Ajustes para pantallas grandes (PC - más de 1024px) */
  .hero-image {
    order: 2; /* Imagen a la derecha en PC */
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  /* Ajustes para tabletas grandes (de 768px a 1024px) */
  .hero-image {
    order: 0; /* Imagen arriba en tabletas */
  }

  .hero-dog-img {
    height: 700px;
    margin-top: 0;
    margin-bottom: 1rem;
  }
}
</style>
