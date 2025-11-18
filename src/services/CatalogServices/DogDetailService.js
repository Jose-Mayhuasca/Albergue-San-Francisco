export default class DogDetailService {
  // * Get para los detalles de un perro del catalogo por su id

  async GetDogDetailService(id) {
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

  // * Post para crear un perro en el catálogo

  async CreateDogService(formData) {
    const dataUser = JSON.parse(localStorage.getItem('dataUser'))
    const response = await fetch(
      import.meta.env.VITE_API_URL + '/refugeAnimal/insertRefugeAnimals',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${dataUser.token}`,
        },
        body: formData, // ⚠️ Importante: no agregar Content-Type manualmente
      },
    )

    const data = await response.json()
    return { status: response.status, data }
  }

  // * Put para actualizar un perro en el catálogo

  async UpdateDogService(formData) {
    const dataUser = JSON.parse(localStorage.getItem('dataUser'))
    const response = await fetch(import.meta.env.VITE_API_URL + '/refugeAnimal/updateAnimalData', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${dataUser.token}`,
      },
      body: formData, // ⚠️ Importante: no agregar Content-Type manualmente
    })

    const data = await response.json()
    return { status: response.status, data }
  }
}
