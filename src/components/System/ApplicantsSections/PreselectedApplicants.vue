<template>
    <div class="pageSystem">
        <section class="sectionPreselectedApplicants">
            <div class="container">
                <div class="title">
                    <h5>Solicitantes Pre-Aprobados</h5>
                </div>
                <div class="containerApplicants">
                    <Skeleton v-show="bcargando" v-for="n in 5" :key="n" fluid height="70px" border-radius="12px"
                        class="mb-1.5" />
                    <Card v-for="applicant in oListApplicantsPreApproved" :key="applicant.idUserApp"
                        :class="['cardApplicant', getStateClass(applicant.idStatusApp)]"
                        @click="GoApplicantDetail(applicant.idUserApp)">
                        <template #title>
                            <span class="regularSize">{{ applicant.userName + ' ' + applicant.userLastName }}</span>
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
        </section>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import ApplicantPreApprovedService from '@/services/ApplicantServices/ApplicantPreApprovedService.js'

const router = useRouter()
const bcargando = ref(false)
const applicantPreApprovedService = new ApplicantPreApprovedService()
const oListApplicantsPreApproved = ref([])
const id = ref();

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

// items para las cards
const applicants = ref([
    {
        id: 1,
        fullName: 'José Mayhuasca',
        dateApply: '01/09/2025',
        state: 2
    },
    {
        id: 2,
        fullName: 'Gian Mejia',
        dateApply: '02/09/2025',
        state: 2
    },
    {
        id: 3,
        fullName: 'Leonardo Valenzuela',
        dateApply: '03/09/2025',
        state: 2
    },
    {
        id: 4,
        fullName: 'Rafael Neyra',
        dateApply: '04/09/2025',
        state: 2
    },
    {
        id: 5,
        fullName: 'Eisenhower Gonzales',
        dateApply: '05/09/2025',
        state: 2
    }
])

onMounted(async () => {
    Initialize();
})

const Initialize = async () => {
    await LoadApplicantsPreApproved();
}

const LoadApplicantsPreApproved = async () => {
    bcargando.value = true;
    const response = await applicantPreApprovedService.GetApplicantPreApprovedService();
    if (response.status === 200) {
        oListApplicantsPreApproved.value = response.data;
        bcargando.value = false;
    } else {
        console.error('Error al cargar los solicitantes pre-aprobados');
    }
};

const formatDate = (originalDate) => {
    const formatedDate = new Date(originalDate).toLocaleString('es-PE', {
        dateStyle: 'medium',
        timeStyle: 'short'
    });
    return formatedDate;
};

const GoApplicantDetail = (idUserApp) => {
    localStorage.setItem('idApplicantPreApproved', idUserApp);
    router.push({ path: `pre-aprobadas/detalle/${idUserApp}` });
};

</script>