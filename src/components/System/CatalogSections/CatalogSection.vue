
<template>
    <section class="sectionCatalog">
        <div class="container">
                <router-link to="/admin/catalogo/nuevo" custom v-slot="{ navigate }">
                <Button label="Nuevo" icon="pi pi-plus" class="" fluid @click="navigate" />
                </router-link>
            <div class="containerNavigation">
                <IconField>
                    <InputIcon class="pi pi-search" />
                    <InputText placeholder="Buscar por nombre" class="searchInput" />
                </IconField>
                <Button class="sortButton" icon="pi pi-sort-alpha-down" />
                <Button class="filterButton" icon="pi pi-sliders-h" />
            </div>
            <div class="containerCards">
                <Card class="cardCatalog">
                    <template #title>
                        <p class="regularSize title">Pepe</p>
                    </template>
                </Card>
                <Card class="cardCatalog">
                    <template #title>
                        <p class="regularSize title">Manchita</p>
                    </template>
                </Card>
                <Card class="cardCatalog">
                    <template #title>
                        <p class="regularSize title">Copito</p>
                    </template>
                </Card>
                <Card class="cardCatalog">
                    <template #title>
                        <p class="regularSize title">Chispita</p>
                    </template>
                </Card>
                <Card class="cardCatalog">
                    <template #title>
                        <p class="regularSize title">Choco</p>
                    </template>
                </Card>
                <Card class="cardCatalog">
                    <template #title>
                        <p class="regularSize title">Toto</p>
                    </template>
                </Card>
                <Card class="cardCatalog">
                    <template #title>
                        <p class="regularSize title">Luna</p>
                    </template>
                </Card>
                <Card class="cardCatalog">
                    <template #title>
                        <p class="regularSize title">Koko</p>
                    </template>
                </Card>
                <Card class="cardCatalog">
                    <template #title>
                        <p class="regularSize title">Solcito</p>
                    </template>
                </Card>
                <Card class="cardCatalog">
                    <template #title>
                        <p class="regularSize title">Rambo</p>
                    </template>
                </Card>
                <Card class="cardCatalog">
                    <template #title>
                        <p class="regularSize title">Orejitas</p>
                    </template>
                </Card>
                <Card class="cardCatalog">
                    <template #title>
                        <p class="regularSize title">Boby</p>
                    </template>
                </Card>
            </div>
        </div>
    </section>
</template>