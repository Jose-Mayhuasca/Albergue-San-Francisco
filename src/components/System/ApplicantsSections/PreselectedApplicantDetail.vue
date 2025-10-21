<template>
    <div class="page">
        <Section class="sectionPreselectedApplicantDetail">
            <div class="container">
                <div class="title">
                    <h3 class="bold">José Daniel Mayhuasca Pérez</h3>
                </div>
                <div class="dataApplicant">
                    <div class="applyDate gridStyle">
                        <span>Perro Interesado:</span>
                        <span class="grey">Max</span>
                    </div>
                    <div class="line"></div>
                    <div class="applyDate gridStyle">
                        <span>Fecha de Solicitud:</span>
                        <span class="grey">01/09/2025</span>
                    </div>
                    <div class="line"></div>
                    <div class="applicantAge gridStyle">
                        <span>Edad:</span>
                        <span class="grey">21 años</span>
                    </div>
                    <div class="line"></div>
                    <div class="applicantDistrict gridStyle">
                        <span>Distrito:</span>
                        <span class="grey">Ventanilla</span>
                    </div>
                    <div class="line"></div>
                    <div class="applicantJob gridStyle">
                        <span>Ocupación:</span>
                        <span class="grey">Ingeniero de Sistemas</span>
                    </div>
                    <div class="line"></div>
                    <div class="applicantPhone gridStyle">
                        <span>Teléfono:</span>
                        <span class="grey">987654321</span>
                    </div>
                    <div class="line"></div>
                </div>
                <div class="evidence">
                    <h6>Fotos Adjuntas</h6>
                    <div class="images">
                        <Card class="image" />
                        <Card class="image" />
                    </div>
                </div>
                <div class="reminder">
                    <Card>
                        <template #title>
                            <h6>Recordatorio</h6>
                        </template>
                        <template #content>
                            <Textarea rows="4" fluid auto-resize disabled
                                placeholder="Comentarios guardados se muestran aqui ..." />
                        </template>
                    </Card>
                </div>
            </div>
        </Section>
    </div>
</template>