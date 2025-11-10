<template>
    <div class="page">
        <Section class="sectionDogDetail">
            <div class="container">
                <div class="containerPhoto">
                    <!-- <Skeleton fluid height="auto" :style="{ aspectRatio: '1 / 1' }" class="item" /> -->
                    <Card class="photo" :style="{
                        backgroundImage: `url(${oPet.animalImage})`
                    }">
                        <template #title>
                            <div class="buttonBack">
                                <i class="pi pi-arrow-left" @click="goBack()" />
                            </div>
                        </template>
                    </Card>
                </div>
                <Card class="cardData">
                    <template #title>
                        <h3 class="bold">{{ oPet.animalName }}</h3>
                    </template>
                    <template #content>
                        <div class="characteristicsContainer standarContainer">
                            <div class="title">
                                <h6 class="bold">Características</h6>
                            </div>
                            <div class="containerItems">
                                <div class="item">
                                    <i class="pi pi-calendar" />
                                    <label>{{ oPet.animalAge }} años</label>
                                </div>
                                <div class="item">
                                    <i class="pi pi-mars" v-if="oPet.idAnimalGender == 1" />
                                    <i class="pi pi-venus" v-else />
                                    <label>{{ oPet.genderDesc }}</label>
                                </div>
                                <div class="item">
                                    <i class="pi pi-arrow-up-right-and-arrow-down-left-from-center" />
                                    <label>{{ oPet.sizeDesc }}</label>
                                </div>
                                <div class="item">
                                    <i class="pi pi-gauge" />
                                    <label>{{ oPet.animalWeight }}kg</label>
                                </div>
                                <div class="item" v-show="oPet.isVaccinated">
                                    <i class="pi pi-pencil" />
                                    <label>{{ oPet.isVaccinated ? "Vacunado" : "Sin vacunar" }}</label>
                                </div>
                                <div class="item" v-show="oPet.isSterilized">
                                    <i class="pi pi-pencil" />
                                    <label>{{ oPet.isSterilized ? "Esterilizado" : "Sin esterilizar" }}</label>
                                </div>
                            </div>
                        </div>
                        <div class="historyContainer standarContainer">
                            <div class="title">
                                <h6 class="bold">Historia</h6>
                            </div>
                            <div class="content">
                                <p>{{ oPet.animalHistory }}</p>
                            </div>
                        </div>
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
                <div class="actionsContainer">
                    <Button label="Adoptar" icon="pi pi-heart" @click="goFormAdoption(oPet.idRefAnimals)" />
                    <Button label="Apadrinar" icon="pi pi-crown" @click="goPlans()" />
                </div>
            </div>
        </Section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import DogDetailService from '@/services/CatalogServices/DogDetailService';
import CommonService from '@/services/CommonService';

const router = useRouter();
const dogDetailService = new DogDetailService();
const commonService = new CommonService();
const oListGenders = ref([]);
const oListSizes = ref([]);
const oPet = ref({
    genderDesc: '',
    sizeDesc: ''
});

onMounted(() => {
    Initialize();
});

const Initialize = async () => {
    const idDog = localStorage.getItem('idDog');
    console.log("ID del perro:", idDog);
    await LoadGenders();
    await LoadSizes();
    await LoadPet(idDog);
}

const LoadGenders = async () => {
    const response = await commonService.GetGendersService();
    if (response.status === 200) {
        oListGenders.value = response.data;
    }
}

const LoadSizes = async () => {
    const response = await commonService.GetSizesService();
    if (response.status === 200) {
        oListSizes.value = response.data;
    }
}

const LoadPet = async (idDog) => {
    const response = await dogDetailService.GetDogDetailService(idDog);
    if (response.status === 200) {
        console.log("Detalle del perro:", response.data);
        oPet.value = response.data;
        oPet.value.sizeDesc = oListSizes.value.find(s => s.idAnimalSize === oPet.value.idAnimalSize)?.animalSizeDesc || '';
        oPet.value.genderDesc = oListGenders.value.find(g => g.idAnimalGender === oPet.value.idAnimalGender)?.animalGenderDesc || '';
    }
}


const goFormAdoption = (id) => {
    router.push({ path: `/catalogo/adoptar/${id}` });
}

const goPlans = () => {
    router.push({ path: '/catalogo/apadrinar' });
}

const goBack = () => {
    router.push({ path: '/catalogo' });
}

</script>
