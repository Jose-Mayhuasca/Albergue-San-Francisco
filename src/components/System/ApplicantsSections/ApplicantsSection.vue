<template>
    <section class="sectionApplicants">
        <div class="container">
            <Button label="Solicitantes Pre - Aprobados" icon="pi pi-eye" icon-pos="right" class="thirty button-header"
                fluid />
            <Card class="cardStat primary">
                <template #title>
                    <h1>17</h1>
                </template>
                <template #content>
                    <h6>Solicitudes Pendientes</h6>
                </template>
            </Card>
            <div class="containerNavigation">
                <IconField>
                    <InputIcon class="pi pi-search" />
                    <InputText placeholder="Buscar por nombre" class="searchInput" />
                </IconField>
                <Button class="sortButton" icon="pi pi-sort-alpha-down" />
                <Button class="filterButton" icon="pi pi-sliders-h" />
            </div>
            <div class="containerCards">
                <Card v-for="dog in dogs" :key="dog.id" class="cardCatalog" :style="{
                    backgroundImage: `url(${dog.imageUrl})`
                }">
                    <template #header>
                        <Badge :value="dog.badgeValue" size="xlarge" severity="danger" />
                    </template>
                    <template #title>
                        <p class="regularSize title">{{ dog.name }}</p>
                    </template>
                </Card>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// items para las cards
const dogs = ref([
    {
        id: 1,
        name: 'Max',
        badgeValue: 6,
        imageUrl: 'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg',
        command: () => router.push('/admin')
    },
    {
        id: 2,
        name: 'Buddy',
        badgeValue: 5,
        imageUrl: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg',
        command: () => router.push('/admin/catalogo')
    },
    {
        id: 3,
        name: 'Lucy',
        badgeValue: 4,
        imageUrl: 'https://images.pexels.com/photos/34284563/pexels-photo-34284563.jpeg',
        command: () => router.push('/admin/solicitudes')
    },
    {
        id: 4,
        name: 'Bruce',
        badgeValue: 1,
        imageUrl: 'https://images.pexels.com/photos/34265055/pexels-photo-34265055.jpeg',
        command: () => router.push('/admin/solicitudes')
    },
    {
        id: 5,
        name: 'Rocky',
        badgeValue: 1,
        imageUrl: 'https://images.pexels.com/photos/34265027/pexels-photo-34265027.jpeg',
        command: () => router.push('/admin/solicitudes')
    }
])

</script>