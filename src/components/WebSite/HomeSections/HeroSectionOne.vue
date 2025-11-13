<template>
  <!-- Sección hero -->
  <div class="hero relative h-screen overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 mb-40">

    <!-- Imagen del perro (quedará arriba en móviles y a la derecha en PC) -->
    <div class="hero-image relative w-full md:w-1/2 flex justify-center md:order-2">
      <img 
        src="@/assets/img/happy_dog.png" 
        alt="Perro" 
        class="hero-dog-img w-auto object-contain mt-10 md:mr-60"
      />
    </div>

    <!-- Contenido de texto -->
    <div class="relative text-black w-full md:w-1/2 md:ml-40 md:pr-40 text-center md:text-left mt-10 md:mt-0">
      <h1 class="text-xl md:text-lg">ADOPTAR CAMBIA VIDAS</h1>
      <h2 class="text-6xl font-semibold mt-2 md:text-4xl">HAZ FELIZ A UN NUEVO AMIGO</h2>
      <p class="mt-4 text-2xl md:text-lg">Tú puedes ser su héroe y llenar tu vida de amor incondicional.</p>
      <button class="mt-6 bg-[color:var(--color-primary)] text-gray-800 px-6 py-2 rounded-full hover:bg-amber-500 transition">
        CONÓCELOS
      </button>
    </div>
  </div>
</template>

<style scoped>
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
}

/* Ajustes de tamaño de la imagen del perro y ajustes móviles */
.hero-dog-img {
  height: 600px;
  max-width: 100%;
}

@media (max-width: 1024px) {
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
  .hero {
    padding: 2rem;
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
    margin-bottom: 1rem;
  }

  /* Ajustes para el texto */
  .hero h1, .hero h2, .hero p {
    text-align: center;
  }
}

/* Asegurar que el orden cambie en móviles (imagen arriba, texto abajo) y en PC (imagen derecha, texto izquierda) */
.hero-image {
  order: 0; /* Imagen arriba en móvil */
}

@media (min-width: 1024px) {
  .hero-image {
    order: 2; /* Imagen a la derecha en PC */
  }
}
</style>
