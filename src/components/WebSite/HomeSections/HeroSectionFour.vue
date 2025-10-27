<template>
  <section class="hero-four py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Título mejorado -->
      <div class="mb-12 md:mb-16">
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-900 mb-2">
          Nuestros Servicios
        </h1>
        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-amber-600 mb-4">
          para el Albergue San Francisco 🐾
        </h2>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Cuidamos con amor y profesionalismo a nuestros peludos mientras encuentran su hogar perfecto
        </p>
      </div>

      <!-- Tarjeta principal mejorada -->
      <div class="relative mt-12 md:mt-16 rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden">
        <!-- Elementos decorativos mejorados -->
        <div class="pointer-events-none absolute inset-0 opacity-20">
          <div class="absolute -left-8 -top-6 text-6xl sm:text-7xl lg:text-8xl animate-bounce">🐾</div>
          <div class="absolute right-8 top-8 text-5xl sm:text-6xl lg:text-7xl animate-pulse">❤️</div>
          <div class="absolute left-12 bottom-8 text-7xl sm:text-8xl lg:text-9xl animate-pulse">🏠</div>
          <div class="absolute right-12 bottom-4 text-4xl sm:text-5xl lg:text-6xl animate-bounce">🐕</div>
        </div>

        <!-- Contenido principal -->
        <div class="relative grid grid-cols-1 md:grid-cols-3 items-start text-white gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/30">
          
          <!-- Servicio 1: Adopción -->
          <div class="text-center px-4 md:px-8 lg:px-10">
            <div class="mb-4">
              <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                <span class="text-3xl sm:text-4xl">🏠</span>
              </div>
              <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Adopción</h3>
            </div>
            <p class="text-base sm:text-lg md:text-xl leading-relaxed">
              Encuentra a tu compañero perfecto.<br class="hidden md:block" />
              <span class="font-semibold text-yellow-200">Más de 500 familias felices</span> nos avalan.
            </p>
          </div>

          <!-- Servicio 2: Cuidado -->
          <div class="text-center px-4 md:px-8 lg:px-10">
            <div class="mb-4">
              <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                <span class="text-3xl sm:text-4xl">❤️</span>
              </div>
              <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Cuidado</h3>
            </div>
            <p class="text-base sm:text-lg md:text-xl leading-relaxed">
              Atención veterinaria completa y<br class="hidden md:block" />
              <span class="font-semibold text-yellow-200">amor incondicional</span> las 24 horas.
            </p>
          </div>

          <!-- Servicio 3: Educación -->
          <div class="text-center px-4 md:px-8 lg:px-10">
            <div class="mb-4">
              <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                <span class="text-3xl sm:text-4xl">🎓</span>
              </div>
              <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Educación</h3>
            </div>
            <p class="text-base sm:text-lg md:text-xl leading-relaxed">
              Talleres y consejos para el<br class="hidden md:block" />
              <span class="font-semibold text-yellow-200">mejor cuidado</span> de tu mascota.
            </p>
          </div>
        </div>

        <!-- Call to action dentro de la tarjeta -->
        <div class="mt-8 md:mt-12 text-center">
          <button class="bg-white text-amber-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg text-lg">
            Conoce Nuestros Servicios
          </button>
        </div>
      </div>

      <!-- Estadísticas adicionales -->
      <div class="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="text-center">
          <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 mb-2">500+</div>
          <div class="text-sm sm:text-base text-gray-600">Adopciones</div>
        </div>
        <div class="text-center">
          <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2">150+</div>
          <div class="text-sm sm:text-base text-gray-600">Rescates</div>
        </div>
        <div class="text-center">
          <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">200+</div>
          <div class="text-sm sm:text-base text-gray-600">Voluntarios</div>
        </div>
        <div class="text-center">
          <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-2">15</div>
          <div class="text-sm sm:text-base text-gray-600">Años</div>
        </div>
      </div>
    </div>
  </section>
</template>
