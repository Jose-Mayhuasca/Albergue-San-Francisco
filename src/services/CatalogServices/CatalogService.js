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

  // * Put para eliminar un perro del catálogo (soft delete)

  async UpdateDeleteDogCatalogService(request) {
    const response = await fetch(
      import.meta.env.VITE_API_URL + `/refugeAnimal/updateStatusAnimal`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      },
    )
    const data = await response.json()
    return { status: response.status, data }
  }
}
