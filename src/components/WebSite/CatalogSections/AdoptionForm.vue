<template>
    <div class="page">
        <Section class="sectionAdoptionForm">
            <Toast />
            <div class="container">
                <div class="containerTitle">
                    <div class="iconButtonBack">

                    </div>
                    <div class="title">
                        <h3 class="bold">Ficha de Adopción</h3>
                    </div>
                </div>
                <div class="containerSubtitle">
                    <p>Ayúdanos a conocerte mejor para asegurar que cada perro llegue al hogar ideal. La información
                        será confidencial y usada solo para el proceso de adopción.</p>
                </div>
                <div class="containerForm">
                    <div class="form">
                        <div class="name field">
                            <label for="">Nombres</label>
                            <InputText v-model="oApplicant.name" />
                        </div>
                        <div class="lastName field">
                            <label for="">Apellidos</label>
                            <InputText v-model="oApplicant.lastName" />
                        </div>
                        <div class="occupation field">
                            <label for="">Ocupación</label>
                            <InputText v-model="oApplicant.occupation" />
                        </div>
                        <div class="sameField">
                            <div class="age field">
                                <label for="">Edad</label>
                                <InputNumber fluid v-model="oApplicant.age" :useGrouping="false" :min="18" :max="100" />
                            </div>
                            <div class="district field">
                                <label for="">Distrito</label>
                                <Select placeholder="Seleccionar" fluid :options="oListDistricts"
                                    optionLabel="districtDesc" optionValue="idDistrict"
                                    v-model="oApplicant.idDistrict" />
                            </div>
                        </div>
                        <div class="phoneNumber field">
                            <label for="">N° de Contacto</label>
                            <InputNumber v-model="oApplicant.phoneNumber" :useGrouping="false" :min="900000000"
                                :max="999999999" />
                        </div>
                    </div>
                    <div class="evidence">
                        <label for="">Adjuntar foto(Opcional) <br>
                            mascotas / espacio designado </label>
                        <FileUpload mode="advanced" :auto="false" :multiple="false" :maxFileCount="1" accept="image/*"
                            maxFileSize="5242880" :fileLimit="1" @select="enArchivoSeleccionado" @clear="clearImage"
                            :showUploadButton="false" :showCancelButton="false" chooseLabel="Seleccionar foto">
                            <template #empty>
                                <span>Selecciona o arrastra una foto aquí.</span>
                            </template>
                        </FileUpload>
                    </div>
                    <div class="permissions">
                        <div class="useData standarContainer">
                            <a class="title" href="/src/assets/pdf/29733.pdf" target="_blank" rel="noopener" as="a">
                                <label for="">Uso de Datos</label>
                                <i class="pi pi-info-circle" />
                            </a>
                            <div class="toggleContainer">
                                <toggle-switch v-model="oApplicant.useData" />
                                <label for="">Estoy de acuerdo</label>
                            </div>
                        </div>
                        <div class="tyc standarContainer">
                            <a class="title" href="/src/assets/pdf/30407.pdf" target="_blank" rel="noopener" as="a">
                                <label for="">Ley de protección animal</label>
                                <i class="pi pi-info-circle" />
                            </a>
                            <div class="toggleContainer">
                                <toggle-switch v-model="oApplicant.tyc" />
                                <label for="">Acepto</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="actions">
                    <Button label="Enviar" icon="pi pi-send" iconPos="right" fluid class="primary"
                        @click="sendApplication()" :disabled="!oApplicant.useData || !oApplicant.tyc" />
                    <Button label="Cancelar" icon="pi pi-times" iconPos="right" fluid class="secondary"
                        @click="goBack(idDog)" />
                </div>
            </div>
        </Section>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue';
import CommonService from '@/services/CommonService';
import ApplicantService from '@/services/ApplicantServices/ApplicantService';

const router = useRouter();
const toast = useToast();
const commonService = new CommonService();
const applicantService = new ApplicantService();

const oListDistricts = ref([]);
const oApplicant = ref({
    idDistrict: null,
    applicantImageFile: null,
    useData: false,
    tyc: false
});
const previewImage = ref(null);
const idDog = localStorage.getItem('idDog');

onMounted(() => {
    Initialize();
})

const Initialize = async () => {
    await LoadDistricts();
}

const LoadDistricts = async () => {
    const response = await commonService.GetDistrictsService();
    if (response.status === 200) {
        oListDistricts.value = response.data;
    }
}

const enArchivoSeleccionado = (event) => {
    if (event.files && event.files.length > 0) {
        const file = event.files[0];

        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            alert(`El archivo es demasiado grande. Tamaño máximo permitido: 5MB. Tu archivo: ${(file.size / 1024 / 1024).toFixed(2)}MB`);
            oApplicant.value.applicantImageFile = null;
            if (previewImage.value) {
                URL.revokeObjectURL(previewImage.value);
                previewImage.value = null;
            }
            return;
        }

        if (!file.type.startsWith('image/')) {
            alert('Por favor, selecciona solo archivos de imagen');
            oApplicant.value.applicantImageFile = null;
            if (previewImage.value) {
                URL.revokeObjectURL(previewImage.value);
                previewImage.value = null;
            }
            return;
        }

        if (previewImage.value) {
            URL.revokeObjectURL(previewImage.value);
        }

        oApplicant.value.applicantImageFile = file;
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
    oApplicant.value.applicantImageFile = null;

};

const sendApplication = async () => {
    const formData = new FormData();

    // Debe hacerse una validación completa de los campos antes de enviar
    formData.append('idRefAnimals', idDog);
    formData.append('userName', oApplicant.value.name.trim());
    formData.append('lastName', oApplicant.value.lastName.trim());
    formData.append('userOcuppation', oApplicant.value.occupation.trim());
    formData.append('userAge', oApplicant.value.age);
    formData.append('idUserDistrict', oApplicant.value.idDistrict);
    formData.append('userPhone', oApplicant.value.phoneNumber);
    formData.append('userImageFile', oApplicant.value.applicantImageFile);
    formData.append('isOnApaTyC', oApplicant.value.useData);
    formData.append('isOnPdTyC', oApplicant.value.tyc);

    const response = await applicantService.CreateFormApplicantService(formData);

    if (response.status === 200) {
        toast.add({
            severity: 'success',
            summary: 'Felicitaciones',
            detail: 'Solicitud de adopción enviada correctamente.',
            life: 2000
        });
        setTimeout(() => {
            router.push({ path: '/' });
        }, 2000);
    } else {
        toast.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Hubo un error al enviar la solicitud. Por favor, intente nuevamente.',
            life: 2000
        });
        throw new Error(`Error en la operación: ${response.status}`);

    }

}

const goBack = (id) => {
    router.push({ path: `/catalogo/detalle/${id}` });
}

</script>

/* TODO:

1.- Ajustar el FileUpload para que se vea mejor.
2.- Agregar validaciones a los campos del formulario.
3.- Implementar la lógica para enviar el formulario.

*/