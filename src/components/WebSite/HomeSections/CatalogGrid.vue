<template>
  <div>
    <div v-if="(pets || []).length === 0" class="text-center text-gray-500 mt-10">
      No se encontraron resultados 🐶
    </div>

    <div v-else>
      <!-- Grid de cards (paginadas) -->
      <div class="catalog-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CatalogCard v-for="pet in pagedPets" :key="pet.id" :pet="pet" />
      </div>

      <!-- Paginación numérica -->
      <nav v-if="totalPages > 1" class="mt-6 flex items-center justify-center">
        <button
          class="px-3 py-1 rounded-l-md border mr-2"
          :class="{'bg-white text-gray-700 border-gray-300 hover:bg-gray-100': currentPage>1, 'opacity-50 cursor-not-allowed': currentPage<=1}"
          @click="prevPage"
          :disabled="currentPage <= 1"
        >
          ‹
        </button>

        <div class="flex gap-2">
          <button
            v-for="n in pageNumbers"
            :key="n"
            @click="goToPage(n)"
            class="px-3 py-1 border rounded-md"
            :class="n === currentPage ? 'bg-amber-500 text-white border-amber-400' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'"
          >
            {{ n }}
          </button>
        </div>

        <button
          class="px-3 py-1 rounded-r-md border ml-2"
          :class="{'bg-white text-gray-700 border-gray-300 hover:bg-gray-100': currentPage<totalPages, 'opacity-50 cursor-not-allowed': currentPage>=totalPages}"
          @click="nextPage"
          :disabled="currentPage >= totalPages"
        >
          ›
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import CatalogCard from './CatalogCard.vue'

const props = defineProps({ pets: { type: Array, default: () => [] } })

// Configuración de paginación
const perPage = 9
const currentPage = ref(1)

const totalPages = computed(() => Math.max(1, Math.ceil((props.pets?.length || 0) / perPage)))

// Arreglo de números de página [1..totalPages]
const pageNumbers = computed(() => Array.from({ length: totalPages.value }, (_, i) => i + 1))

const pagedPets = computed(() => {
  const list = props.pets || []
  const start = (currentPage.value - 1) * perPage
  return list.slice(start, start + perPage)
})

// Resetear a página 1 cuando cambian las pets/filtros
watch(() => props.pets, () => { currentPage.value = 1 })

const goToPage = (p) => {
  if (p >= 1 && p <= totalPages.value) currentPage.value = p
}
const prevPage = () => { if (currentPage.value > 1) currentPage.value-- }
const nextPage = () => { if (currentPage.value < totalPages.value) currentPage.value++ }
</script>
