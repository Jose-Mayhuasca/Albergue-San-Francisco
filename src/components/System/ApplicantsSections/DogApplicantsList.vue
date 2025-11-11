<template>
    <div class="pageSystem">
        <section class="sectionDogApplicantsList">
            <div class="container" v-show="bCargando">
                <div class="title">
                    <Skeleton width="50%" height="58.52px" />
                    <!-- <h3 class="bold">{{ oDog.animalName }}</h3> -->
                </div>
                <div class="content">
                    <!-- <Card class="image" :style="{
                        backgroundImage: `url(${oDog.animalImage})`
                    }" /> -->
                    <Skeleton class="image" fluid height="auto" border-radius="12px" />
                    <div class="containerListApplicants">
                        <div class="subtitle">
                            <h5>Solicitantes</h5>
                        </div>
                        <div class="containerApplicants" v-for="cards in 8" :key="cards">
                            <Skeleton fluid height="78px" border-radius="12px" />
                            <!-- <Card v-for="applicant in oListApplicants" :key="applicant.idUserApp"
                                :class="['cardApplicant', getStateClass(applicant.idStatusApp)]"
                                @click="GoApplicantDetail(applicant.idUserApp)">
                                <template #title>
                                    <span class="regularSize">{{ applicant.userName + " " +
                                        applicant.userLastName }}</span>
                                </template>
<template #subtitle>
                                    <span class="smallSize">{{ formatDate(applicant.creationDay) }}</span>
                                </template>
<template #content>
                                    <i class="pi pi-eye icon"></i>
                                </template>
</Card> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="container" v-show="!bCargando">
                <div class="title">
                    <h3 class="bold">{{ oDog.animalName }}</h3>
                </div>
                <div class="content">
                    <Card class="image" :style="{
                        backgroundImage: `url(${oDog.animalImage})`
                    }" />
                    <div class="containerListApplicants">
                        <div class="subtitle">
                            <h5>Solicitantes</h5>
                        </div>
                        <div class="containerApplicants">
                            <Card v-for="applicant in oListApplicants" :key="applicant.idUserApp"
                                :class="['cardApplicant', getStateClass(applicant.idStatusApp)]"
                                @click="GoApplicantDetail(applicant.idUserApp)">
                                <template #title>
                                    <span class="regularSize">{{ applicant.userName + " " +
                                        applicant.userLastName }}</span>
                                </template>
                                <template #subtitle>
                                    <span class="smallSize">{{ formatDate(applicant.creationDay) }}</span>
                                </template>
                                <template #content>
                                    <i class="pi pi-eye icon"></i>
                                </template>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import GetDogService from '@/services/ApplicantServices/DogCatalogService'
import ApplicantService from '@/services/ApplicantServices/ApplicantService'

const router = useRouter()
const getDogService = new GetDogService()
const applicantService = new ApplicantService()
const id = localStorage.getItem('idDog')
const oDog = ref({})
const oListApplicants = ref([])
const bCargando = ref(false)

// Función para obtener la clase CSS según el estado
const getStateClass = (state) => {
    switch (state) {
        case 1:
            return 'state-pending'    // Pendiente - Amarillo
        case 2:
            return 'state-approved'   // Aprobado - Verde
        case 3:
            return 'state-pre-approved'   // Pre-Aprobado - Verde
        case 4:
            return 'state-rejected'   // Rechazado - Rojo
        default:
            return 'state-pending'
    }
}

onMounted(async () => {
    Initialize();
});

const Initialize = async () => {
    bCargando.value = true;
    await LoadDogData();
    await LoadListApplicants();
    bCargando.value = false;
}

const LoadDogData = async () => {
    const response = await getDogService.GetDogService(id);
    // debugger;
    if (response.status === 200) {
        oDog.value = response.data;
    }
}

const LoadListApplicants = async () => {
    const response = await applicantService.GetListApplicantsService(id);
    // debugger;
    if (response.status === 200) {
        oListApplicants.value = response.data;
    }
}

const formatDate = (originalDate) => {
    const formatedDate = new Date(originalDate).toLocaleString('es-PE', {
        dateStyle: 'medium',
        timeStyle: 'short'
    });
    return formatedDate;
};

const GoApplicantDetail = (idUserApp) => {
    localStorage.setItem('idApplicant', idUserApp);
    router.push({ path: `${id}/detalle/${idUserApp}` });
};

</script>