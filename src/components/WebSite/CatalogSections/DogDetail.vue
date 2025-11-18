<template>
    <div class="page bg-slate-50 min-h-screen flex justify-center items-start py-6 md:py-10">
        <Section class="sectionDogDetail w-full">
            <!-- ================== CONTENIDO PRINCIPAL ================== -->
            <div class="container mx-auto max-w-5xl px-4" v-show="!bCargando">
                <!-- Una sola vista: cambia layout con media queries + clase is-desktop -->
                <div :class="[
                    'detailView w-full gap-6 lg:gap-10',
                    viewDesktop ? 'is-desktop' : 'is-mobile'
                ]">
                    <!-- Foto -->
                    <div class="containerPhoto relative w-full">
                        <Card class="photo overflow-hidden rounded-3xl shadow-xl bg-cover bg-center" :style="{
                            backgroundImage: `url(${oPet.animalImage})`
                        }">
                            <template #title>
                                <div class="buttonBack absolute top-4 left-4 z-10">
                                    <button
                                        class="inline-flex items-center justify-center rounded-lg bg-white/50 hover:bg-white shadow-md w-10 h-10 transition"
                                        @click="goBack()">
                                        <i class="ri-arrow-left-line text-slate-700 text-lg"></i>
                                    </button>
                                </div>
                                <!-- Overlay suave arriba para mejorar contraste -->
                                <div
                                    class="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none">
                                </div>
                            </template>
                        </Card>
                    </div>

                    <!-- Datos -->
                    <Card class="cardData rounded-3xl shadow-lg border border-slate-100 bg-white/90 backdrop-blur-sm">
                        <template #title>
                            <div class="flex items-center justify-between gap-2">
                                <h3 class="font-bold text-4xl md:text-4xl text-slate-900">
                                    {{ oPet.animalName }}
                                </h3>

                            </div>
                        </template>

                        <template #content>
                            <!-- Características -->
                            <div class="characteristicsContainer standarContainer mt-4">
                                <div class="title mb-2">
                                    <h6 class="font-semibold text-sm uppercase tracking-wide text-slate-500">
                                        Características
                                    </h6>
                                </div>
                                <div class="containerItems flex flex-wrap gap-3 items-start">
                                    <div
                                        class="item flex items-center gap-2 px-3 py-2 rounded-xl bg-cyan-50 min-w-0">
                                        <i class="ri-calendar-event-fill text-cyan-600 text-lg"></i>
                                        <label class="text-sm text-cyan-600">
                                            {{ formatAge(oPet.animalAge) }}
                                        </label>
                                    </div>

                                    <div
                                        class="item flex items-center gap-2 px-3 py-2 rounded-xl bg-cyan-50 min-w-0">
                                        <i class="text-cyan-600 text-lg"
                                            :class="oPet.idAnimalGender == 1 ? 'ri-men-line' : 'ri-women-line'"></i>
                                        <label class="text-sm text-cyan-600">
                                            {{ oPet.genderDesc }}
                                        </label>
                                    </div>

                                    <div
                                        class="item flex items-center gap-2 px-3 py-2 rounded-xl bg-cyan-50 min-w-0">
                                        <i class="ri-ruler-line text-cyan-600 text-lg"></i>
                                        <label class="text-sm text-cyan-600">
                                            {{ oPet.sizeDesc }}
                                        </label>
                                    </div>

                                    <div
                                        class="item flex items-center gap-2 px-3 py-2 rounded-xl bg-cyan-50 min-w-0">
                                        <i class="ri-scales-2-line text-cyan-600 text-lg"></i>
                                        <label class="text-sm text-cyan-600">
                                            {{ oPet.animalWeight }} kg
                                        </label>
                                    </div>
                                    <div class="item flex items-center gap-2 px-3 py-2 rounded-xl bg-cyan-50 min-w-0"
                                        v-show="oPet.isVaccinated">
                                        <i class="ri-syringe-line text-cyan-600 text-lg"></i>
                                        <label class="text-sm text-cyan-600">
                                            {{ oPet.isVaccinated ? 'Vacunado' : 'Sin vacunar' }}
                                        </label>
                                    </div>

                                    <div class="item flex items-center gap-2 px-3 py-2 rounded-xl bg-cyan-50 min-w-0"
                                        v-show="oPet.isSterilized">
                                        <i class="ri-quill-pen-line text-cyan-600 text-lg"></i>
                                        <label class="text-sm text-cyan-600">
                                            {{ oPet.isSterilized ? 'Esterilizado' : 'Sin esterilizar' }}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <!-- Historia -->
                            <div class="historyContainer standarContainer mt-6">
                                <div class="title mb-1">
                                    <h6 class="font-semibold text-sm uppercase tracking-wide text-slate-500">
                                        Historia
                                    </h6>
                                </div>
                                <div class="content">
                                    <p
                                        class="text-sm md:text-base leading-relaxed text-slate-700 bg-slate-50/80 rounded-2xl px-4 py-3">
                                        {{ oPet.animalHistory }}
                                    </p>
                                </div>
                            </div>

                            <!-- Descripción -->
                            <div class="descriptionContainer standarContainer mt-6">
                                <div class="title mb-1">
                                    <h6 class="font-semibold text-sm uppercase tracking-wide text-slate-500">
                                        Descripción
                                    </h6>
                                </div>
                                <div class="content">
                                    <p
                                        class="text-sm md:text-base leading-relaxed text-slate-700 bg-slate-50/80 rounded-2xl px-4 py-3">
                                        {{ oPet.animalDesc }}
                                    </p>
                                </div>
                            </div>
                        </template>
                    </Card>

                    <!-- Acciones -->
                    <div class="actionsContainer flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6 w-full">
                        <Button label="Adoptar" icon="ri-heart-2-line" @click="goFormAdoption(oPet.idRefAnimals)"
                            class="flex-1 min-w-[140px] sm:max-w-xs" />
                        <Button label="Apadrinar" icon="ri-vip-crown-line" @click="goPlans()"
                            class="flex-1 min-w-[140px] sm:max-w-xs p-button-outlined" />
                    </div>
                </div>
            </div>

            <!-- ================== SKELETON / CARGANDO ================== -->
            <div class="container mx-auto max-w-5xl px-4" v-show="bCargando">
                <div class="detailView w-full flex flex-col gap-6 md:flex-row md:gap-8">
                    <div class="containerPhoto w-full md:w-1/2">
                        <Skeleton fluid height="auto" :style="{ aspectRatio: '4 / 5' }"
                            class="item rounded-3xl shadow-lg" />
                    </div>

                    <Card class="cardData flex-1 rounded-3xl shadow-lg border border-slate-100 bg-white/90">
                        <template #title>
                            <Skeleton fluid height="3rem" class="rounded-xl" />
                        </template>

                        <template #content>
                            <div class="characteristicsContainer standarContainer mt-4">
                                <div class="title mb-2">
                                    <h6 class="font-semibold text-sm uppercase tracking-wide text-slate-400">
                                        Características
                                    </h6>
                                </div>
                                <div class="containerItems flex flex-wrap gap-3 items-start">
                                    <Skeleton v-for="index in 6" :key="index" height="2.4rem"
                                        class="rounded-2xl w-auto" />
                                </div>
                            </div>

                            <div class="historyContainer standarContainer mt-6">
                                <div class="title mb-2">
                                    <h6 class="font-semibold text-sm uppercase tracking-wide text-slate-400">
                                        Historia
                                    </h6>
                                </div>
                                <div class="content">
                                    <Skeleton fluid height="6rem" class="rounded-2xl" />
                                </div>
                            </div>

                            <div class="descriptionContainer standarContainer mt-6">
                                <div class="title mb-2">
                                    <h6 class="font-semibold text-sm uppercase tracking-wide text-slate-400">
                                        Descripción
                                    </h6>
                                </div>
                                <div class="content">
                                    <Skeleton fluid height="6rem" class="rounded-2xl" />
                                </div>
                            </div>
                        </template>
                    </Card>
                </div>

                <div class="actionsContainer flex flex-col sm:flex-row gap-3 mt-6 w-full">
                    <Button label="Adoptar" icon="ri-heart-2-line" @click="goFormAdoption(oPet.idRefAnimals)"
                        class="flex-1 min-w-[140px] sm:max-w-xs" />
                    <Button label="Apadrinar" icon="ri-vip-crown-line" @click="goPlans()"
                        class="flex-1 min-w-[140px] sm:max-w-xs p-button-outlined" />
                </div>
            </div>
        </Section>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import DogDetailService from '@/services/CatalogServices/DogDetailService';
import CommonService from '@/services/CommonService';

const router = useRouter();
const dogDetailService = new DogDetailService();
const commonService = new CommonService();
const bCargando = ref(false);
const oListGenders = ref([]);
const oListSizes = ref([]);
const oPet = ref({
    genderDesc: '',
    sizeDesc: ''
});

// Usaremos esto SOLO para ciertos ajustes de layout si lo necesitas
const viewDesktop = ref(false);

// Desktop real a partir de 1024px
const checkScreenSize = () => {
    viewDesktop.value = window.innerWidth >= 1024;
};

onMounted(() => {
    Initialize();
    checkScreenSize(); // Verificar tamaño inicial
    window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize);
});

const Initialize = async () => {
    const idDog = localStorage.getItem('idDog');
    bCargando.value = true;
    await LoadGenders();
    await LoadSizes();
    await LoadPet(idDog);
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

const LoadPet = async (idDog) => {
    const response = await dogDetailService.GetDogDetailService(idDog);
    if (response.status === 200) {
        oPet.value = response.data;
        oPet.value.sizeDesc =
            oListSizes.value.find((s) => s.idAnimalSize === oPet.value.idAnimalSize)?.animalSizeDesc || '';
        oPet.value.genderDesc =
            oListGenders.value.find((g) => g.idAnimalGender === oPet.value.idAnimalGender)?.animalGenderDesc || '';
        bCargando.value = false;
    }
};

function formatAge(decimalAge) {
    if (decimalAge == null) return "";

    // Separar parte entera (años) y parte decimal (meses)
    const years = Math.floor(decimalAge);
    const decimalPart = decimalAge - years;

    // Obtener los meses redondeando correctamente
    const months = Math.round(decimalPart * 10);

    let result = "";

    // Construir la parte de años
    if (years > 0) {
        result += years === 1 ? "1 año" : `${years} años`;
    }

    // Construir la parte de meses
    if (months > 0) {
        if (result.length > 0) result += " y ";
        result += months === 1 ? "1 mes" : `${months} meses`;
    }

    // Si no es ni años ni meses (ej: 0.0)
    if (result === "") {
        result = "0 meses";
    }

    return result;
}


const goFormAdoption = (id) => {
    router.push({ path: `/catalogo/adoptar/${id}` });
};

const goPlans = () => {
    router.push({ path: '/catalogo/apadrinar' });
};

const goBack = () => {
    router.push({ path: '/catalogo' });
};
</script>

<style scoped>
/* ---------- Layout base ---------- */
.detailView {
    display: flex;
    flex-direction: column;
}

/* Móvil por defecto */
.detailView.is-mobile .containerPhoto {
    margin-bottom: 0;
    /* dejamos que el card se solape sin gap extra */
}

/* ---------- Foto ---------- */
.containerPhoto .photo {
    min-height: 320px;
    aspect-ratio: 4 / 5;
    background-size: cover;
    background-position: center;
    position: relative;
}

/* ---------- Card de datos ---------- */
.cardData {
    padding: 1rem;
}

@media (min-width: 640px) {
    .cardData {
        padding: 1.25rem;
    }
}

@media (min-width: 1024px) {
    .cardData {
        padding: 1.75rem;
    }
}

/* ---------- Acciones ---------- */
.actionsContainer {
    /* estilos base ya con Tailwind, aquí solo podrías afinar si quieres */
}

/* Si usas PrimeVue, puedes ajustar los botones así: */
:deep(.p-button) {
    width: 100%;
}

@media (min-width: 640px) {
    :deep(.p-button) {
        width: auto;
    }
}

/* ================== VISTA MÓVIL (full viewport width + 10px overlap) ================== */
/* Hasta 639px aprox (sm en Tailwind) */
@media (max-width: 639px) {

    /* En móvil queremos fondo blanco para esta vista */
    .page {
        background-color: #FFFFFF !important;
    }

    /* Romper el contenedor centrado: usar 100vw y centrarlo con transform
       para que la imagen y el card ocupen realmente todo el ancho del viewport. */
    .detailView.is-mobile .containerPhoto,
    .detailView.is-mobile .cardData,
    .detailView.is-mobile .actionsContainer {
        width: 100vw;
        max-width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        position: relative;
        box-sizing: border-box;
        /* aseguramos que padding interno no aumente ancho */
        padding-left: 1rem;
        /* dejemos el espaciado interior igual que px-4 */
        padding-right: 1rem;
    }

    /* Foto: mantener altura mínima y que quede visualmente detrás del Card */
    .detailView.is-mobile .containerPhoto .photo {
        border-radius: 0 0;
        /* opcional: redondeado en la parte inferior */
        min-height: 350px;
        z-index: 1;
        margin-top: -40px;
        position: relative;
    }

    /* Asegurar que el propio Card (.photo) ocupe todo el ancho del viewport
       y no quede limitado por el padding del contenedor padre. También aplica
       a elementos directos hijos como Skeleton durante el loading. */
    .detailView.is-mobile .containerPhoto>* {
        width: 100vw;
        max-width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        position: relative;
        box-sizing: border-box;
        padding-left: 0;
        /* evitamos el padding extra que pueda empujar el contenido */
        padding-right: 0;
        margin-left: 0;
        margin-right: 0;

    }

    /* También forzamos que la propia .photo cubra 100vw por si el componente
       Card añade wrappers internos que no heredan el ancho del padre. */
    .detailView.is-mobile .containerPhoto .photo {
        width: 100vw;
        max-width: 100vw;
        left: 50%;
        transform: translateX(-50%);
    }

    /* Card: superponer 60px sobre la imagen como pediste */
    .detailView.is-mobile .cardData {
        margin-top: -70px;
        /* 70px sobre la imagen */
        z-index: 2;
        /* por encima de la imagen */
        border-radius: 2.5rem 2.5rem 0 0;
        /* redondeado arriba, plano abajo */
        padding-top: 1rem;
        /* evitar que el contenido quede pegado al borde */
        box-shadow: none;
        /* eliminar sombra extra en móvil */
    }

    /* Acciones: mantener alineadas con el ancho real de la vista */
    .detailView.is-mobile .actionsContainer {
        margin-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    /* Evitar overflow horizontal causado por 100vw en algunos navegadores */
    html,
    body,
    #app {
        overflow-x: hidden;

    }
}

/* ================== TABLET (>= 640px) ================== */
@media (min-width: 640px) {
    .detailView {
        gap: 1.75rem;
    }

    /* Hacer que el fondo de la página abarque todo el ancho del viewport
       en tablet y desktop (full-bleed) sin afectar el contenido centrado. */
    .page {
        width: 100vw;
        /* forzar ancho del viewport */
        margin-left: calc(50% - 50vw);
        /* centrar y compensar el contenedor padre */
        margin-right: calc(50% - 50vw);
        box-sizing: border-box;
        /* mantener el padding vertical ya definido en la clase HTML, solo
           eliminamos padding horizontal extra para evitar gaps laterales */
        padding-left: 0;
        padding-right: 0;
    }
}

/* ================== TABLET / PEQUEÑO DESKTOP (>= 768px) ================== */
@media (min-width: 768px) {
    .detailView {
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(0, 1.2fr);
        align-items: flex-start;

    }

    .detailView .containerPhoto {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 0;
    }

    .detailView .cardData {
        margin-top: 0;
        margin-left: 0;
        margin-right: 0;
        border-radius: 1.5rem;
    }

    .detailView .actionsContainer {
        margin-left: 0;
        margin-right: 0;
    }

    /* Características: usar flex para que los items se ajusten al ancho
       del contenido y hagan wrap automáticamente según el contenedor. */
    .characteristicsContainer .containerItems {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .characteristicsContainer .containerItems .item {
        flex: 0 0 auto;
        width: auto;
        min-width: 0;
    }

    .characteristicsContainer .containerItems .item label {
        white-space: nowrap;
    }
}

/* ================== DESKTOP (>= 1024px) ================== */
@media (min-width: 1024px) {
    .detailView {
        gap: 1.5rem;
    }
}
</style>
