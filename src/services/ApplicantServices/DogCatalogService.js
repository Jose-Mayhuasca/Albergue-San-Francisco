export default class DogCatalogService {
  // * Get para el catalogo de perros con solicitudes pendientes

  async GetDogCatalogService() {
    const dataUser = JSON.parse(localStorage.getItem('dataUser'))
    const response = await fetch(
      import.meta.env.VITE_API_URL + `/refugeAnimal/animalsWithApplicants`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${dataUser.token}`,
          'Content-Type': 'application/json',
        },
      },
    )
    const data = await response.json()
    return { status: response.status, data }
  }

  // * Get para los los datos del perro en la lista de solicitantes

  async GetDogService(id) {
    const dataUser = JSON.parse(localStorage.getItem('dataUser'))
    const response = await fetch(
      import.meta.env.VITE_API_URL + `/refugeAnimal/refugeAnimalForId?idRefAnimals=${id}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${dataUser.token}`,
          'Content-Type': 'application/json',
        },
      },
    )
    const data = await response.json()
    return { status: response.status, data }
  }
}
