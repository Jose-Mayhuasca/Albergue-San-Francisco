<template>
    <section class="sectionCatalog">
        <div class="container">
            <Button label="Nuevo" icon="pi pi-plus" class="" fluid @click="openNewDog()" />
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
            <div class=" containerCards" v-show="!bCargando">
                <Card v-for="dog in filteredDogs" :key="dog.idRefAnimals" class="cardCatalog" :style="{
                    backgroundImage: `url(${dog.animalImage})`
                }" @click="openActionsDialog(dog.idRefAnimals, dog.animalName)">
                    <template #title>
                        <p class="regularSize title">{{ dog.animalName }}</p>
                    </template>
                </Card>
            </div>
            <div class="containerCards" v-show="bCargando">
                <Skeleton v-for="index in 10" :key="index" fluid height="auto" border-radius="12px"
                    class="cardCatalog" />
            </div>

            <!-- Dialog de acciones (Editar o Eliminar) -->
            <Dialog v-model:visible="visibleActions" modal header="Acciones" class="actionsDialog">
                <p>Acciones que puedes realizar:</p>
                <div class="optionsContainer">
                    <Button label="Editar datos" @click="confirmEdit" class="primary" fluid icon="pi pi-pencil" />
                    <Button label="Eliminar del catálogo" severity="danger" @click="openDeleteConfirm" fluid
                        icon="pi pi-trash" class="danger" />
                </div>
            </Dialog>

            <!-- Dialog de confirmación de eliminación -->
            <Dialog v-model:visible="visibleDeleteConfirm" modal header="Confirmar eliminación" class="confirmDialog">
                <p>¿Estás segura de que deseas eliminarlo del catálogo?</p>
                <p>Esta acción no se puede deshacer.</p>
                <!-- <div class="confirmActions"> -->
                <Button label="Eliminar" severity="danger" @click="confirmDelete" icon="pi pi-trash" fluid
                    class="danger" />
                <Button label="Cancelar" severity="secondary" text @click="visibleDeleteConfirm = false"
                    icon="pi pi-times" fluid class="secondary" />
                <!-- </div> -->
            </Dialog>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue'
import CatalogService from '@/services/CatalogServices/CatalogService'

const router = useRouter()
const catalogService = new CatalogService()
const oListCatalog = ref([])
const toast = useToast()
const bCargando = ref(false)
const searchQuery = ref('')
const sortOrder = ref('alphabetic') // 'alphabetic', 'age-asc', 'age-desc'
const visibleFilters = ref(false);
const visibleActions = ref(false);
const visibleDeleteConfirm = ref(false);
const selectedDogId = ref(null);
const selectedDogName = ref(null);

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

async function Initialize() {
    LoadCatalog();
}

async function LoadCatalog() {
    bCargando.value = true
    const response = await catalogService.GetCatalogService()
    if (response.status === 200) {
        oListCatalog.value = response.data
        bCargando.value = false
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Error al cargar el catálogo', life: 3000 });
    }
}

// Computed property para filtrar y ordenar perros
const filteredDogs = computed(() => {
    // Primero filtramos por nombre
    let result = oListCatalog.value

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

const openNewDog = () => {
    localStorage.removeItem('idDog');
    router.push(`catalogo/nuevo`)
}

const openActionsDialog = (id, name) => {
    selectedDogId.value = id
    selectedDogName.value = name
    visibleActions.value = true
}

const confirmEdit = () => {
    visibleActions.value = false
    editDog(selectedDogId.value, selectedDogName.value)
}

const openDeleteConfirm = () => {
    visibleActions.value = false
    visibleDeleteConfirm.value = true
}

const confirmDelete = async () => {
    const request = {
        idRefAnimals: selectedDogId.value
    }

    try {
        const response = await catalogService.UpdateDeleteDogCatalogService(request)

        if (response.status === 200) {
            toast.add({
                severity: 'success',
                summary: 'Operación exitosa',
                detail: 'Perro eliminado del catálogo correctamente',
                life: 2000
            });
            visibleDeleteConfirm.value = false
            selectedDogId.value = null
            // Recargar el catálogo
            await LoadCatalog()
        } else {
            toast.add({
                severity: 'error',
                summary: 'Operación fallida',
                detail: 'No se pudo eliminar el perro del catálogo',
                life: 2000
            });
        }
    } catch (error) {
        toast.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Ocurrió un error al eliminar el perro',
            life: 2000
        });
    }
}

const editDog = (id, name) => {
    localStorage.setItem('idDog', id)
    router.push(`catalogo/editar/${name}`)
}

const clearFilters = () => {
    selectedSize.value = null
    selectedGender.value = null
    selectedAge.value = null
}

</script>