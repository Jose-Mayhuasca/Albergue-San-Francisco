<template>
  <!-- Usamos background CSS en la sección para que el fondo pertenezca a la sección y se mueva con el scroll -->
  <div class="hero relative h-screen overflow-hidden flex items-center justify-between p-12">

    <!-- Contenido de texto -->
    <div class="relative text-black w-1/2 ml-40 pr-40">
      <h1 class="text-xl ">ADOPTAR CAMBIA VIDAS</h1>
      <h2 class="text-6xl font-semibold mt-2">HAZ FELIZ A UN NUEVO AMIGO</h2>
      <p class="mt-4 text-2xl">Tú puedes ser su héroe y llenar tu vida de amor incondicional.</p>
      <button class="mt-6  bg-[color:var(--color-primary)] text-gray-800 px-6 py-2 rounded-full hover:bg-amber-500 transition">
        CONÓCELOS
      </button>
    </div>

    <!-- Imagen del perro -->
    <div class="relative w-1/2 flex justify-center ">
      <img 
        src="@/assets/img/happy_dog.png" 
        alt="Perro" 
        class="hero-dog-img w-auto object-contain mt-10 mr-60" 
      />
    </div>
  </div>
</template>

<style scoped>
/* Opcional: sombra suave o ajustes extra */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Background confined to the section; moves with page scroll. No fixed attachment for better mobile behavior. */
.hero {
  position: relative; /* establish stacking context for pseudo-element */
  overflow: visible; /* allow the pseudo-element to escape container bounds */
}

/* Full-bleed background: use pseudo-element so content stays within the container while background spans viewport */
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw; /* span full viewport width */
  height: 100%;
  background-image: url('@/assets/img/fondo_dog.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}

/* Dog image sizing and mobile adjustments */
.hero-dog-img {
  height: 600px;
}

@media (max-width: 768px) {
  .hero {
    background-position: center top;
    padding: 2rem;
  }

  .hero-dog-img {
    height: 320px;
    margin-right: 0 !important;
    margin-top: 1rem !important;
  }

  /* Make text area full width on small screens */
  .hero > .relative.z-10.text-black.w-1\/2.ml-40.pr-40 {
    width: 100%;
    margin-left: 0;
    padding-right: 0;
  }
}
</style>
