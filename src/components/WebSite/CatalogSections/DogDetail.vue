<template>
    <div class="page">
        <Section class="sectionDogDetail">
            <div class="container">
                <div class="containerPhoto">
                    <div class="buttonBack">

                    </div>
                    <div class="photo">
                        <Skeleton fluid height="auto" :style="{ aspectRatio: '1 / 1' }" class="item" />
                    </div>
                </div>
                <!-- <div class="cardData">
                    <div class="name">
                        <h3 class="bold">Max</h3>
                    </div>
                    <div class="característicasContainer">
                        <div class="title">
                            <h6 class="bold">Características</h6>
                        </div>
                        <div class="containerItems">
                            <div class="item">
                                <i class="pi pi-calendar" />
                                <label>3 años</label>
                            </div>
                            <div class="item">
                                <i class="pi pi-mars" />
                                <label>macho</label>
                            </div>
                            <div class="item">
                                <i class="pi pi-arrow-up-right-and-arrow-down-left-from-center" />
                                <label>mediano</label>
                            </div>
                            <div class="item">
                                <i class="pi pi-pencil" />
                                <label>Vacunado</label>
                            </div>
                            <div class="item">
                                <i class="pi pi-pencil" />
                                <label>Esterilizado</label>
                            </div>
                        </div>
                    </div>
                    <div class="historyContainer">
                        <div class="title">
                            <h6 class="bold">Titulo</h6>
                        </div>
                        <div class="content">
                            <p>Max fue rescatado de las calles de Zapallal en condiciones difíciles.Es un perro
                                tranquilo, cariñoso y sociable. Ama los paseos y la compañía humana.Ideal para una
                                familia o persona que busque un amigo leal y afectuoso.</p>
                        </div>
                    </div>
                    <div class="descriptionContainer">
                        <div class="title">
                            <h6 class="bold">Descripción</h6>
                        </div>
                        <div class="content">
                            <p>
                                Se entrega con sus vacunas completas y certificado de esterilización. Está listo
                                para
                                iniciar una nueva vida en un hogar donde reciba amor y cuidados.
                            </p>
                        </div>
                    </div>
                </div> -->
                <Card class="cardData">
                    <template #title>
                        <h3 class="bold">Max</h3>
                    </template>
                    <template #content>
                        <div class="characteristicsContainer standarContainer">
                            <div class="title">
                                <h6 class="bold">Características</h6>
                            </div>
                            <div class="containerItems">
                                <div class="item">
                                    <i class="pi pi-calendar" />
                                    <label>3 años</label>
                                </div>
                                <div class="item">
                                    <i class="pi pi-mars" />
                                    <label>macho</label>
                                </div>
                                <div class="item">
                                    <i class="pi pi-arrow-up-right-and-arrow-down-left-from-center" />
                                    <label>mediano</label>
                                </div>
                                <div class="item">
                                    <i class="pi pi-pencil" />
                                    <label>Vacunado</label>
                                </div>
                                <div class="item">
                                    <i class="pi pi-pencil" />
                                    <label>Esterilizado</label>
                                </div>
                            </div>
                        </div>
                        <div class="historyContainer standarContainer">
                            <div class="title">
                                <h6 class="bold">Historia</h6>
                            </div>
                            <div class="content">
                                <p>Max fue rescatado de las calles de Zapallal en condiciones difíciles. Es un perro
                                    tranquilo, cariñoso y sociable. Ama los paseos y la compañía humana. Ideal para una
                                    familia o persona que busque un amigo leal y afectuoso.</p>
                            </div>
                        </div>
                        <div class="descriptionContainer standarContainer">
                            <div class="title">
                                <h6 class="bold">Descripción</h6>
                            </div>
                            <div class="content">
                                <p>
                                    Se entrega con sus vacunas completas y certificado de esterilización. Está listo
                                    para iniciar una nueva vida en un hogar donde reciba amor y cuidados.
                                </p>
                            </div>
                        </div>
                    </template>
                </Card>
                <div class="actionsContainer">
                    <Button label="Adoptar" icon="pi pi-heart" />
                    <Button label="Apadrinar" icon="pi pi-crown" />
                </div>
            </div>
        </Section>
    </div>
</template>