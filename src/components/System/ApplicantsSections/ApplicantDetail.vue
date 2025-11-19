<template>
    <div class="pageSystem">
        <Section class="sectionApplicantDetail">
            <div class="container" v-show="bCargando">
                <div class="title">
                    <Skeleton width="50%" height="3.5rem" />
                </div>
                <div class="dataApplicant">
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
                    <!-- <h6>Fotos Adjuntas</h6> -->
                    <div class="images">
                        <Skeleton class="image" fluid height="auto" border-radius="12px" />
                        <!-- <Skeleton fluid height="14rem" border-radius="12px" /> -->
                    </div>
                </div>
                <div class="reminder">
                    <Skeleton fluid height="251px" border-radius="12px" />
                </div>
            </div>
            <div class="container" v-show="!bCargando">
                <div class="title">
                    <h3 class="bold">{{ oApplicant.userName + " " + oApplicant.userLastName }}</h3>
                </div>
                <div class="dataApplicant">
                    <div class="applyDate gridStyle">
                        <span>Fecha de Solicitud:</span>
                        <span class="grey">{{ formatDate(oApplicant.creationDay) }}</span>
                    </div>
                    <div class="line"></div>
                    <div class="applicantAge gridStyle">
                        <span>Edad:</span>
                        <span class="grey">{{ oApplicant.userAge + " años" }}</span>
                    </div>
                    <div class="line"></div>
                    <div class="applicantDistrict gridStyle">
                        <span>Distrito:</span>
                        <span class="grey">{{ oApplicant.districtDesc }}</span>
                    </div>
                    <div class="line"></div>
                    <div class="applicantJob gridStyle">
                        <span>Ocupación:</span>
                        <span class="grey">{{ oApplicant.userOcuppation }}</span>
                    </div>
                    <div class="line"></div>
                    <div class="applicantPhone gridStyle">
                        <span>Teléfono:</span>
                        <span class="grey">{{ oApplicant.userPhone }}</span>
                    </div>
                    <div class="line"></div>
                </div>

                <div v-show="!viewDesktop" class="viewPhone">
                    <div class="evidence" v-show="oApplicant.urlImage">
                        <h6>Fotos Adjuntas</h6>
                        <div class="images">
                            <Card class="image" :style="{
                                backgroundImage: `url(${oApplicant.urlImage})`
                            }" />
                            <!-- <Card class="image" /> -->
                        </div>
                    </div>
                    <div class="reminder">
                        <Card>
                            <template #title>
                                <h6>Recordatorio</h6>
                            </template>
                            <template #content>
                                <Textarea rows="4" fluid auto-resize placeholder="Escribe un recordatorio..."
                                    v-model="oApplicant.msgAdmin" />
                            </template>
                            <template #footer>
                                <Button label="Guardar" icon="pi pi-save" iconPos="right" class="primary"
                                    @click="updateReminder()" />
                                <Button label="Descartar" icon="pi pi-times" iconPos="right" class="secondary"
                                    @click="discardUpdateReminder()" />
                            </template>
                        </Card>
                    </div>
                    <div class="actions" v-show="idStatusApplicant == 1">
                        <Button label="Aprobar" icon="pi pi-check" iconPos="right" class="success"
                            @click="openApproveConfirm()" />
                        <Button label="Rechazar" icon="pi pi-times" iconPos="right" class="danger"
                            @click="openDeniedConfirm()" />
                    </div>
                </div>
                <div v-show="viewDesktop" class="viewDesktop">
                    <div class="evidence" v-show="oApplicant.urlImage">
                        <!-- <div class="evidence"> -->
                        <h6>Fotos Adjuntas</h6>
                        <div class=" images">
                            <Card class="image" :style="{
                                backgroundImage: `url(${oApplicant.urlImage})`
                            }" />
                            <!-- <Card class="image" /> -->
                        </div>
                    </div>
                    <div class="containerColumn">
                        <div class="reminder">
                            <Card>
                                <template #title>
                                    <h6>Recordatorio (Opcional)</h6>
                                </template>
                                <template #content>
                                    <Textarea rows="4" fluid auto-resize placeholder="Escribe un recordatorio..."
                                        v-model="oApplicant.msgAdmin" />
                                </template>
                                <template #footer>
                                    <Button label="Guardar" icon="pi pi-save" iconPos="right" class="primary"
                                        @click="updateReminder()" />
                                    <Button label="Descartar" icon="pi pi-times" iconPos="right" class="secondary"
                                        @click="discardUpdateReminder()" />
                                </template>
                            </Card>
                        </div>
                        <div class="actions" v-show="idStatusApplicant == 1">
                            <Button label="Aprobar" icon="pi pi-check" iconPos="right" class="success"
                                @click="openApproveConfirm()" />
                            <Button label="Rechazar" icon="pi pi-times" iconPos="right" class="danger"
                                @click="openDeniedConfirm()" />
                        </div>
                    </div>
                </div>

                <!-- Dialog de confirmación de Aprobación -->
                <Dialog v-model:visible="visibleApproveConfirm" modal header="Confirmar Aprobación"
                    class="confirmDialog">
                    <p>¿Estás segura de que deseas aprobar esta solicitud?</p>
                    <p>Esta acción no se puede deshacer. Y descartará las otras solicitudes.</p>
                    <!-- <div class="confirmActions"> -->
                    <Button label="Aprobar" severity="success" @click="acceptApplicant()" icon="pi pi-check" fluid
                        class="success" />
                    <Button label="Cancelar" severity="secondary" text @click="visibleApproveConfirm = false"
                        icon="pi pi-times" fluid class="secondary" />
                    <!-- </div> -->
                </Dialog>

                <!-- Dialog de confirmación de Rechazo -->
                <Dialog v-model:visible="visibleDeniedConfirm" modal header="Confirmar Rechazo" class="confirmDialog">
                    <p>¿Estás segura de que deseas rechazar esta solicitud?</p>
                    <p>Esta acción no se puede deshacer.</p>
                    <!-- <div class="confirmActions"> -->
                    <Button label="Rechazar" severity="danger" @click="rejectApplicant()" icon="pi pi-trash" fluid
                        class="danger" />
                    <Button label="Cancelar" severity="secondary" text @click="visibleDeniedConfirm = false"
                        icon="pi pi-times" fluid class="secondary" />
                    <!-- </div> -->
                </Dialog>
            </div>
            <Toast />
        </Section>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import ApplicantService from '@/services/ApplicantServices/ApplicantService'
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const router = useRouter()
const applicantService = new ApplicantService()
const oApplicant = ref({})
const bCargando = ref(false)

const visibleApproveConfirm = ref(false);
const visibleDeniedConfirm = ref(false);
const idStatusApplicant = localStorage.getItem('idStatusApplicant');

const viewDesktop = ref(false);

const checkScreenSize = () => {
    viewDesktop.value = window.innerWidth > 480;
}

onMounted(async () => {
    await Initialize();
    checkScreenSize(); // Verificar tamaño inicial
    window.addEventListener('resize', checkScreenSize);
})

// Limpiar el event listener cuando el componente se desmonte
onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize);
})

const Initialize = async () => {
    await LoadApplicant();
}

const LoadApplicant = async () => {
    bCargando.value = true;
    const id = localStorage.getItem('idApplicant');
    const response = await applicantService.GetApplicantDetailService(id);
    // debugger;

    if (response.status === 200) {
        oApplicant.value = response.data;
        bCargando.value = false;
    }
}

const formatDate = (originalDate) => {
    const formattedDate = new Date(originalDate).toLocaleString('es-PE', {
        dateStyle: 'short',
        timeStyle: 'short'
    });
    return formattedDate;
};

const updateReminder = async () => {

    const request = {
        idUserApp: oApplicant.value.idUserApp,
        msgAdmin: oApplicant.value.msgAdmin
    };

    const response = await applicantService.UpdateApplicantReminderService(request);

    if (response.status === 200) {
        toast.add({
            severity: 'success',
            summary: 'Actualización Exitosa',
            detail: 'El recordatorio se ha actualizado correctamente',
            life: 2000
        });
        // setTimeout(() => {
        LoadApplicant();
        // }, 2000);
    } else {
        toast.add({
            severity: 'error',
            summary: 'Actualización Fallida',
            detail: 'No se pudo actualizar el recordatorio',
            life: 2000
        });
        setTimeout(() => {
            LoadApplicant();
        }, 2000);
    }
};

const discardUpdateReminder = async () => {

    const request = {
        idUserApp: oApplicant.value.idUserApp,
        msgAdmin: ''
    };

    const response = await applicantService.UpdateApplicantReminderService(request);

    if (response.status === 200) {
        toast.add({
            severity: 'info',
            summary: 'Recordatorio Descartados',
            detail: 'El recordatorio ha sido descartado',
            life: 2000
        });
        LoadApplicant();
    } else {
        toast.add({
            severity: 'error',
            summary: 'Eliminación Fallida',
            detail: 'No se pudo borrar el recordatorio',
            life: 2000
        });
        LoadApplicant();
    }
};

const openApproveConfirm = () => {
    visibleApproveConfirm.value = true;
}

const openDeniedConfirm = () => {
    visibleDeniedConfirm.value = true;
}

const rejectApplicant = async () => {
    const request = {
        idUserApp: oApplicant.value.idUserApp,
    }

    const response = await applicantService.UpdateRejectApplicantService(request);
    if (response.status === 200) {
        const id = localStorage.getItem('idDog');
        toast.add({
            severity: 'success',
            summary: 'Operación Exitosa',
            detail: 'El solicitante ha sido rechazado correctamente',
            life: 2000
        });
        setTimeout(() => {
            router.push(`/admin/solicitudes/${id}`);
        }, 2000);
    } else {
        toast.add({
            severity: 'error',
            summary: 'Operación Fallida',
            detail: 'No se pudo rechazar al solicitante',
            life: 2000
        });
    }

}

const acceptApplicant = async () => {
    const request = {
        idUserApp: oApplicant.value.idUserApp,
    }

    const response = await applicantService.UpdateAcceptApplicantService(request);
    if (response.status === 200) {
        toast.add({
            severity: 'success',
            summary: 'Operación Exitosa',
            detail: 'El solicitante ha sido aprobado correctamente',
            life: 2000
        });
        setTimeout(() => {
            router.push(`/admin/solicitudes`);
        }, 2000);
    } else {
        toast.add({
            severity: 'error',
            summary: 'Operación Fallida',
            detail: 'No se pudo aprobar al solicitante',
            life: 2000
        });
    }

}

</script>