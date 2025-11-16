<template>
    <div class="page">
        <Section class="sectionDogDetail">
            <!-- ================== CONTENIDO PRINCIPAL ================== -->
            <div class="container" v-show="!bCargando">
                <!-- Una sola vista: cambia layout con la clase is-desktop / is-mobile -->
                <div :class="['detailView', viewDesktop ? 'is-desktop' : 'is-mobile']">
                    <!-- Foto -->
                    <div class="containerPhoto">
                        <!-- <Skeleton fluid height="auto" :style="{ aspectRatio: '1 / 1' }" class="item" /> -->
                        <Card
                            class="photo"
                            :style="{
                                backgroundImage: `url(${oPet.animalImage})`
                            }"
                        >
                            <template #title>
                                <div class="buttonBack">
                                    <i class="ri-arrow-left-line" @click="goBack()"></i>
                                </div>
                            </template>
                        </Card>
                    </div>

                    <!-- Datos -->
                    <Card class="cardData">
                        <template #title>
                            <h3 class="bold">{{ oPet.animalName }}</h3>
                        </template>

                        <template #content>
                            <!-- Características -->
                            <div class="characteristicsContainer standarContainer">
                                <div class="title">
                                    <h6 class="bold">Características</h6>
                                </div>
                                <div class="containerItems">
                                    <div class="item">
                                        <i class="ri-calendar-event-fill"></i>
                                        <label>{{ oPet.animalAge }} años</label>
                                    </div>
                                    <div class="item">
                                        <i class="ri-men-line" v-if="oPet.idAnimalGender == 1" />
                                        <i class="ri-women-line" v-else />
                                        <label>{{ oPet.genderDesc }}</label>
                                    </div>
                                    <div class="item">
                                        <i class="ri-ruler-line"></i>
                                        <label>{{ oPet.sizeDesc }}</label>
                                    </div>
                                    <div class="item">
                                        <i class="ri-scales-2-line"></i>
                                        <label>{{ oPet.animalWeight }}kg</label>
                                    </div>
                                    <div class="item" v-show="oPet.isVaccinated">
                                        <i class="ri-syringe-line"></i>
                                        <label>{{ oPet.isVaccinated ? 'Vacunado' : 'Sin vacunar' }}</label>
                                    </div>
                                    <div class="item" v-show="oPet.isSterilized">
                                        <i class="ri-quill-pen-line"></i>
                                        <label>{{ oPet.isSterilized ? 'Esterilizado' : 'Sin esterilizar' }}</label>
                                    </div>
                                </div>
                            </div>

                            <!-- Historia -->
                            <div class="historyContainer standarContainer">
                                <div class="title">
                                    <h6 class="bold">Historia</h6>
                                </div>
                                <div class="content">
                                    <p>{{ oPet.animalHistory }}</p>
                                </div>
                            </div>

                            <!-- Descripción -->
                            <div class="descriptionContainer standarContainer">
                                <div class="title">
                                    <h6 class="bold">Descripción</h6>
                                </div>
                                <div class="content">
                                    <p>{{ oPet.animalDesc }}</p>
                                </div>
                            </div>
                        </template>
                    </Card>

                    <!-- Acciones -->
                    <div class="actionsContainer">
                        <Button
                            label="Adoptar"
                            icon="ri-heart-2-line"
                            @click="goFormAdoption(oPet.idRefAnimals)"
                        />
                        <Button
                            label="Apadrinar"
                            icon="ri-vip-crown-line"
                            @click="goPlans()"
                        />
                    </div>
                </div>
            </div>

            <!-- ================== SKELETON / CARGANDO ================== -->
            <div class="container" v-show="bCargando">
                <div class="containerPhoto">
                    <Skeleton
                        fluid
                        height="auto"
                        :style="{ aspectRatio: '1 / 1' }"
                        class="item"
                    />
                </div>

                <Card class="cardData">
                    <template #title>
                        <Skeleton fluid height="3rem" />
                    </template>

                    <template #content>
                        <div class="characteristicsContainer standarContainer">
                            <div class="title">
                                <h6 class="bold">Características</h6>
                            </div>
                            <div class="containerItems">
                                <Skeleton
                                    v-for="index in 6"
                                    :key="index"
                                    width="6rem"
                                    height="2rem"
                                />
                            </div>
                        </div>

                        <div class="historyContainer standarContainer">
                            <div class="title">
                                <h6 class="bold">Historia</h6>
                            </div>
                            <div class="content">
                                <Skeleton fluid height="6rem" />
                            </div>
                        </div>

                        <div class="descriptionContainer standarContainer">
                            <div class="title">
                                <h6 class="bold">Descripción</h6>
                            </div>
                            <div class="content">
                                <Skeleton fluid height="6rem" />
                            </div>
                        </div>
                    </template>
                </Card>

                <div class="actionsContainer">
                    <Button
                        label="Adoptar"
                        icon="ri-heart-2-line"
                        @click="goFormAdoption(oPet.idRefAnimals)"
                    />
                    <Button
                        label="Apadrinar"
                        icon="ri-vip-crown-line"
                        @click="goPlans()"
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

const viewDesktop = ref(false);

const checkScreenSize = () => {
    viewDesktop.value = window.innerWidth > 480;
};

onMounted(() => {
    Initialize();
    checkScreenSize(); // Verificar tamaño inicial
    window.addEventListener('resize', checkScreenSize);
});

// Limpiar el event listener cuando el componente se desmonte
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
.detailView {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

/* Desktop: foto y card en columnas */
.detailView.is-desktop {
    flex-direction: row;
    align-items: flex-start;
}

.detailView.is-desktop .containerPhoto {
    flex: 1;
}

.detailView.is-desktop .cardData {
    flex: 1;
}

/* Mobile: todo en columna */
.detailView.is-mobile {
    flex-direction: column;
}

.detailView .actionsContainer {
    margin-top: 1rem;
    display: flex;
    gap: 0.75rem;
}

.detailView.is-mobile .actionsContainer {
    justify-content: space-between;
}

.detailView.is-desktop .actionsContainer {
    justify-content: flex-start;
}

</style>