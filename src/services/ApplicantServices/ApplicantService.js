export default class ApplicantService {
  // * Get para la lista de solicitantes por ID de perro

  async GetListApplicantsService(id) {
    const response = await fetch(
      import.meta.env.VITE_API_URL + `/userApp/userAppForCatalog?idRefAnimals=${id}`,
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

  // * Get para el detalle por id del solicitante de la lista del perro

  async GetApplicantDetailService(id) {
    const response = await fetch(
      import.meta.env.VITE_API_URL + `/userApp/userAppForId?idUserApp=${id}`,
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

  // * Put para editar el recordatorio del solicitante

  async UpdateApplicantReminderService(request) {
    const response = await fetch(import.meta.env.VITE_API_URL + `/userApp/updateUserAdminMsg`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
    const data = await response.json()
    return { status: response.status, data }
  }

  // * Put para actualizar el estado del solicitante a rechazado

  async UpdateRejectApplicantService(request) {
    const response = await fetch(import.meta.env.VITE_API_URL + `/userApp/updateStatusUserApp`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
    const data = await response.json()
    return { status: response.status, data }
  }

  // * Put para actualizar el estado del solicitante a aprobado

  async UpdateAcceptApplicantService(request) {
    const response = await fetch(
      import.meta.env.VITE_API_URL + `/userApp/updateAnimalAndUserStatus`,
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

  // * Post para enviar solicitud de adopción

  async CreateFormApplicantService(formData) {
    const response = await fetch(import.meta.env.VITE_API_URL + '/userApp/insertUserApp', {
      method: 'POST',
      body: formData, // ⚠️ Importante: no agregar Content-Type manualmente
    })

    const data = await response.json()
    return { status: response.status, data }
  }
}
