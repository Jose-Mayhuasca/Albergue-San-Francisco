<template>
  <!-- Hero section con diseño experto responsivo -->
  <div class="hero relative min-h-screen overflow-hidden flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16">

    <!-- Contenido de texto con tipografía experta -->
    <div class="relative text-black w-full lg:w-1/2 lg:ml-4 xl:ml-8 lg:pr-4 xl:pr-8 z-10 mb-6 lg:mb-0">
      <!-- Subtítulo con spacing perfecto -->
      <div class="mb-2 sm:mb-3 lg:mb-4">
        <h1 class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold tracking-[0.15em] uppercase text-gray-700">
          ADOPTAR CAMBIA VIDAS
        </h1>
      </div>
      
      <!-- Título principal con tipografía escalable perfecta -->
      <div class="mb-4 sm:mb-5 lg:mb-6">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[0.9] tracking-tight text-gray-900">
          HAZ FELIZ A UN 
          <span class="block text-amber-600">NUEVO AMIGO</span>
        </h2>
      </div>
      
      <!-- Descripción con line-height optimizado -->
      <div class="mb-6 sm:mb-7 lg:mb-8">
        <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-700 max-w-lg">
          Tú puedes ser su héroe y llenar tu vida de amor incondicional.
        </p>
      </div>
      
      <!-- Botón con diseño profesional -->
      <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button class="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base md:text-lg font-bold tracking-wide shadow-lg">
          <span class="flex items-center justify-center gap-2">
            CONÓCELOS
            <svg class="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </span>
        </button>
        
        <!-- Botón secundario opcional -->
        <button class="group border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:border-amber-500 hover:text-amber-600 transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold">
          <span class="flex items-center justify-center gap-2">
            VER HISTORIAS
            <svg class="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>

    <!-- Imagen del perro con contenedor optimizado -->
    <div class="relative w-full lg:w-1/2 flex justify-center lg:justify-end items-end">
      <div class="relative">
        <img 
          src="@/assets/img/happy_dog.png" 
          alt="Perro feliz del albergue San Francisco" 
          class="hero-dog-img w-auto object-contain max-w-full h-auto drop-shadow-2xl" 
        />
        <!-- Elemento decorativo -->
        <div class="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
          <span class="text-white text-lg sm:text-xl lg:text-2xl">🐾</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hero section con diseño experto */
.hero {
  position: relative;
  overflow: visible;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
}

/* Background con overlay profesional */
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

/* Overlay sutil para mejor legibilidad */
.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.3) 100%);
  z-index: -1;
}

/* Imagen del perro con sizing experto */
.hero-dog-img {
  height: 280px;
  filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15));
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Breakpoints profesionales para la imagen */
@media (min-width: 480px) {
  .hero-dog-img {
    height: 320px;
  }
}

@media (min-width: 640px) {
  .hero-dog-img {
    height: 380px;
  }
}

@media (min-width: 768px) {
  .hero-dog-img {
    height: 450px;
  }
}

@media (min-width: 1024px) {
  .hero-dog-img {
    height: 550px;
  }
}

@media (min-width: 1280px) {
  .hero-dog-img {
    height: 650px;
  }
}

@media (min-width: 1536px) {
  .hero-dog-img {
    height: 750px;
  }
}

/* Optimizaciones para móviles pequeños */
@media (max-width: 479px) {
  .hero {
    padding: 1rem 0.75rem;
    min-height: 100vh;
  }
  
  .hero-dog-img {
    height: 240px;
    max-width: 85%;
  }
}

/* Optimizaciones para móviles */
@media (min-width: 480px) and (max-width: 639px) {
  .hero {
    padding: 1.5rem 1rem;
  }
  
  .hero-dog-img {
    height: 300px;
  }
}

/* Optimizaciones para tablets */
@media (min-width: 640px) and (max-width: 1023px) {
  .hero {
    padding: 2rem 1.5rem;
  }
  
  .hero-dog-img {
    height: 400px;
  }
}

/* Optimizaciones para desktop */
@media (min-width: 1024px) {
  .hero {
    padding: 3rem 2rem;
  }
  
  .hero-dog-img {
    height: 550px;
  }
}

/* Efectos hover profesionales */
.hero-dog-img:hover {
  transform: scale(1.03) translateY(-5px);
  filter: drop-shadow(0 35px 70px rgba(0, 0, 0, 0.2));
}

/* Animaciones sutiles */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.hero-dog-img {
  animation: float 6s ease-in-out infinite;
}

/* Mejoras de rendimiento */
.hero-dog-img {
  will-change: transform, filter;
}

/* Optimización para pantallas de alta densidad */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .hero::before {
    background-image: url('@/assets/img/fondo_dog.png');
    background-size: cover;
  }
}

/* Mejoras de accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .hero-dog-img {
    animation: none;
    transition: none;
  }
  
  .hero-dog-img:hover {
    transform: none;
  }
}

/* Optimización para modo oscuro */
@media (prefers-color-scheme: dark) {
  .hero::after {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.05) 100%);
  }
}
</style>
