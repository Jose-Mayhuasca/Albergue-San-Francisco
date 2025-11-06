export default class ApplicantPreApprovedService {
  // * Get para la lista de todos los solicitantes pre-aprobados

  async GetApplicantPreApprovedService() {
    const response = await fetch(import.meta.env.VITE_API_URL + `/userApp/userAppPreApproved`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return { status: response.status, data }
  }

  // * Get para los detalles de un solicitante pre-aprobado por su ID

  async GetApplicantPreApprovedDetailService(id) {
    const response = await fetch(
      import.meta.env.VITE_API_URL + `/userApp/userAppDetailPreApproved?idUserApp=${id}`,
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

  // * Update para cambiar de estado al solicitante pre-aprobado a rechazado, eliminándolo de la lista

  async UpdateDeleteApplicantPreApprovedService(request) {
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
}
