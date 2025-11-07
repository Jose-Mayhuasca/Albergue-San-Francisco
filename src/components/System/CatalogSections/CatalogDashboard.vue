<template>
    <section class="sectionCatalog">
        <div class="container">
            <Button label="Nuevo" icon="pi pi-plus" class="" fluid @click="openNewDog()" />
            <div class="containerNavigation">
                <IconField>
                    <InputIcon class="pi pi-search" />
                    <InputText placeholder="Buscar por nombre" class="searchInput" />
                </IconField>
                <Button class="sortButton" icon="pi pi-sort-alpha-down" />
                <Button class="filterButton" icon="pi pi-sliders-h" />
            </div>
            <div class="containerCards" v-show="!bCargando">
                <Card v-for="dog in oListCatalog" :key="dog.idRefAnimals" class="cardCatalog" :style="{
                    backgroundImage: `url(${dog.animalImage})`
                }" @click="editDog(dog.idRefAnimals)">
                    <template #title>
                        <p class="regularSize title">{{ dog.animalName }}</p>
                    </template>
                </Card>
            </div>
            <div class="containerCards" v-show="bCargando">
                <Skeleton v-for="index in 10" :key="index" fluid height="auto" border-radius="12px"
                    class="cardCatalog" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CatalogService from '@/services/CatalogServices/CatalogService'
import { useToast } from 'primevue'

const router = useRouter()
const catalogService = new CatalogService()
const oListCatalog = ref([])
const toast = useToast()
const bCargando = ref(false)

onMounted(async () => {
    await Initialize();
});

async function Initialize() {
    LoadCatalog();
}

async function LoadCatalog() {
    bCargando.value = true
    const response = await catalogService.GetCatalogService()
    // debugger;
    if (response.status === 200) {
        oListCatalog.value = response.data
        bCargando.value = false
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Error al cargar el catálogo', life: 3000 });
    }
}

const openNewDog = () => {
    localStorage.removeItem('idDog');
    router.push(`catalogo/nuevo`)
}

const editDog = (id) => {
    localStorage.setItem('idDog', id)
    router.push(`catalogo/editar/${id}`)
}

</script>