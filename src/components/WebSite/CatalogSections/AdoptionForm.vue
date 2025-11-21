<template>
    <div
        class="page page-color bg-blue-50 dark:bg-slate-900 dark:text-white min-h-screen flex justify-center items-start py-6 md:py-10">
        <Section class="sectionAdoptionForm w-full">
            <Toast />
            <div
                class="container mx-auto max-w-3xl w-full bg-white/95 dark:bg-slate-800/80 dark:border dark:border-slate-700 rounded-3xl shadow-lg px-4 py-6 md:px-8 md:py-8">
                <!-- TÍTULO -->
                <div class="containerTitle flex items-center gap-3 mb-2">
                    <!-- <div
                        class="iconButtonBack w-10 h-10 flex items-center justify-center rounded-full bg-slate-600 text-slate-500"
                    >
                        Si luego quieres back:
                        <button @click="router.back()" class="w-full h-full flex items-center justify-center">
                            <i class="ri-arrow-left-line"></i>
                        </button>
                        
                        <i class="ri-file-list-3-line text-lg"></i>
                    </div> -->
                    <div class="title">
                        <h3 class="bold text-2xl md:text-3xl text-slate-900 dark:text-white">
                            Ficha de Adopción
                        </h3>
                    </div>
                </div>

                <!-- SUBTÍTULO -->
                <div class="containerSubtitle mt-1">
                    <p class="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        Ayúdanos a conocerte mejor para asegurar que cada perro llegue al hogar ideal.
                        La información será confidencial y usada solo para el proceso de adopción.
                    </p>
                </div>

                <!-- FORM + EVIDENCIA + PERMISOS -->
                <div
                    class="containerForm containerFormTwo mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)]">
                    <!-- FORMULARIO PRINCIPAL -->
                    <div class="form space-y-4">
                        <div class="name field flex flex-col gap-1">
                            <label class="text-sm font-medium text-slate-700 dark:text-slate-200">Nombres</label>
                            <InputText v-model="oApplicant.name"
                                class="w-full dark:bg-slate-700 dark:text-white dark:border dark:border-slate-600" />
                        </div>

                        <div class="lastName field flex flex-col gap-1">
                            <label class="text-sm font-medium text-slate-700 dark:text-slate-200">Apellidos</label>
                            <InputText v-model="oApplicant.lastName"
                                class="w-full dark:bg-slate-700 dark:text-white dark:border dark:border-slate-600" />
                        </div>

                        <div class="occupation field flex flex-col gap-1">
                            <label class="text-sm font-medium text-slate-700 dark:text-slate-200">Ocupación</label>
                            <InputText v-model="oApplicant.occupation"
                                class="w-full dark:bg-slate-700 dark:text-white dark:border dark:border-slate-600" />
                        </div>

                        <div class="sameField grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="age field flex flex-col gap-1">
                                <label class="text-sm font-medium text-slate-700 dark:text-slate-200">Edad</label>
                                <InputNumber fluid v-model="oApplicant.age" :useGrouping="false" :min="18" :max="100"
                                    class="w-full dark:bg-slate-700 dark:text-white dark:border dark:border-slate-600" />
                            </div>
                            <div class="district field flex flex-col gap-1">
                                <label class="text-sm font-medium text-slate-700 dark:text-slate-200">Distrito</label>
                                <Select placeholder="Seleccionar" fluid :options="oListDistricts"
                                    optionLabel="districtDesc" optionValue="idDistrict" v-model="oApplicant.idDistrict"
                                    class="w-full dark:bg-slate-700 dark:text-white dark:border dark:border-slate-600" />
                            </div>
                        </div>

                        <div class="phoneNumber field flex flex-col gap-1">
                            <label class="text-sm font-medium text-slate-700 dark:text-slate-200">N° de Contacto</label>
                            <InputNumber v-model="oApplicant.phoneNumber" :useGrouping="false" :min="900000000"
                                :max="999999999"
                                class="w-full dark:bg-slate-700 dark:text-white dark:border dark:border-slate-600" />
                            <span class="text-xs text-slate-400 dark:text-slate-400 mt-0.5">
                                Solo números, sin guiones ni espacios.
                            </span>
                        </div>
                    </div>

                    <!-- EVIDENCIA + PERMISOS -->
                    <div class="flex flex-col gap-4">
                        <!-- EVIDENCIA -->
                        <div
                            class="evidence rounded-2xl bg-slate-50 dark:bg-slate-800 border border-dashed border-slate-200 dark:border-slate-700 p-4 flex flex-col gap-3">
                            <label class="text-sm font-medium text-slate-700">
                                Adjuntar foto (Opcional) <br />
                                <span class="font-normal text-slate-500 text-xs">
                                    mascotas / espacio designado
                                </span>
                            </label>

                            <FileUpload mode="advanced" :auto="false" :multiple="false" :maxFileCount="1"
                                accept="image/*" maxFileSize="5242880" :fileLimit="1" @select="enArchivoSeleccionado"
                                @clear="clearImage" @remove="clearImage" :showUploadButton="false"
                                :showCancelButton="false" chooseLabel="Seleccionar foto" class="w-full">
                                <template #empty>
                                    <div class="flex flex-col items-center justify-center gap-1 py-4">
                                        <i class="ri-image-add-line text-2xl text-slate-400"></i>
                                        <span class="text-xs text-slate-500 dark:text-slate-300">
                                            Seleccione una foto aquí (máx. 5MB).
                                        </span>
                                    </div>
                                </template>
                            </FileUpload>

                            <!-- Preview opcional
                            <div v-if="previewImage"
                                class="mt-2 rounded-xl overflow-hidden border border-slate-200 bg-white">
                                <img :src="previewImage" alt="Vista previa" class="w-full h-32 object-cover" />
                            </div> -->
                        </div>

                        <!-- PERMISOS -->
                        <div class="permissions flex flex-col gap-3">
                            <div
                                class="useData standarContainer flex items-start justify-between gap-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3">
                                <a class="title flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-cyan-700"
                                    href="/src/assets/pdf/29733.pdf" target="_blank" rel="noopener" as="a">
                                    <label>Uso de Datos</label>
                                    <i class="ri-error-warning-line text-lg" />
                                </a>
                                <div
                                    class="toggleContainer flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                    <toggle-switch v-model="oApplicant.useData" />
                                    <label>Estoy de acuerdo</label>
                                </div>
                            </div>

                            <div
                                class="tyc standarContainer flex items-start justify-between gap-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3">
                                <a class="title flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-cyan-700"
                                    href="/src/assets/pdf/30407.pdf" target="_blank" rel="noopener" as="a">
                                    <label>Ley de protección animal</label>
                                    <i class="ri-error-warning-line text-lg" />
                                </a>
                                <div
                                    class="toggleContainer flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                    <toggle-switch v-model="oApplicant.tyc" />
                                    <label>Acepto</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ACCIONES -->
                <div class="actions mt-6 flex flex-col md:flex-row gap-3 md:justify-end">
                    <Button label="Enviar" icon="ri-mail-send-fill" iconPos="right" fluid
                        class="primary hover:bg-amber-600 transition font-semibold md:w-40 dark:bg-amber-500 dark:text-white"
                        @click="SendConfirm()" :disabled="isDisabled" :loading="loading" />
                    <!-- :disabled="!oApplicant.useData || !oApplicant.tyc" -->
                    <Button label="Cancelar" icon="ri-close-fill text-lg" iconPos="right" fluid
                        class="secondary md:w-40 dark:bg-slate-700 dark:text-white" @click="goBack(nameDog)"
                        :loading="loading" />
                </div>

                <!-- Dialog de confirmación de lectura -->
                <Dialog v-model:visible="visibleSendConfirm" modal header="Confirmación de envío" class="confirmDialog">
                    <p>Al confirmar, aceptas que tus datos sean procesados. El tiempo estimado para recibir una
                        respuesta a tu trámite es de [X] días hábiles.</p>
                    <p>¿Deseas continuar?</p>
                    <!-- <div class="confirmActions"> -->
                    <Button label="Entendido, enviar" severity="success" @click="sendApplication()" icon="pi pi-check"
                        fluid class="success" :loading="loading" />
                    <Button label="Revisar datos" severity="secondary" text @click="visibleSendConfirm = false"
                        icon="pi pi-times" fluid class="secondary" :loading="loading" />
                    <!-- </div> -->
                </Dialog>
            </div>
        </Section>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue';
import CommonService from '@/services/CommonService';
import ApplicantService from '@/services/ApplicantServices/ApplicantService';

const router = useRouter();
const toast = useToast();
const commonService = new CommonService();
const applicantService = new ApplicantService();
const loading = ref(false);

const oListDistricts = ref([]);
const oApplicant = ref({
    idDistrict: null,
    applicantImageFile: null,
    useData: false,
    tyc: false
});
const previewImage = ref(null);
const idDog = localStorage.getItem('idDog');
const nameDog = localStorage.getItem('nameDog');
const visibleSendConfirm = ref(false);

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

// Computed property para deshabilitar el botón de enviar
const isDisabled = computed(() => {
    return !oApplicant.value.useData || !oApplicant.value.tyc || loading.value;
});

const SendConfirm = () => {
    visibleSendConfirm.value = true;
}

const sendApplication = async () => {
    if (loading.value) return;

    loading.value = true;

    if (!validationFields()) {
        toast.add({
            severity: 'warn',
            summary: 'Campos Incompletos',
            detail: 'Por favor, complete los campos obligatorios',
            life: 2000
        });
        loading.value = false;
        visibleSendConfirm.value = false;
        return;
    }

    const formData = new FormData();

    formData.append('idRefAnimals', idDog);
    formData.append('userName', oApplicant.value.name?.trim() ?? '');
    formData.append('lastName', oApplicant.value.lastName?.trim() ?? '');
    formData.append('userOcuppation', oApplicant.value.occupation?.trim() ?? '');
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
            loading.value = false;
        }, 2000);
    } else {
        toast.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Hubo un error al enviar la solicitud. Por favor, intente nuevamente.',
            life: 2000
        });
        loading.value = false;
        throw new Error(`Error en la operación: ${response.status}`);
    }
}

const validationFields = () => {
    return !!(
        oApplicant.value.name?.trim() &&
        oApplicant.value.lastName?.trim() &&
        oApplicant.value.occupation?.trim() &&
        oApplicant.value.age &&
        oApplicant.value.idDistrict &&
        oApplicant.value.phoneNumber
    );
};

const goBack = (nameDog) => {
    router.push({ path: `/catalogo/detalle/${nameDog}` });
}
</script>

<style lang="scss" scoped>
/* Ajustes finos responsivos extra si los necesitas */

/* Do not force a white background here so Tailwind dark utilities can take effect. */
/* Mobile: keep container rounded and remove heavy shadows on small screens */
@media (max-width: 639px) {
    .sectionAdoptionForm .container {
        border-radius: 1.5rem;
        box-shadow: none;
    }

    .containerFormTwo {
        border: none !important;
    }
}

/* Desktop: give a bit more width */
@media (min-width: 1024px) {
    .sectionAdoptionForm .container {
        max-width: 46rem;
        /* ~736px */
    }
}

.containerFormTwo {
    border: none !important;
    padding: 0 !important;
}

/* When the site uses class-based dark mode (document.documentElement.classList),
     ensure page background and text adapt nicely. */
:global(.dark) {
    .page-color {
        background-color: #0f172a;
        /* slate-900 */
        color: #ffffff;
    }

    .sectionAdoptionForm .container {
        background-color: rgba(15, 23, 42, 0.8);
        /* dark translucent */
        border-color: rgba(148, 163, 184, 0.12);
        /* slate border subtle */
    }
}

/* Fallback for users whose system prefers dark */
@media (prefers-color-scheme: dark) {
    .page-color {
        background-color: #0f172a;
        color: #ffffff;
    }

    .sectionAdoptionForm .container {
        background-color: rgba(15, 23, 42, 0.8);
        border-color: rgba(148, 163, 184, 0.12);
    }
}
</style>
