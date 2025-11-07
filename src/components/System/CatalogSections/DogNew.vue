<template>
    <div class="page">
        <section class="sectionDogNew">
            <div class="container">
                <div class="title">
                    <h3 class="bold">Agregar Perro</h3>
                </div>
                <div class="content">
                    <div class="form">
                        <div class="name double">
                            <label>Nombre</label>
                            <InputText fluid v-model="oDog.animalName" />
                        </div>
                        <div class="gender">
                            <label>Género</label>
                            <Select fluid :options="oListGenders" optionLabel="animalGenderDesc"
                                placeholder="Seleccionar" />
                        </div>
                        <div class="age">
                            <label>Edad</label>
                            <InputNumber fluid v-model="oDog.animalAge" />
                        </div>
                        <div class="size">
                            <label>Tamaño</label>
                            <Select fluid :options="oListSizes" optionLabel="animalSizeDesc"
                                placeholder="Seleccionar" />
                        </div>
                        <div class="weight">
                            <label>Peso</label>
                            <InputNumber fluid v-model="oDog.animalWeight" />
                        </div>
                        <div class="isVaccinate containerOptions">
                            <label>¿Está vacunado?</label>
                            <div class="options">
                                <div class="checkboxes">
                                    <Checkbox v-model="vaccinateYes" size="large" binary />
                                    <label>Si</label>
                                </div>
                                <div class="checkboxes">
                                    <Checkbox v-model="vaccinateNo" size="large" binary />
                                    <label>No</label>
                                </div>
                            </div>
                        </div>
                        <div class="isSterilized containerOptions">
                            <label>¿Está esterilizado?</label>
                            <div class="options">
                                <div class="checkboxes">
                                    <Checkbox v-model="sterilizeYes" size="large" binary />
                                    <label>Si</label>
                                </div>
                                <div class="checkboxes">
                                    <Checkbox v-model="sterilizeNo" size="large" binary />
                                    <label>No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="containerPhoto space">
                        <label>Adjuntar foto</label>
                        <FileUpload>
                            <template #empty>
                                <span>Drag and drop files to here to upload.</span>
                            </template>
                        </FileUpload>
                    </div>
                    <div class="containerDescription space">
                        <label>Descripción</label>
                        <Textarea fluid rows="5" v-model="oDog.animalDesc" />
                    </div>
                    <div class="containerHistory space">
                        <label>Historia</label>
                        <Textarea fluid rows="5" v-model="oDog.animalHistory" />
                    </div>
                    <div class="actions">
                        <Button label="Guardar" icon="pi pi-save" iconPos="right" class="success"
                            @click="createUpdateDog()" />
                        <Button label="Cancelar" icon="pi pi-times" iconPos="right" class="secondary"
                            @click="goBack()" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CommonService from '@/services/CommonService';
import CatalogService from '@/services/CatalogServices/CatalogService';

const router = useRouter();
const commonService = new CommonService();
const catalogService = new CatalogService();
const oListGenders = ref([]);
const oListSizes = ref([]);
const vaccinateYes = ref(false);
const vaccinateNo = ref(false);
const sterilizeYes = ref(false);
const sterilizeNo = ref(false);

const oDog = ref({});

// const oDog = {
//     animalName: '',
//     animalGenderId: null,
//     isVaccinate: false,
//     isSterilized: false
// }

onMounted(async () => {
    Initialize();
});

const Initialize = async () => {
    LoadGenders();
    LoadSizes();
    LoadDog();
};

const LoadGenders = async () => {
    const response = await commonService.GetGendersService();
    if (response.status === 200) {
        oListGenders.value = response.data;
        // debugger;
    }

};

const LoadSizes = async () => {
    const response = await commonService.GetSizesService();
    if (response.status === 200) {
        oListSizes.value = response.data;
        // debugger;
    }
};

const LoadDog = async () => {
    const id = localStorage.getItem('idDog');

    const response = await catalogService.GetDogService(id);
    if (response.status === 200) {
        oDog.value = response.data;
        // debugger;
    }
};

const createUpdateDog = async () => {
    // Lógica para crear o actualizar el perro

};

const goBack = () => {
    localStorage.removeItem('idDog');
    router.push({ path: '/admin/catalogo' });
};

</script>