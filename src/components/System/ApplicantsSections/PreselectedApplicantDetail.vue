<template>
    <div class="pageSystem">
        <Section class="sectionPreselectedApplicantDetail">
            <div class="container" v-show="bCargando">
                <div class="title">
                    <Skeleton width="50%" height="3.5rem" />
                </div>
                <div class="dataApplicant">
                    <div class="applyDog gridStyle">
                        <span>Perro Interesado:</span>
                        <Skeleton fluid height="1.5rem" />
                    </div>
                    <div class="line"></div>
                    <div class="applyDate gridStyle">
                        <span>Fecha de Solicitud:</span>
                        <Skeleton fluid height="1.5rem" />
                    </div>
                    <div class="line"></div>
                    <div class="applicantAge gridStyle">
                        <span>Edad:</span>
                        <Skeleton fluid height="1.5rem" />
                    </div>
                    <div class="line"></div>
                    <div class="applicantDistrict gridStyle">
                        <span>Distrito:</span>
                        <Skeleton fluid height="1.5rem" />
                    </div>
                    <div class="line"></div>
                    <div class="applicantJob gridStyle">
                        <span>Ocupación:</span>
                        <Skeleton fluid height="1.5rem" />
                    </div>
                    <div class="line"></div>
                    <div class="applicantPhone gridStyle">
                        <span>Teléfono:</span>
                        <Skeleton fluid height="1.5rem" />
                    </div>
                    <div class="line"></div>
                </div>
                <div class="evidence">
                    <h6>Fotos Adjuntas</h6>
                    <div class="images">
                        <Skeleton class="image" border-radius="12px" fluid height="auto" />
                    </div>
                </div>
                <div class="reminder">
                    <Skeleton fluid height="12.5rem" border-radius="12px" />
                </div>
            </div>
            <div class="container" v-show="!bCargando">
                <div class="title">
                    <h3 class="bold">{{ oApplicantDetails.userName + " " + oApplicantDetails.userLastName }}</h3>
                </div>
                <div class="dataApplicant">
                    <div class="applyDate gridStyle">
                        <span>Perro Interesado:</span>
                        <span class="grey">{{ oApplicantDetails.animalName }}</span>
                    </div>
                    <div class="line"></div>
                    <div class="applyDate gridStyle">
                        <span>Fecha de Solicitud:</span>
                        <span class="grey">{{ formatDate(oApplicantDetails.creationDay) }}</span>
                    </div>
                    <div class="line"></div>
                    <div class="applicantAge gridStyle">
                        <span>Edad:</span>
                        <span class="grey">{{ oApplicantDetails.userAge + " años" }}</span>
                    </div>
                    <div class="line"></div>
                    <div class="applicantDistrict gridStyle">
                        <span>Distrito:</span>
                        <span class="grey">{{ oApplicantDetails.districtDesc }}</span>
                    </div>
                    <div class="line"></div>
                    <div class="applicantJob gridStyle">
                        <span>Ocupación:</span>
                        <span class="grey">{{ oApplicantDetails.userOcuppation }}</span>
                    </div>
                    <div class="line"></div>
                    <div class="applicantPhone gridStyle">
                        <span>Teléfono:</span>
                        <span class="grey">{{ oApplicantDetails.userPhone }}</span>
                    </div>
                    <div class="line"></div>
                </div>
                <div v-show="!viewDesktop" class="viewPhone">
                    <div class="evidence">
                        <h6>Fotos Adjuntas</h6>
                        <div class="images">
                            <Card class="image" :style="{
                                backgroundImage: `url(${oApplicantDetails.urlImage})`
                            }" />
                        </div>
                    </div>
                    <div class="reminder">
                        <Card>
                            <template #title>
                                <h6>Recordatorio</h6>
                            </template>
                            <template #content>
                                <Textarea rows="4" fluid auto-resize disabled
                                    placeholder="Comentarios guardados se muestran aquí ..."
                                    v-model="oApplicantDetails.msgAdmin" />
                            </template>
                        </Card>
                    </div>
                    <div class="actions">
                        <Button label="Eliminar Solicitud" icon="pi pi-times" iconPos="right" class="danger"
                            @click="deleteApplicant()" />
                    </div>
                </div>
                <div v-show="viewDesktop" class="viewDesktop">
                    <div class="evidence">
                        <h6>Fotos Adjuntas</h6>
                        <div class="images">
                            <Card class="image" :style="{
                                backgroundImage: `url(${oApplicantDetails.urlImage})`
                            }" />
                        </div>
                    </div>
                    <div class="containerColumn">
                        <div class="reminder">
                            <Card>
                                <template #title>
                                    <h6>Recordatorio</h6>
                                </template>
                                <template #content>
                                    <Textarea rows="4" fluid auto-resize disabled
                                        placeholder="Comentarios guardados se muestran aquí ..."
                                        v-model="oApplicantDetails.msgAdmin" />
                                </template>
                            </Card>
                        </div>
                        <div class="actions">
                            <Button label="Eliminar Solicitud" icon="pi pi-times" iconPos="right" class="danger"
                                @click="deleteApplicant()" />
                        </div>
                    </div>
                </div>
            </div>
            <Toast />
        </Section>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import ApplicantPreApprovedService from '@/services/ApplicantServices/ApplicantPreApprovedService.js'
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const router = useRouter()
const applicantPreApprovedService = new ApplicantPreApprovedService()
const oApplicantDetails = ref({})
const bCargando = ref(false)

const viewDesktop = ref(false);

const checkScreenSize = () => {
    viewDesktop.value = window.innerWidth > 480;
}

onMounted(() => {
    Initialize();
    checkScreenSize(); // Verificar tamaño inicial
    window.addEventListener('resize', checkScreenSize);
})

// Limpiar el event listener cuando el componente se desmonte
onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize);
})

const Initialize = async () => {
    try {
        bCargando.value = true;
        const id = localStorage.getItem('idApplicantPreApproved')
        const response = await applicantPreApprovedService.GetApplicantPreApprovedDetailService(id);
        if (response.status === 200) {
            oApplicantDetails.value = response.data;
            console.log("Detalles del solicitante pre-aprobado:", oApplicantDetails.value);
            bCargando.value = false;
        } else {
            console.error("Error al obtener los detalles del solicitante pre-aprobado:", response.status);
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
    }
}

const formatDate = (originalDate) => {
    const formattedDate = new Date(originalDate).toLocaleString('es-PE', {
        dateStyle: 'short',
        timeStyle: 'short'
    });
    return formattedDate;
};

const deleteApplicant = async () => {
    try {
        const request = {
            idUserApp: oApplicantDetails.value.idUserApp,
        }
        console.log("Solicitud de eliminación:", request);

        const response = await applicantPreApprovedService.UpdateDeleteApplicantPreApprovedService(request);
        console.log("Respuesta de eliminación:", response);
        if (response.status === 200) {
            toast.add({
                severity: 'success',
                summary: 'Operación Exitosa',
                detail: 'La solicitud ha sido eliminada correctamente',
                life: 2000
            });
            setTimeout(() => {
                router.push(`/admin/solicitudes/pre-aprobadas`);
            }, 2000);
        }
    } catch (error) {
        toast.add({
            severity: 'error',
            summary: 'Operación Fallida',
            detail: 'No se pudo eliminar la solicitud',
            life: 2000
        });
    }

}

</script>