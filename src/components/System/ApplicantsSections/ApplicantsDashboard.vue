<template>
    <section class="sectionApplicantsDashboard">
        <div class="container">
            <Button label="Solicitantes Pre - Aprobados" icon="pi pi-eye" icon-pos="right" class="thirty button-header"
                fluid @click="router.push('solicitudes/pre-aprobadas')" />
            <Card class="cardStat primary">
                <template #title>
                    <i v-show="bCargando" class="pi pi-spin pi-spinner" style="font-size: 5rem" />
                    <h1>{{ oPendingCount }}</h1>
                </template>
                <template #content>
                    <h6>Solicitudes Pendientes</h6>
                </template>
            </Card>
            <!-- <div class="containerNavigation">
                <IconField>
                    <InputIcon class="pi pi-search" />
                    <InputText v-model="searchQuery" placeholder="Buscar por nombre" class="searchInput" />
                </IconField>
                <Button class="sortButton" icon="pi pi-sort-alpha-down" />
                <Button class="filterButton" icon="pi pi-sliders-h" />
            </div> -->
            <div class="containerNavigation">
                <IconField>
                    <InputIcon class="pi pi-search" />
                    <InputText v-model="searchQuery" placeholder="Buscar por nombre" class="searchInput" />
                </IconField>
                <Button class="sortButton" :icon="sortIcon" @click="toggleSort" />
                <Button class="filterButton" icon="pi pi-sliders-h" @click="visibleFilters = true" />
                <Dialog v-model:visible="visibleFilters" modal header="Filtros" class="filterDialog">
                    <div class=" grp1">
                        <div class="size standardContainer">
                            <label for="">Tamaño</label>
                            <div class="sizes optionsContainer">
                                <div class="option">
                                    <RadioButton v-model="selectedSize" inputId="small" name="size" value="1" />
                                    <label>Pequeño</label>
                                </div>
                                <div class="option">
                                    <RadioButton v-model="selectedSize" inputId="medium" name="size" value="2" />
                                    <label>Mediano</label>
                                </div>
                                <div class="option">
                                    <RadioButton v-model="selectedSize" inputId="large" name="size" value="3" />
                                    <label>Grande</label>
                                </div>
                            </div>
                        </div>
                        <div class="gender standardContainer">
                            <label for="">Genero</label>
                            <div class="genders optionsContainer">
                                <div class="option">
                                    <RadioButton v-model="selectedGender" inputId="male" name="gender" value="1" />
                                    <label>Macho</label>
                                </div>
                                <div class="option">
                                    <RadioButton v-model="selectedGender" inputId="female" name="gender" value="2" />
                                    <label>Hembra</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="age standardContainer">
                        <label for="">Edad</label>
                        <div class="ages optionsContainer">
                            <div class="option">
                                <RadioButton v-model="selectedAge" inputId="puppy" name="age" value="puppy" />
                                <label>Cachorro (< 1 año)</label>
                            </div>
                            <div class="option">
                                <RadioButton v-model="selectedAge" inputId="young" name="age" value="young" />
                                <label>Joven (1 - 3 años)</label>
                            </div>
                            <div class="option">
                                <RadioButton v-model="selectedAge" inputId="adult" name="age" value="adult" />
                                <label>Adulto (+3 años)</label>
                            </div>
                        </div>
                    </div>
                    <div class="filterActions">
                        <Button label="Aplicar" @click="visibleFilters = false" class="primary" fluid
                            icon="pi pi-check" />
                        <Button label="Limpiar" severity="secondary" text @click="clearFilters" class="secondary" fluid
                            icon="pi pi-trash" />
                    </div>
                </Dialog>
            </div>
            <div class="containerCards" v-show="bCargando">
                <Skeleton v-for="index in 8" :key="index" width="100%" height="auto" border-radius="12px"
                    :style="{ aspectRatio: '1/1' }" />
            </div>
            <div class="containerCards" v-show="!bCargando">
                <Card v-for="dog in filteredDogs" :key="dog.idRefAnimals" class="cardCatalog" :style="{
                    backgroundImage: `url(${dog.animalImage})`
                }" @click="GoListApplicants(dog.idRefAnimals, dog.animalName)">
                    <template #header>
                        <Badge :value="dog.countApplicants" size="xlarge" severity="danger" />
                    </template>
                    <template #title>
                        <p class="regularSize title">{{ dog.animalName }}</p>
                    </template>
                </Card>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import CommonService from '@/services/CommonService'
import DogCatalogService from '@/services/ApplicantServices/DogCatalogService'

const commonService = new CommonService()
const dogCatalogService = new DogCatalogService()
const router = useRouter()
const bCargando = ref(false)
const oPendingCount = ref()
const oListDogCatalog = ref([])
const searchQuery = ref('')
const sortOrder = ref('alphabetic') // 'alphabetic', 'age-asc', 'age-desc'
const visibleFilters = ref(false);


// Refs para los filtros
const selectedSize = ref(null)
const selectedGender = ref(null)
const selectedAge = ref(null)

// Computed property para obtener el icono según el estado de ordenamiento
const sortIcon = computed(() => {
    switch (sortOrder.value) {
        case 'alphabetic':
            return 'pi pi-sort-alpha-down' // A-Z por nombre
        case 'age-asc':
            return 'pi pi-sort-up-fill' // Ascendente por edad
        case 'age-desc':
            return 'pi pi-sort-down-fill' // Descendente por edad
        default:
            return 'pi pi-sort-alpha-down'
    }
})

// Función para alternar el ordenamiento
const toggleSort = () => {
    if (sortOrder.value === 'alphabetic') {
        sortOrder.value = 'age-asc'
    } else if (sortOrder.value === 'age-asc') {
        sortOrder.value = 'age-desc'
    } else {
        sortOrder.value = 'alphabetic'
    }
}

onMounted(async () => {
    await Initialize();
});

const Initialize = async () => {
    LoadPendingCount();
    await LoadDogCatalog();
}

const LoadPendingCount = async () => {
    bCargando.value = true;
    const response = await commonService.GetPendingCountService();

    if (response.status === 200) {
        oPendingCount.value = response.data.countPending;
        bCargando.value = false;
    }
}

const LoadDogCatalog = async () => {
    bCargando.value = true;
    const response = await dogCatalogService.GetDogCatalogService();

    if (response.status == 200) {
        oListDogCatalog.value = response.data;
        bCargando.value = false;
    }
}

// Computed property para filtrar y ordenar perros
const filteredDogs = computed(() => {
    // Primero filtramos por nombre
    let result = oListDogCatalog.value

    if (searchQuery.value) {
        result = result.filter(dog =>
            dog.animalName.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    }

    // Aplicar filtro por tamaño
    if (selectedSize.value) {
        result = result.filter(dog => dog.idAnimalSize == selectedSize.value)
    }

    // Aplicar filtro por género
    if (selectedGender.value) {
        result = result.filter(dog => dog.idAnimalGender == selectedGender.value)
    }

    // Aplicar filtro por edad
    if (selectedAge.value) {
        result = result.filter(dog => {
            const age = dog.animalAge
            switch (selectedAge.value) {
                case 'puppy':
                    return age < 1
                case 'young':
                    return age >= 1 && age <= 3
                case 'adult':
                    return age > 3
                default:
                    return true
            }
        })
    }

    // Luego ordenamos según el estado actual
    if (sortOrder.value === 'alphabetic') {
        // Orden alfabético A-Z por nombre
        result = [...result].sort((a, b) =>
            a.animalName.localeCompare(b.animalName)
        )
    } else if (sortOrder.value === 'age-asc') {
        // Orden ascendente por edad (menor a mayor)
        result = [...result].sort((a, b) => a.animalAge - b.animalAge)
    } else if (sortOrder.value === 'age-desc') {
        // Orden descendente por edad (mayor a menor)
        result = [...result].sort((a, b) => b.animalAge - a.animalAge)
    }

    return result
})

const clearFilters = () => {
    selectedSize.value = null
    selectedGender.value = null
    selectedAge.value = null
}

const GoListApplicants = (idRefAnimals, animalName) => {
    localStorage.setItem('idDog', idRefAnimals);
    localStorage.setItem('animalName', animalName);
    router.push({ path: `solicitudes/${animalName}` });
    console.log(idRefAnimals);
};

</script>