<template>
    <div class="page bg-slate-50 min-h-screen flex justify-center items-start py-6 md:py-10">
        <Section class="sectionDogDetail w-full">
            <!-- ================== CONTENIDO PRINCIPAL ================== -->
            <div class="container mx-auto max-w-5xl px-4" v-show="!bCargando">
                <!-- Una sola vista: cambia layout con media queries + clase is-desktop -->
                <div
                    :class="[
                        'detailView w-full gap-6 lg:gap-10',
                        viewDesktop ? 'is-desktop' : 'is-mobile'
                    ]"
                >
                    <!-- Foto -->
                    <div class="containerPhoto relative w-full">
                        <Card
                            class="photo overflow-hidden rounded-3xl shadow-xl bg-cover bg-center"
                            :style="{
                                backgroundImage: `url(${oPet.animalImage})`
                            }"
                        >
                            <template #title>
                                <div class="buttonBack absolute top-4 left-4 z-10">
                                    <button
                                        class="inline-flex items-center justify-center rounded-lg bg-white/50 hover:bg-white shadow-md w-10 h-10 transition"
                                        @click="goBack()"
                                    >
                                        <i class="ri-arrow-left-line text-slate-700 text-lg"></i>
                                    </button>
                                </div>
                                <!-- Overlay suave arriba para mejorar contraste -->
                                <div class="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
                            </template>
                        </Card>
                    </div>

                    <!-- Datos -->
                    <Card class="cardData rounded-3xl shadow-lg border border-slate-100 bg-white/90 backdrop-blur-sm">
                        <template #title>
                            <div class="flex items-center justify-between gap-2">
                                <h3 class="font-bold text-xl md:text-2xl text-slate-900">
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
                                <div class="containerItems grid grid-cols-2 gap-3 md:grid-cols-3">
                                    <div class="item flex items-center gap-2 px-3 py-2 rounded-2xl bg-cyan-50">
                                        <i class="ri-calendar-event-fill text-cyan-600 text-lg"></i>
                                        <label class="text-sm text-cyan-600">
                                            {{ oPet.animalAge }} años
                                        </label>
                                    </div>
                                    
                                    <div class="item flex items-center gap-2 px-3 py-2 rounded-2xl bg-cyan-50">
                                        <i
                                            class="text-cyan-600 text-lg"
                                            :class="oPet.idAnimalGender == 1 ? 'ri-men-line' : 'ri-women-line'"
                                        ></i>
                                        <label class="text-sm text-cyan-600">
                                            {{ oPet.genderDesc }}
                                        </label>
                                    </div>

                                    <div class="item flex items-center gap-2 px-3 py-2 rounded-2xl bg-cyan-50">
                                        <i class="ri-ruler-line text-cyan-600 text-lg"></i>
                                        <label class="text-sm text-cyan-600">
                                            {{ oPet.sizeDesc }}
                                        </label>
                                    </div>

                                    <div class="item flex items-center gap-2 px-3 py-2 rounded-2xl bg-cyan-50">
                                        <i class="ri-scales-2-line text-cyan-600 text-lg"></i>
                                        <label class="text-sm text-cyan-600">
                                            {{ oPet.animalWeight }} kg
                                        </label>
                                    </div>

                                    <div
                                        class="item flex items-center gap-2 px-3 py-2 rounded-2xl bg-cyan-50"
                                        v-show="oPet.isVaccinated"
                                    >
                                        <i class="ri-syringe-line text-cyan-600 text-lg"></i>
                                        <label class="text-sm text-cyan-600">
                                            {{ oPet.isVaccinated ? 'Vacunado' : 'Sin vacunar' }}
                                        </label>
                                    </div>

                                    <div
                                        class="item flex items-center gap-2 px-3 py-2 rounded-2xl bg-cyan-50"
                                        v-show="oPet.isSterilized"
                                    >
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
                                    <p class="text-sm md:text-base leading-relaxed text-slate-700 bg-slate-50/80 rounded-2xl px-4 py-3">
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
                                    <p class="text-sm md:text-base leading-relaxed text-slate-700 bg-slate-50/80 rounded-2xl px-4 py-3">
                                        {{ oPet.animalDesc }}
                                    </p>
                                </div>
                            </div>
                        </template>
                    </Card>

                    <!-- Acciones -->
                    <div
                        class="actionsContainer flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6 w-full"
                    >
                        <Button
                            label="Adoptar"
                            icon="ri-heart-2-line"
                            @click="goFormAdoption(oPet.idRefAnimals)"
                            class="flex-1 min-w-[140px] sm:max-w-xs"
                        />
                        <Button
                            label="Apadrinar"
                            icon="ri-vip-crown-line"
                            @click="goPlans()"
                            class="flex-1 min-w-[140px] sm:max-w-xs p-button-outlined"
                        />
                    </div>
                </div>
            </div>

            <!-- ================== SKELETON / CARGANDO ================== -->
            <div class="container mx-auto max-w-5xl px-4" v-show="bCargando">
                <div class="detailView w-full flex flex-col gap-6 md:flex-row md:gap-8">
                    <div class="containerPhoto w-full md:w-1/2">
                        <Skeleton
                            fluid
                            height="auto"
                            :style="{ aspectRatio: '4 / 5' }"
                            class="item rounded-3xl shadow-lg"
                        />
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
                                <div class="containerItems grid grid-cols-2 gap-3 md:grid-cols-3">
                                    <Skeleton
                                        v-for="index in 6"
                                        :key="index"
                                        width="100%"
                                        height="2.4rem"
                                        class="rounded-2xl"
                                    />
                                </div>
                            </div>

                            <div class="historyContainer standarContainer mt-6">
                                <div class="title mb-2">
                                    <h6 class="font-semibold text-sm uppercase tracking-wide text-slate-400">
                                        Historia
                                    </h6>
                                </div>
                                <div class="content">
                                    <Skeleton
                                        fluid
                                        height="6rem"
                                        class="rounded-2xl"
                                    />
                                </div>
                            </div>

                            <div class="descriptionContainer standarContainer mt-6">
                                <div class="title mb-2">
                                    <h6 class="font-semibold text-sm uppercase tracking-wide text-slate-400">
                                        Descripción
                                    </h6>
                                </div>
                                <div class="content">
                                    <Skeleton
                                        fluid
                                        height="6rem"
                                        class="rounded-2xl"
                                    />
                                </div>
                            </div>
                        </template>
                    </Card>
                </div>

                <div
                    class="actionsContainer flex flex-col sm:flex-row gap-3 mt-6 w-full"
                >
                    <Button
                        label="Adoptar"
                        icon="ri-heart-2-line"
                        @click="goFormAdoption(oPet.idRefAnimals)"
                        class="flex-1 min-w-[140px] sm:max-w-xs"
                    />
                    <Button
                        label="Apadrinar"
                        icon="ri-vip-crown-line"
                        @click="goPlans()"
                        class="flex-1 min-w-[140px] sm:max-w-xs p-button-outlined"
                    />
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
    margin-bottom: 1rem;
}

/* Tablet (>= 640px) */
@media (min-width: 640px) {
    .detailView {
        gap: 1.75rem;
    }
}

/* Tablet / pequeño desktop (>= 768px) */
@media (min-width: 768px) {
    .detailView {
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(0, 1.2fr);
        align-items: flex-start;
    }

    .detailView .containerPhoto {
        margin-bottom: 0;
    }
}

/* Desktop (>= 1024px) */
@media (min-width: 1024px) {
    .detailView {
        gap: 2.5rem;
    }
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
</style>
