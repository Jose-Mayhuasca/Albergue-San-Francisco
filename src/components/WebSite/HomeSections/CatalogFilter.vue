<template>
  <div class="space-y-6">
    <!-- Tamaño -->
    <div>
      <label class="font-semibold block mb-2 text-gray-700">Tamaño</label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="option in tamaños"
          :key="option"
          :class="[
            'px-3 py-2 rounded-lg border font-medium transition',
            localFilters.tamaño === option
              ? 'bg-amber-500 text-white border-amber-400'
              : 'bg-white text-gray-700 border-gray-300 hover:border-amber-400'
          ]"
          @click="setFilter('tamaño', option)"
        >
          {{ option }}
        </button>
      </div>
    </div>

    <!-- Edad -->
    <div>
      <label class="font-semibold block mb-2 text-gray-700">Edad</label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="option in edades"
          :key="option.label"
          :class="[
            'px-3 py-2 rounded-lg border font-medium transition',
            localFilters.edad === option.value
              ? 'bg-amber-500 text-white border-amber-400'
              : 'bg-white text-gray-700 border-gray-300 hover:border-amber-400'
          ]"
          @click="setFilter('edad', option.value)"
        >
          {{ option.label }}
        </button>
      </div>
    </div>

    <!-- Género -->
    <div>
      <label class="font-semibold block mb-2 text-gray-700">Género</label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="option in generos"
          :key="option"
          :class="[
            'px-3 py-2 rounded-lg border font-medium transition',
            localFilters.genero === option
              ? 'bg-amber-500 text-white border-amber-400'
              : 'bg-white text-gray-700 border-gray-300 hover:border-amber-400'
          ]"
          @click="setFilter('genero', option)"
        >
          {{ option }}
        </button>
      </div>
    </div>

    <!-- Botón limpiar -->
    <button
      @click="clearFilters"
      class="w-full bg-gray-100 text-gray-700 rounded-lg py-2 font-semibold hover:bg-gray-200 transition"
    >
      Limpiar filtros
    </button>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({ filters: Object })
const emit = defineEmits(['updateFilters'])

const localFilters = reactive({ ...props.filters })

const tamaños = ['Pequeño', 'Mediano', 'Grande']
const edades = [
  { label: 'Cachorro', value: 'Cachorro' },
  { label: 'Joven', value: 'Joven' },
  { label: 'Adulto', value: 'Adulto' }
]
const generos = ['Macho', 'Hembra']

const setFilter = (key, value) => {
  localFilters[key] = localFilters[key] === value ? '' : value
  emit('updateFilters', { ...localFilters })
}

const clearFilters = () => {
  localFilters.tamaño = ''
  localFilters.edad = ''
  localFilters.genero = ''
  emit('updateFilters', { ...localFilters })
}

watch(() => props.filters, newVal => Object.assign(localFilters, newVal))
</script>
