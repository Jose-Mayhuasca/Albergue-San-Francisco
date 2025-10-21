<template>
    <div class="page">
        <section class="sectionPreselectedApplicants">
            <div class="container">
                <div class="title">
                    <h5>Solicitantes Pre-Aprobados</h5>
                </div>
                <div class="containerApplicants">
                    <Card v-for="applicant in applicants" :key="applicant.id"
                        :class="['cardApplicant', getStateClass(applicant.state)]"
                        @click="router.push('pre-aprobadas/detalle/id')">
                        <template #title>
                            <span class="regularSize">{{ applicant.fullName }}</span>
                        </template>
                        <template #subtitle>
                            <span class="smallSize">{{ applicant.dateApply }}</span>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Función para obtener la clase CSS según el estado
const getStateClass = (state) => {
    switch (state) {
        case 1:
            return 'state-pending'    // Pendiente - Amarillo
        case 2:
            return 'state-approved'   // Aprobado - Verde
        case 3:
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

</script>