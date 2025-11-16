<template>
    <div class="page bg-blue-50/80 min-h-screen flex justify-center items-start py-6 md:py-10">
        <Section class="sectionSponsorshipsPlans w-full">
            <div class="container mx-auto max-w-5xl px-4">
                <!-- HEADER -->
                <div class="title text-center mb-8 justify-end">
                    <div class="flex items-center justify-center bg-black hover:bg-white h-8 w-8 mb-3 rounded-lg">
                        <button
                            class="inline-flex items-center justify-center w-full h-full focus:outline-none"
                            @click="goBack(idDog)"
                            aria-label="Volver"
                        >
                            <i class="ri-arrow-left-line text-amber-500 text-lg" />
                        </button>
                    </div>
                    <h3 class="bold text-2xl md:text-3xl text-slate-900 mb-2">
                        Planes de Apadrinamiento
                    </h3>
                    <div class="subtitle max-w-2xl mx-auto">
                        <p class="text-sm md:text-base text-slate-600 leading-relaxed">
                            Elige un plan y ayuda a nuestros peluditos a tener una vida mejor. Tu apoyo
                            se traduce en alimento, cuidados médicos y mucho amor.
                        </p>
                    </div>
                </div>

                <!-- PLANES -->
                <div class="plansContainer grid gap-5 sm:gap-6">
                    <Card
                        v-for="plan in plans"
                        :key="plan.id"
                        :class="[
                            'cardPlan containerFormPlans transition transform',
                            plan.id === 2 ? 'is-featured scale-[1.02]' : 'hover:-translate-y-1'
                        ]"
                    >
                        <template #title>
                            <div class="flex flex-col items-center gap-2 mb-2">
                                <h6 class="bold text-center text-xl md:text-2xl text-slate-900">
                                    {{ plan.title }}
                                </h6>
                                <span
                                    v-if="plan.id === 2"
                                    class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700"
                                >
                                    <i class="ri-star-smile-line text-sm" />
                                    Más popular
                                </span>
                            </div>
                        </template>
                        <template #content>
                            <!-- PRECIO -->
                            <div class="price text-center mb-4">
                                <h2 class="font-semibold text-2xl md:text-3xl text-slate-900">
                                    S/.{{ plan.price.toFixed(2) }}
                                </h2>
                                <span class="text-sm text-slate-500">{{ plan.subtitle }}</span>
                            </div>

                            <!-- CTA -->
                            <Button
                                label="Elegir plan"
                                fluid
                                class="mb-4 font-semibold"
                                @click="goPaymentOption()"
                            />

                            <!-- thin horizontal rule -->
                            <div class="h-px w-full bg-slate-400 my-3"></div>

                            <!-- BENEFICIOS -->
                            <div class="benefitsList flex flex-col gap-2 mt-3">
                                <div
                                    class="item flex items-start gap-2 text-sm text-slate-700"
                                    v-for="(benefit, index) in plan.benefits"
                                    :key="index"
                                >
                                    <i class="ri-check-line text-lg text-emerald-500 mt-[2px]" />
                                    <label class="leading-snug">
                                        {{ benefit }}
                                    </label>
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
        title: 'Tazón Lleno',
        price: 10.0,
        subtitle: '/mensual',
        benefits: [
            'Tour guiado por el albergue',
            'Acceso a boletines mensuales',
            'Descuentos en eventos del albergue',
        ],
    },
    {
        id: 2,
        title: 'Panza Feliz',
        price: 50.0,
        subtitle: '/mensual',
        benefits: [
            'Incluye todos los beneficios del plan Tazón Lleno',
            'Acceso prioritario a eventos',
            'Certificado digital de donador',
        ],
    },
    {
        id: 3,
        title: 'Héroe Peludo',
        price: 110.0,
        subtitle: '/mensual',
        benefits: [
            'Incluye todos los beneficios del plan Panza Feliz',
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

<style scoped>
/* Quitar border/estilos base del Card (como tenías) */
.containerFormPlans {
    border: none !important;
    background-color: transparent !important;
}

/* Limpieza de p-card interno */
.containerFormPlans ::v-deep .p-card-content,
.containerFormPlans ::v-deep .p-card-body {
    border: none !important;
    background-color: transparent !important;
    box-shadow: none !important;
    padding: 0.75rem 0 0.75rem 0;
}

/* ---------- Layout responsive de los planes ---------- */
.plansContainer {
    /* mobile: 1 columna */
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

/* Tablet */
@media (min-width: 640px) {
    .plansContainer {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .plansContainer {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

/* ---------- Card estilizado ---------- */
.plansContainer .cardPlan.containerFormPlans {
    position: relative;
    border-radius: 1.5rem;
    padding: 1.5rem 1.25rem 1.75rem;
    background: #ffffff !important;
    box-shadow:
        0 18px 45px rgba(15, 23, 42, 0.08),
        0 2px 10px rgba(15, 23, 42, 0.04) !important;
    border: 1px solid rgba(148, 163, 184, 0.25);
}

/* Destacar el plan central (id === 2) */
.plansContainer .cardPlan.containerFormPlans.is-featured {
    border: 1px solid rgba(245, 158, 11, 0.5);
    box-shadow:
        0 20px 50px rgba(248, 250, 252, 0.1),
        0 0 0 1px rgba(251, 191, 36, 0.35) !important;
}

/* Ajustes tipográficos */
.price h2 {
    letter-spacing: -0.03em;
}

/* Asegurar que el contenido interno del Card se adapte bien */
.containerFormPlans ::v-deep .p-card {
    background: transparent;
    box-shadow: none;
}

/* HEADER – botón back en desktop flota a la izquierda del título */
@media (min-width: 768px) {
    .sectionSponsorshipsPlans .title {
        position: relative;
        padding-top: 0.25rem;
    }
}
</style>
