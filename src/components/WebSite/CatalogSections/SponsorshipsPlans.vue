<template>
    <div class="page">
        <Section class="sectionSponsorshipsPlans">
            <div class="container">
                <div class="title">
                    <h3 class="bold">Planes de Apadrinamiento</h3>
                </div>
                <div class="subtitle">
                    <p>Elige un plan de apadrinamiento y ayuda a nuestros peluditos a tener una vida mejor.</p>
                </div>
                //Se esta evaluando la posibilidad de agregar la opcion de mensualidad/anualidad
                <div class="plansContainer">
                    <Card class="cardPlan">
                        <template #title>
                            <h6>Basic</h6>
                        </template>
                        <template #content>
                            <div class="price">
                                <h3 class="bold">$20</h3>
                                <span>mensuales</span>
                            </div>
                            <Button label="Get Started" />
                            <div class="line"></div>
                            <ul class="benefitsList">
                                <li>Actualizaciones mensuales por correo electrónico</li>
                                <li>Reconocimiento en nuestro sitio web</li>
                                <li>Visitas guiadas al refugio una vez al año</li>
                            </ul>
                            <div class="benefitsList">
                                <div class="items">
                                    <i class="pi pi-check" />
                                    <label for="benefit1">Tour guiado por el albergue</label>
                                </div>
                                <div class="items">
                                    <i class="pi pi-check" />
                                    <label for="benefit1">Tour guiado por el albergue</label>
                                </div>
                                <div class="items">
                                    <i class="pi pi-check" />
                                    <label for="benefit1">Tour guiado por el albergue</label>
                                </div>
                            </div>
                        </template>
                    </Card>
                </div>

            </div>
        </Section>
    </div>
</template>

/* TODO:

1.- Darle diseño
2.- Diseñar la seccion metodos de pagos

*/