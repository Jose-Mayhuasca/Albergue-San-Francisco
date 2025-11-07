export default class DogCatalogService {
  // * Get para el catalogo de perros con solicitudes pendientes

  async GetDogCatalogService() {
    const response = await fetch(
      import.meta.env.VITE_API_URL + `/refugeAnimal/animalsWithApplicants`,
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
  // * Get para los los datos del perro en la lista de solicitantes
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
  async CreateDogService(formData) {
    const endpoint = `/refugeAnimal/insertRefugeAnimals`;
    const method = 'POST';

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + endpoint,
        {
          method: method,
          body: formData,
        }
      );

      if (!response.ok) {
        let errorMsg = `Error: ${response.status} ${response.statusText}`;
        let errorDetails = null;
        try {
          const errorData = await response.json();
          errorDetails = errorData;
          errorMsg = errorData.message || errorData.error || errorMsg;
          
          // Si hay errores de validación, mostrarlos
          if (errorData.errors) {
            const validationErrors = Object.entries(errorData.errors)
              .map(([field, messages]) => `${field}: ${Array.isArray(messages) ? messages.join(', ') : messages}`)
              .join('\n');
            errorMsg = `Errores de validación:\n${validationErrors}`;
            console.error('Errores de validación detallados:', errorData.errors);
          }
          
          // Log detallado para debugging
          console.error('Error detallado del servidor (CreateDog):', errorData);
        } catch (e) { 
          // Si no se puede parsear, intentamos obtener el texto
          try {
            const errorText = await response.text();
            console.error('Error del servidor (texto - CreateDog):', errorText);
            errorMsg = errorText || errorMsg;
          } catch (textError) {
            console.error('No se pudo obtener el error del servidor');
          }
        }
        const error = new Error(errorMsg);
        error.details = errorDetails;
        throw error;
      }

      if (response.status === 204) {
        return { status: response.status, data: null };
      }
      
      const data = await response.json();
      return { status: response.status, data };

    } catch (error) {
      console.error('Error en CreateDogService:', error);
      throw error;
    }
  }

  // --- FUNCIÓN SEPARADA PARA ACTUALIZAR (PUT) ---
  async UpdateDogService(formData) {
    const endpoint = `/refugeAnimal/updateAnimalData`;
    const method = 'PUT';

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + endpoint,
        {
          method: method,
          body: formData,
        }
      );

      if (!response.ok) {
        let errorMsg = `Error: ${response.status} ${response.statusText}`;
        let errorDetails = null;
        try {
          const errorData = await response.json();
          errorDetails = errorData;
          errorMsg = errorData.message || errorData.error || errorMsg;
          
          if (errorData.errors) {
            const validationErrors = Object.entries(errorData.errors)
              .map(([field, messages]) => `${field}: ${Array.isArray(messages) ? messages.join(', ') : messages}`)
              .join('\n');
            errorMsg = `Errores de validación:\n${validationErrors}`;
            console.error('Errores de validación detallados (Update):', errorData.errors);
          }
          
          console.error('Error detallado del servidor (UpdateDog):', errorData);
        } catch (e) { 
          try {
            const errorText = await response.text();
            console.error('Error del servidor (texto - UpdateDog):', errorText);
            errorMsg = errorText || errorMsg;
          } catch (textError) {
            console.error('No se pudo obtener el error del servidor');
          }
        }
        const error = new Error(errorMsg);
        error.details = errorDetails;
        throw error;
      }

      if (response.status === 204) {
        return { status: response.status, data: null };
      }
      
      const data = await response.json();
      return { status: response.status, data };

    } catch (error) {
      console.error('Error en UpdateDogService:', error);
      throw error;
    }
  }
}
