<template>
  <section class="py-14 md:py-20 font-sans">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start px-6">
      <!-- LEFT: hero image with big title -->
      <figure class="relative rounded-[30px] overflow-hidden lg:col-span-7 h-[300px] md:h-[400px] lg:h-[500px] shadow-md">
        <img
          src="@/assets/img/albergue1.png"
          alt="City skyline"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <!-- subtle fog/overlay to match reference -->
        <div class="absolute inset-0 "></div>

        <!-- Big headline centered -->
        <figcaption
          class="absolute inset-0 flex items-center justify-center text-center px-6"
        >
          <h1
            class="font-extrabold leading-[0.85] tracking-[-0.02em] text-white drop-shadow-sm
                   text-4xl md:text-5xl lg:text-6xl"
          >
            ¿Quieres<br class="hidden md:block" /> apoyar?
          </h1>
        </figcaption>
      </figure>

      <!-- RIGHT: copy -->
      <aside class="lg:col-span-5">
        <h2 class="leading-[0.9] tracking-tight">
          <span class="block font-extrabold text-neutral-900 text-4xl md:text-5xl">
            brand that embodies
          </span>
          <span class="block font-extrabold text-neutral-500 text-4xl md:text-5xl mt-1">
            understated elegance
          </span>
        </h2>

        <p class="mt-6 text-neutral-600 text-lg md:text-xl leading-8">
          Borcelle is a brand that embodies understated elegance. Our philosophy
          combines timeless minimalism with subtle confidence, empowering
          wearers to feel sophisticated in every situation.
        </p>
      </aside>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
.font-sans { font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
</style>
