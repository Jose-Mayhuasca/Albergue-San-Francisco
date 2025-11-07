export default class CatalogService {
  // * Get para obtener el catálogo de animales

  async GetCatalogService() {
    const response = await fetch(import.meta.env.VITE_API_URL + `/refugeAnimal/refugeAnimals`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return { status: response.status, data }
  }

  // * Get para los detalles de un perro del catalogo por su id

  async GetDogService(id) {
    const response = await fetch(
      import.meta.env.VITE_API_URL + `/refugeAnimal/refugeAnimalForId?idRefAnimals=${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const data = await response.json()
    return { status: response.status, data }
  }
}
