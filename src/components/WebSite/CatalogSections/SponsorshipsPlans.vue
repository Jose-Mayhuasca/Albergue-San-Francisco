<template>
    <div class="page">
        <Section class="sectionSponsorshipsPlans">
            <div class="container">
                <div class="title">
                    <div class="buttonback">
                        <i class="pi pi-arrow-left" @click="goBack()" />
                    </div>
                    <h3 class="bold">Planes de Apadrinamiento</h3>
                    <div class="subtitle">
                        <p>Elige un plan de apadrinamiento y ayuda a nuestros peluditos a tener una vida mejor.</p>
                    </div>
                </div>
                <div class="plansContainer">
                    <Card v-for="plan in plans" :key="plan.id" class="cardPlan">
                        <template #title>
                            <h6 class="bold">{{ plan.title }}</h6>
                        </template>
                        <template #content>
                            <div class="price">
                                <h2 class="bold">S/.{{ plan.price.toFixed(2) }}</h2>
                                <span>{{ plan.subtitle }}</span>
                            </div>
                            <Button label="Get Started" fluid @click="goPaymentOption()" />
                            <div class="line"></div>
                            <div class="benefitsList">
                                <div class="item" v-for="(benefit, index) in plan.benefits" :key="index">
                                    <i class="pi pi-check" />
                                    <label for="benefit1">{{ benefit }}</label>
                                </div>
                            </div>
                        </template>
                    </Card>
                </div>
            </div>
        </Section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const idDog = localStorage.getItem('idDog');

const plans = ref([
    {
        id: 1,
        title: 'Tazon Lleno',
        price: 10.0,
        subtitle: 'Un pequeño gesto que alimenta grandes esperanzas.',
        benefits: [
            'Tu donación equivale a 1 kg de comida que llena su pancita y su corazón.',
            'Tu apoyo hace una gran diferencia.',
        ],
    },
    {
        id: 2,
        title: 'Panza Feliz',
        price: 50.0,
        subtitle: 'mensuales',
        benefits: [
            'Incluye todos los beneficios del plan Basic',
            'Acceso prioritario a eventos',
            'Certificado digital de donador',
        ],
    },
    {
        id: 3,
        title: 'Héroe Peludo',
        price: 110.0,
        subtitle: 'mensuales',
        benefits: [
            'Incluye todos los beneficios del plan Premium',
            'Tour privado con los animales',
            'Foto con tu mascota apadrinada',
        ],
    },
])

const goPaymentOption = () => {
    router.push({ path: '/catalogo/apadrinar/opciones' });
}

const goBack = (idDog) => {
    router.push({ path: `/catalogo/detalle/${idDog}` });
}

</script>