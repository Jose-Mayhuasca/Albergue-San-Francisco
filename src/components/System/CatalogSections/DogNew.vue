<template>
    <div class="pageSystem">
        <section class="sectionDogNew">
            <div class="container">
                <!-- <div class="title">
                    <h3 class="bold">Agregar Perro</h3>
                </div> -->
                <div class="content">
                    <div class="form">
                        <div class="name double">
                            <label>Nombre</label>
                            <InputText fluid v-model="oDog.animalName" />
                        </div>
                        <div class="gender">
                            <label>Género</label>
                            <Select fluid :options="oListGenders" optionLabel="animalGenderDesc"
                                placeholder="Seleccionar" v-model="oDog.idAnimalGender" optionValue="idAnimalGender" />
                        </div>
                        <div class="age">
                            <label>Edad</label>
                            <InputNumber fluid v-model="oDog.animalAge" :maxFractionDigits="2" :min="0" :max="50" />
                        </div>
                        <div class="size">
                            <label>Tamaño</label>
                            <Select fluid :options="oListSizes" optionLabel="animalSizeDesc" optionValue="idAnimalSize"
                                placeholder="Seleccionar" v-model="oDog.idAnimalSize" />
                        </div>
                        <div class="weight">
                            <label>Peso</label>
                            <InputNumber fluid v-model="oDog.animalWeight" :maxFractionDigits="2" :min="0" :max="100"
                                suffix=" kg" showClear />
                        </div>
                        <div class="isVaccinate containerOptions">
                            <label>¿Está vacunado?</label>
                            <div class="options">
                                <div class="checkboxes">
                                    <RadioButton v-model="oDog.isVaccinated" size="large" :value="true" />
                                    <label>Si</label>
                                </div>
                                <div class="checkboxes">
                                    <RadioButton v-model="oDog.isVaccinated" size="large" :value="false" />
                                    <label>No</label>
                                </div>
                            </div>
                        </div>
                        <div class="isSterilized containerOptions">
                            <label>¿Está esterilizado?</label>
                            <div class="options">
                                <div class="checkboxes">
                                    <RadioButton v-model="oDog.isSterilized" size="large" :value="true" />
                                    <label>Si</label>
                                </div>
                                <div class="checkboxes">
                                    <RadioButton v-model="oDog.isSterilized" size="large" :value="false" />
                                    <label>No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="containerPhoto space">
                        <label class="bold">Adjuntar foto</label>
                        <FileUpload mode="advanced" :auto="false" :multiple="false" :maxFileCount="1" accept="image/*"
                            maxFileSize="5242880" :fileLimit="1" @select="enArchivoSeleccionado" @clear="clearImage"
                            :showUploadButton="false" :showCancelButton="false" chooseLabel="Seleccionar foto"
                            class="uploadComponent"> <template #empty>
                                <span>Selecciona o arrastra una foto aquí.</span>
                            </template>
                        </FileUpload>
                    </div>
                    <div class="containerDescription space">
                        <label class="bold">Descripción</label>
                        <Textarea fluid rows="5" v-model="oDog.animalDesc" />
                    </div>
                    <div class="containerHistory space">
                        <label class="bold">Historia</label>
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
import { useToast } from 'primevue';
import CommonService from '@/services/CommonService';
import DogDetailService from '@/services/CatalogServices/DogDetailService';

const router = useRouter();
const toast = useToast();
const commonService = new CommonService();
const dogDetailService = new DogDetailService();

const oListGenders = ref([]);
const oListSizes = ref([]);
const id = localStorage.getItem('idDog');
const oDog = ref({
    animalName: '',
    isVaccinate: null,
    isSterilized: null,
    animalImageFile: null
});
const previewImage = ref(null);

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
    }

};

const LoadSizes = async () => {
    const response = await commonService.GetSizesService();
    if (response.status === 200) {
        oListSizes.value = response.data;
    }
};

const LoadDog = async () => {
    if (id != null) {
        const response = await dogDetailService.GetDogDetailService(id);
        if (response.status === 200) {
            oDog.value = response.data;
        }
    }
};

const enArchivoSeleccionado = (event) => {
    if (event.files && event.files.length > 0) {
        const file = event.files[0];

        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            alert(`El archivo es demasiado grande. Tamaño máximo permitido: 5MB. Tu archivo: ${(file.size / 1024 / 1024).toFixed(2)}MB`);
            oDog.value.animalImageFile = null;
            if (previewImage.value) {
                URL.revokeObjectURL(previewImage.value);
                previewImage.value = null;
            }
            return;
        }

        if (!file.type.startsWith('image/')) {
            alert('Por favor, selecciona solo archivos de imagen');
            oDog.value.animalImageFile = null;
            if (previewImage.value) {
                URL.revokeObjectURL(previewImage.value);
                previewImage.value = null;
            }
            return;
        }

        if (previewImage.value) {
            URL.revokeObjectURL(previewImage.value);
        }

        oDog.value.animalImageFile = file;
        previewImage.value = URL.createObjectURL(file);
    } else {
        clearImage();
    }
};

const clearImage = () => {
    if (previewImage.value) {
        URL.revokeObjectURL(previewImage.value);
        previewImage.value = null;
    }
    oDog.value.animalImageFile = null;

};

const createUpdateDog = async () => {

    if (!ValidateFields()) {
        toast.add({
            severity: 'warn',
            summary: 'Campos Incompletos',
            detail: 'Por favor, complete todos los campos son obligatorios',
            life: 2000,
        });
        return;
    }

    const formData = new FormData();

    if (id != null) {
        formData.append('idRefAnimals', id);
        formData.append('newAnimalImageFile', oDog.value.animalImageFile);
    } else {
        formData.append('animalImageFile', oDog.value.animalImageFile);
    }
    formData.append('animalName', oDog.value.animalName.trim());
    formData.append('idAnimalGender', oDog.value.idAnimalGender);
    formData.append('animalAge', oDog.value.animalAge ?? 0);
    formData.append('idAnimalSize', oDog.value.idAnimalSize);
    formData.append('animalWeight', oDog.value.animalWeight ?? 0);
    formData.append('isVaccinated', oDog.value.isVaccinated);
    formData.append('isSterilized', oDog.value.isSterilized);
    formData.append('animalDesc', oDog.value.animalDesc.trim());
    formData.append('animalHistory', oDog.value.animalHistory.trim());
    if (oDog.value.animalImage && oDog.value.idAnimalImage) {
        formData.append('idAnimalImage', oDog.value.idAnimalImage);
        formData.append('animalImage', oDog.value.animalImage);
    }

    try {
        const isNew = !id;
        const serviceMethod = isNew
            ? dogDetailService.CreateDogService
            : dogDetailService.UpdateDogService;

        const response = await serviceMethod(formData);

        if ([200, 201].includes(response.status)) {
            toast.add({
                severity: 'success',
                summary: 'Operación exitosa',
                detail: `El perro ha sido ${isNew ? 'registrado' : 'actualizado'} correctamente`,
                life: 2000,
            });

            setTimeout(goBack, 2000);

        } else {
            throw new Error(`Error en la operación: ${response.status}`);
        }
    } catch (error) {
        toast.add({
            severity: 'error',
            summary: 'Operación Fallida',
            detail: 'Ha ocurrido un error al guardar el perro',
            life: 2000,
        });
    }
};

const ValidateFields = () => {
    return !!(
        oDog.value.animalName?.trim() &&
        oDog.value.idAnimalGender &&
        oDog.value.animalAge !== null &&
        oDog.value.idAnimalSize &&
        oDog.value.animalWeight !== null &&
        oDog.value.isVaccinated !== null &&
        oDog.value.isSterilized !== null &&
        oDog.value.animalDesc?.trim() &&
        oDog.value.animalHistory?.trim() &&
        (oDog.value.animalImageFile || oDog.value.idAnimalImage)
    );
};

const goBack = () => {
    router.push({ path: '/admin/catalogo' });
};

</script>