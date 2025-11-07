<template>
  <div class="page">
    <section class="sectionDogNew">
      <div class="container">
        <div class="title">
          <h3 class="bold">{{ isEditMode ? 'Editar Perro' : 'Agregar Perro' }}</h3>
        </div>
        <div class="content">
          <div class="form">
            <div class="name double">
              <label>Nombre</label>
              <InputText fluid v-model="oDog.animalName" />
            </div>
            <div class="gender">
              <label>Género</label>
              <Select fluid 
                :options="oListGenders" 
                optionLabel="animalGenderDesc"
                optionValue="idAnimalGender" 
                v-model="oDog.idAnimalGender"
                placeholder="Seleccionar" />
            </div>
            <div class="age">
              <label>Edad</label>
              <InputNumber fluid v-model="oDog.animalAge" />
            </div>
            <div class="size">
              <label>Tamaño</label>
              <Select fluid 
                :options="oListSizes" 
                optionLabel="animalSizeDesc"
                optionValue="idAnimalSize"
                v-model="oDog.idAnimalSize"
                placeholder="Seleccionar" />
            </div>
            <div class="weight">
              <label>Peso</label>
              <InputNumber fluid v-model="oDog.animalWeight" />
            </div>
            <div class="isVaccinate containerOptions">
              <label>¿Está vacunado?</label>
              <div class="options">
                <Checkbox v-model="oDog.isVaccinated" :binary="true" />
                <label>{{ oDog.isVaccinated ? 'Sí' : 'No' }}</label>
              </div>
            </div>
            <div class="isSterilized containerOptions">
              <label>¿Está esterilizado?</label>
              <div class="options">
                <Checkbox v-model="oDog.isSterilized" :binary="true" />
                <label>{{ oDog.isSterilized ? 'Sí' : 'No' }}</label>
              </div>
            </div>
          </div>
          <div class="containerPhoto space">
            <label>Adjuntar foto</label>
            <div v-if="previewImage || (oDog.animalImage && !archivoParaSubir)" class="imagePreview">
              <img :src="previewImage || oDog.animalImage" alt="Vista previa" />
              <Button 
                icon="pi pi-times" 
                severity="danger" 
                rounded 
                @click="clearImage"
                class="removeImageBtn" />
            </div>
            <FileUpload 
              @select="enArchivoSeleccionado" 
              :showUploadButton="false" 
              :showCancelButton="false"
              :auto="false"
              accept="image/*" 
              chooseLabel="Seleccionar foto"
              maxFileSize="5242880"
              @clear="clearImage">
              
              <template #empty>
                <span>Arrastra una foto aquí (máx. 5MB).</span>
              </template>
            </FileUpload>
          </div>
          <div class="containerDescription space">
            <label>Descripción</label>
            <Textarea fluid rows="5" v-model="oDog.animalDesc" />
          </div>
          <div class="containerHistory space">
            <label>Historia</label>
            <Textarea fluid rows="5" v-model="oDog.animalHistory" />
          </div>
          <div class="actions">
            <Button label="Guardar" icon="pi pi-save" iconPos="right" class="success"
              @click="handleSave()" />
            <Button label="Cancelar" icon="pi pi-times" iconPos="right" class="secondary"
              @click="goBack()" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import CommonService from '@/services/CommonService';
import DogCatalogService from '@/services/ApplicantServices/DogCatalogService'; 
const router = useRouter();
const route = useRoute();
const commonService = new CommonService();
const catalogService = new DogCatalogService(); 

const oListGenders = ref([]);
const oListSizes = ref([]);

const oDog = ref({
  idRefAnimals: localStorage.getItem('idDog'),
  animalName: '',
  idAnimalGender: null,
  animalAge: null,
  idAnimalSize: null,
  animalWeight: null,
  isVaccinated: false,
  isSterilized: false,
  animalDesc: '',
  animalHistory: '',
  animalImage: null,
  idAnimalImage: null
});

const archivoParaSubir = ref(null);
const previewImage = ref(null);
const imagenOriginal = ref({ animalImage: null, idAnimalImage: null });

const isEditMode = computed(() => {
  return !!route.params.id || !!localStorage.getItem('idDog');
});

onMounted(async () => {
  Initialize();
});

const Initialize = async () => {
  await LoadGenders();
  await LoadSizes();
  LoadDog();
};

const LoadGenders = async () => {
  try {
    const response = await commonService.GetGendersService();
    if (response.status === 200) {
      oListGenders.value = response.data;
    }
  } catch (error) {
    console.error("Error cargando géneros:", error);
  }
};

const LoadSizes = async () => {
  try {
    const response = await commonService.GetSizesService();
    if (response.status === 200) {
      oListSizes.value = response.data;
    }
  } catch (error) {
    console.error("Error cargando tamaños:", error);
  }
};

const LoadDog = async () => {
  const id = route.params.id || localStorage.getItem('idDog');
  if (!id) return;

  try {
    const response = await catalogService.GetDogService(id);
    if (response.status === 200) {
      oDog.value = {
        ...oDog.value,
        ...response.data,
        idRefAnimals: response.data.idRefAnimals || id
      };
      imagenOriginal.value = {
        animalImage: response.data.animalImage || null,
        idAnimalImage: response.data.idAnimalImage || null
      };
    }
  } catch (error) {
    console.error("Error cargando datos del perro:", error);
  }
};

const enArchivoSeleccionado = (event) => {
  if (event.files && event.files.length > 0) {
    const file = event.files[0];
    
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      alert(`El archivo es demasiado grande. Tamaño máximo permitido: 5MB. Tu archivo: ${(file.size / 1024 / 1024).toFixed(2)}MB`);
      archivoParaSubir.value = null;
      if (previewImage.value) {
        URL.revokeObjectURL(previewImage.value);
        previewImage.value = null;
      }
      return;
    }
    
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecciona solo archivos de imagen');
      archivoParaSubir.value = null;
      if (previewImage.value) {
        URL.revokeObjectURL(previewImage.value);
        previewImage.value = null;
      }
      return;
    }
    
    if (previewImage.value) {
      URL.revokeObjectURL(previewImage.value);
    }
    
    archivoParaSubir.value = file;
    previewImage.value = URL.createObjectURL(file);
  } else {
    clearImage();
  }
};

const clearImage = () => {
  if (previewImage.value) {
    URL.revokeObjectURL(previewImage.value);
    previewImage.value = null;
  }
  archivoParaSubir.value = null;
  
  if (isEditMode.value) {
    oDog.value.animalImage = imagenOriginal.value.animalImage;
    oDog.value.idAnimalImage = imagenOriginal.value.idAnimalImage;
  } else {
    oDog.value.animalImage = null;
    oDog.value.idAnimalImage = null;
  }
};

const createDog = async () => {
  if (!oDog.value.animalName || !oDog.value.animalName.trim()) {
    alert('El nombre del perro es requerido');
    return;
  }

  if (!oDog.value.idAnimalGender) {
    alert('El género es requerido');
    return;
  }

  if (!oDog.value.idAnimalSize) {
    alert('El tamaño es requerido');
    return;
  }

  const formData = new FormData();

  formData.append('animalName', oDog.value.animalName.trim());
  formData.append('idAnimalGender', oDog.value.idAnimalGender);
  formData.append('idAnimalSize', oDog.value.idAnimalSize);
  formData.append('animalAge', oDog.value.animalAge ?? 0);
  formData.append('animalWeight', oDog.value.animalWeight ?? 0);
  formData.append('isVaccinated', oDog.value.isVaccinated);
  formData.append('isSterilized', oDog.value.isSterilized);
  
  if (oDog.value.animalDesc?.trim()) {
    formData.append('animalDesc', oDog.value.animalDesc.trim());
  }
  
  if (oDog.value.animalHistory?.trim()) {
    formData.append('animalHistory', oDog.value.animalHistory.trim());
  }

  if (oDog.value.animalImage) {
    formData.append('animalImage', oDog.value.animalImage);
  }
  
  if (oDog.value.idAnimalImage) {
    formData.append('idAnimalImage', oDog.value.idAnimalImage);
  }

  if (archivoParaSubir.value) {
    formData.append('animalImageFile', archivoParaSubir.value);
  }

  try {
    const response = await catalogService.CreateDogService(formData);

    if (response.status === 200 || response.status === 201) {
      alert('¡Perro creado con éxito!');
      goBack();
    }
  } catch (error) {
    console.error('Error al crear el perro:', error);
    
    let errorMessage = error.message;
    if (error.details?.errors) {
      const validationErrors = Object.entries(error.details.errors)
        .map(([field, messages]) => {
          const fieldName = field.charAt(0).toUpperCase() + field.slice(1);
          const messagesList = Array.isArray(messages) ? messages.join(', ') : messages;
          return `${fieldName}: ${messagesList}`;
        })
        .join('\n');
      errorMessage = `Errores de validación:\n${validationErrors}`;
    }
    
    alert(`Error: ${errorMessage}`);
  }
};

const updateDog = async () => {
  if (!oDog.value.idRefAnimals) {
    alert('Error: No se encontró el ID del perro');
    return;
  }

  const formData = new FormData();

  const idRefAnimals = Number(oDog.value.idRefAnimals) || oDog.value.idRefAnimals;
  formData.append('idRefAnimals', idRefAnimals);
  
  formData.append('animalName', oDog.value.animalName?.trim() || '');
  formData.append('idAnimalGender', oDog.value.idAnimalGender);
  formData.append('animalAge', oDog.value.animalAge ?? 0);
  formData.append('idAnimalSize', oDog.value.idAnimalSize);
  formData.append('animalWeight', oDog.value.animalWeight ?? 0);
  formData.append('isVaccinated', oDog.value.isVaccinated);
  formData.append('isSterilized', oDog.value.isSterilized);
  formData.append('animalDesc', oDog.value.animalDesc?.trim() || '');
  formData.append('animalHistory', oDog.value.animalHistory?.trim() || '');
  formData.append('animalImage', oDog.value.animalImage ? String(oDog.value.animalImage) : '');
  formData.append('idAnimalImage', oDog.value.idAnimalImage ? String(oDog.value.idAnimalImage) : '');

  if (archivoParaSubir.value) {
    formData.append('newAnimalImageFile', archivoParaSubir.value);
  }

  try {
    const response = await catalogService.UpdateDogService(formData);
    if (response.status === 200 || response.status === 201) {
      alert('¡Perro actualizado con éxito!');
      goBack();
    }
  } catch (error) {
    console.error('Error al actualizar el perro:', error);
    
    let errorMessage = error.message;
    if (error.details?.errors) {
      const validationErrors = Object.entries(error.details.errors)
        .map(([field, messages]) => {
          const fieldName = field.charAt(0).toUpperCase() + field.slice(1);
          const messagesList = Array.isArray(messages) ? messages.join(', ') : messages;
          return `${fieldName}: ${messagesList}`;
        })
        .join('\n');
      errorMessage = `Errores de validación:\n${validationErrors}`;
    }
    
    alert(`Error: ${errorMessage}`);
  }
};

const handleSave = () => {
  const isUpdate = !!oDog.value.idRefAnimals || isEditMode.value;
  
  if (isUpdate) {
    updateDog();
  } else {
    createDog();
  }
};

const goBack = () => {
  if (previewImage.value) {
    URL.revokeObjectURL(previewImage.value);
  }
  localStorage.removeItem('idDog');
  router.push({ path: '/admin/catalogo' });
};
</script>