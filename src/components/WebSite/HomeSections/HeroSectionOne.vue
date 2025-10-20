<template>
  <div class="relative h-screen overflow-hidden flex items-center justify-between p-12">
    <!-- Imagen de fondo -->
    <div class="absolute inset-0 h-full w-full z-0">
      <img 
        src="@/assets/img/fondo_dog.png" 
        alt="Fondo" 
        class="w-full h-full object-cover " 
      />
    </div>

    <!-- Contenido de texto -->
    <div class="relative z-10 text-black w-1/2 ml-40 pr-40">
      <h1 class="text-xl ">ADOPTAR CAMBIA VIDAS</h1>
      <h2 class="text-6xl font-semibold mt-2">HAZ FELIZ A UN NUEVO AMIGO</h2>
      <p class="mt-4 text-2xl">Tú puedes ser su héroe y llenar tu vida de amor incondicional.</p>
      <button class="mt-6  bg-[color:var(--color-primary)] text-gray-800 px-6 py-2 rounded-full hover:bg-amber-500 transition">
        CONÓCELOS
      </button>
    </div>

    <!-- Imagen del perro -->
    <div class="relative z-10 w-1/2 flex justify-center ">
      <img 
        src="@/assets/img/happy_dog.png" 
        alt="Perro" 
        class="w-auto h-[600px] object-contain mt-10 mr-60" 
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
</style>
