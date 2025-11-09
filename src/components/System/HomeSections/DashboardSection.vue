<template>
    <section class="sectionDashboard">
        <div class="container">
            <div class="title">
                <h4>General</h4>
            </div>
            <div class="containerStats">
                <Card class="double">
                    <template #title>
                        <h6>Perros en el Albergue</h6>
                    </template>
                    <template #content>
                        <i v-show="bCargando" class="pi pi-spin pi-spinner" style="font-size: 5rem" />
                        <h1>{{ oListCountAnimal.countAnimalsGeneral }}</h1>
                    </template>
                </Card>
                <Card class="double primary">
                    <template #title>
                        <h6>Perros Adoptados</h6>
                    </template>
                    <template #content>
                        <i v-show="bCargando" class="pi pi-spin pi-spinner" style="font-size: 5rem" />
                        <h1>{{ oListCountAnimal.countAnimalAdopted }}</h1>
                    </template>
                </Card>
                <Card>
                    <template #title>
                        <i v-show="bCargando" class="pi pi-spin pi-spinner" style="font-size: 5rem" />
                        <h1>{{ oListCountAnimal.countAnimalsPerYear }}</h1>
                    </template>
                    <template #content>
                        <h6>este año</h6>
                    </template>
                </Card>
                <Card class="thirty">
                    <template #title>
                        <i v-show="bCargando" class="pi pi-spin pi-spinner" style="font-size: 5rem" />
                        <h1>{{ oListCountAnimal.countAnimalsPerMonth }}</h1>
                    </template>
                    <template #content>
                        <h6>este mes</h6>
                    </template>
                </Card>
            </div>
            <div class="containerQuickActions">
                <div class="title">
                    <h4>Acciones Rápidas</h4>
                </div>
                <div class="actions">
                    <Button label="Añadir Perro" icon="pi pi-plus" @click="goCatalog()" />
                    <Button label="Ver Solicitudes" icon="pi pi-eye" @click="goApplicants()" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import CommonService from '@/services/CommonService';
import { useRouter } from 'vue-router';

const router = useRouter();
const commonService = new CommonService()
const bCargando = ref(false)
const oListCountAnimal = ref({})

onMounted(() => {
    Initialize();
});

const Initialize = () => {
    LoadDashboardData();
}

const LoadDashboardData = async () => {
    bCargando.value = true;
    const response = await commonService.GetGeneralDataService();
    if (response.status === 200) {
        oListCountAnimal.value = response.data;
        bCargando.value = false;
    }
}

const goCatalog = () => {
    router.push({ path: `admin/catalogo` });
}

const goApplicants = () => {
    router.push({ path: `admin/solicitudes` });
}

</script>