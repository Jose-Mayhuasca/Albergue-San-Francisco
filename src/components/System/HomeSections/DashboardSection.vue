<template>
    <section class="sectionDashboard">
        <div class="container">
            <div class="title">
                <h4>General</h4>
            </div>
            <div class="containerStats">
                <Card class="double">
                    <template #title>
                        <h6>Perros en el Albergue</h6>
                    </template>
                    <template #content>
                        <h1>65</h1>
                    </template>
                </Card>
                <Card class="double primary">
                    <template #title>
                        <h6>Perros Adoptados</h6>
                    </template>
                    <template #content>
                        <h1>20</h1>
                    </template>
                </Card>
                <Card>
                    <template #title>
                        <h1>10</h1>
                    </template>
                    <template #content>
                        <h6>este año</h6>
                    </template>
                </Card>
                <Card class="thirty">
                    <template #title>
                        <h1>5</h1>
                    </template>
                    <template #content>
                        <h6>este mes</h6>
                    </template>
                </Card>
            </div>
            <div class="containerQuickActions">
                <div class="title">
                    <h4>Acciones Rápidas</h4>
                </div>
                <div class="actions">
                    <Button label="Añadir Perro" icon="pi pi-plus" />
                    <Button label="Ver Solicitudes" icon="pi pi-eye" />
                </div>
            </div>
        </div>
    </section>
</template>