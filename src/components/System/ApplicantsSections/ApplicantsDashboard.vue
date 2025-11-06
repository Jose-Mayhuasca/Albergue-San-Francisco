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
            <div class="containerNavigation">
                <IconField>
                    <InputIcon class="pi pi-search" />
                    <InputText placeholder="Buscar por nombre" class="searchInput" />
                </IconField>
                <Button class="sortButton" icon="pi pi-sort-alpha-down" />
                <Button class="filterButton" icon="pi pi-sliders-h" />
            </div>
            <div class="containerCards" v-show="bCargando">
                <Skeleton width="100%" height="auto" border-radius="12px" :style="{ aspectRatio: '1/1' }" />
                <Skeleton width="100%" height="auto" border-radius="12px" :style="{ aspectRatio: '1/1' }" />
                <Skeleton width="100%" height="auto" border-radius="12px" :style="{ aspectRatio: '1/1' }" />
                <Skeleton width="100%" height="auto" border-radius="12px" :style="{ aspectRatio: '1/1' }" />
                <Skeleton width="100%" height="auto" border-radius="12px" :style="{ aspectRatio: '1/1' }" />
                <Skeleton width="100%" height="auto" border-radius="12px" :style="{ aspectRatio: '1/1' }" />
                <Skeleton width="100%" height="auto" border-radius="12px" :style="{ aspectRatio: '1/1' }" />
                <Skeleton width="100%" height="auto" border-radius="12px" :style="{ aspectRatio: '1/1' }" />
            </div>
            <div class="containerCards" v-show="!bCargando">
                <Card v-for="dog in oListDogCatalog" :key="dog.idRefAnimals" class="cardCatalog" :style="{
                    backgroundImage: `url(${dog.animalImage})`
                }" @click="GoListApplicants(dog.idRefAnimals)">
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
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import CommonService from '@/services/CommonService'
import DogCatalogService from '@/services/ApplicantServices/DogCatalogService'

const commonService = new CommonService()
const dogCatalogService = new DogCatalogService()
const router = useRouter()
const bCargando = ref(false)
const oPendingCount = ref()
const oListDogCatalog = ref([])

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

const GoListApplicants = (idRefAnimals) => {
    localStorage.setItem('idDog', idRefAnimals);
    router.push({ path: `solicitudes/${idRefAnimals}` });
};

// items para las cards
// const dogs = ref([
//     {
//         id: 1,
//         name: 'Max',
//         badgeValue: 6,
//         imageUrl: 'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg'
//     },
//     {
//         id: 2,
//         name: 'Buddy',
//         badgeValue: 5,
//         imageUrl: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg'
//     },
//     {
//         id: 3,
//         name: 'Lucy',
//         badgeValue: 4,
//         imageUrl: 'https://images.pexels.com/photos/34284563/pexels-photo-34284563.jpeg'
//     },
//     {
//         id: 4,
//         name: 'Bruce',
//         badgeValue: 1,
//         imageUrl: 'https://images.pexels.com/photos/34265055/pexels-photo-34265055.jpeg'
//     },
//     {
//         id: 5,
//         name: 'Rocky',
//         badgeValue: 1,
//         imageUrl: 'https://images.pexels.com/photos/34265027/pexels-photo-34265027.jpeg'
//     }
// ])

</script>


//* TODO:
6. - Revisar la re dirección del header.
7. - Habilitar la barra de búsqueda, método de ordenamiento y filtros.

*/