export default class Login {
  //* Post para iniciar sesión de usuario

  async LoginService(request) {
    const response = await fetch(import.meta.env.VITE_API_URL + '/userRefuge/loginUserRefuge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })

    const data = await response.json()
    return { status: response.status, data }
  }
}
