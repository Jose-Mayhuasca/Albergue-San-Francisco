export default class CommonService {
  //* Get para obtener el conteo de solicitudes pendientes

  async GetPendingCountService() {
    const dataUser = JSON.parse(localStorage.getItem('dataUser'))
    const response = await fetch(import.meta.env.VITE_API_URL + `/generalData/pendingCount`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${dataUser.token}`,
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return { status: response.status, data }
  }

  //* Get para obtener los datos generales del dashboard principal

  async GetGeneralDataService() {
    const dataUser = JSON.parse(localStorage.getItem('dataUser'))
    const response = await fetch(import.meta.env.VITE_API_URL + `/generalData/generalData`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${dataUser.token}`,
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return { status: response.status, data }
  }

  //* Get para obtener los géneros de los perros

  async GetGendersService() {
    const response = await fetch(import.meta.env.VITE_API_URL + `/animalGender/animalGender`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return { status: response.status, data }
  }

  //* Get para obtener los tamaños de los perros

  async GetSizesService() {
    const response = await fetch(import.meta.env.VITE_API_URL + `/animalSize/animalSize`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return { status: response.status, data }
  }

  //* Get para obtener los distritos de los solicitantes

  async GetDistrictsService() {
    const response = await fetch(import.meta.env.VITE_API_URL + `/district/district`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return { status: response.status, data }
  }
}
