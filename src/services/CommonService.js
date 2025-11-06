export default class CommonService {
  async GetPendingCountService() {
    const response = await fetch(import.meta.env.VITE_API_URL + `/generalData/pendingCount`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return { status: response.status, data }
  }

  async GetGeneralDataService() {
    const response = await fetch(import.meta.env.VITE_API_URL + `/generalData/generalData`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return { status: response.status, data }
  }
}
