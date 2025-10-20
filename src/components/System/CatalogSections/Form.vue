<template>
  <section class="sectionDashboard">
    <div class="container pb-32"> <!-- margen inferior para que no lo tape el footer -->
      
      <!-- Nombre -->
      <div class="inputBox">
        <label>Nombre</label>
        <InputText placeholder="Ej: Manchita" class="w-full" />
      </div>

      <!-- Género y Edad -->
      <div class="grid grid-cols-2 gap-3 w-full">
        <div class="inputBox">
          <label>Género</label>
          <Select
            :options="[
              { label: 'Macho', value: 'Macho' },
              { label: 'Hembra', value: 'Hembra' }
            ]"
            optionLabel="label"
            optionValue="value"
            placeholder="Seleccionar"
            class="w-full"
          />
        </div>

        <div class="inputBox">
          <label>Edad</label>
          <InputNumber placeholder="Redondear a años" class="w-full":maxFractionDigits="2" :max="30" />
        </div>
      </div>

      <!-- Tamaño y Peso -->
      <div class="grid grid-cols-2 gap-3 w-full mt-3">
        <div class="inputBox">
          <label>Tamaño</label>
          <Select
            :options="[
              { label: 'Pequeño', value: 'Pequeño' },
              { label: 'Mediano', value: 'Mediano' },
              { label: 'Grande', value: 'Grande' }
            ]"
            optionLabel="label"
            optionValue="value"
            placeholder="Seleccionar"
            class="w-full"
          />
        </div>

        <div class="inputBox">
          <label>Peso</label>
          <InputNumber placeholder="2/5/6" class="w-full":maxFractionDigits="2" :max="100" />
        </div>
      </div>

      <!-- Vacunado y Esterilizado -->
      <div class="grid grid-cols-2 gap-3 mt-4 w-full">
        <div>
          <label>Vacunado/Tratado</label>
          <div class="flex items-center gap-4 mt-2">
            <div class="flex items-center gap-2">
              <RadioButton inputId="vacunado-si" name="vacunado" value="si" />
              <label for="vacunado-si">Sí</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton inputId="vacunado-no" name="vacunado" value="no" />
              <label for="vacunado-no">No</label>
            </div>
          </div>
        </div>

        <div>
          <label>Esterilizado</label>
          <div class="flex items-center gap-4 mt-2">
            <div class="flex items-center gap-2">
              <RadioButton inputId="esterilizado-si" name="esterilizado" value="si" />
              <label for="esterilizado-si">Sí</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton inputId="esterilizado-no" name="esterilizado" value="no" />
              <label for="esterilizado-no">No</label>
            </div>
          </div>
        </div>
      </div>

      <!-- Foto -->
      <div class="inputBox mt-4">
        <label>Adjuntar Foto del perro</label>
        <div class="flex items-center gap-2 mt-2">
          <Button label="Subir" icon="pi pi-upload" class="primary" />
          <small>No file chosen</small>
        </div>
      </div>

      <!-- Descripción -->
      <div class="inputBox mt-4 w-full">
        <label>Descripción</label>
        <Textarea rows="3" autoResize placeholder="Ej: Juguetón y sociable" class="w-full" />
      </div>

      <!-- Historia -->
      <div class="inputBox mt-4 w-full">
        <label>Historia</label>
        <Textarea rows="3" autoResize placeholder="Ej: Rescatado de la calle..." class="w-full" />
      </div>

      <!-- Botones -->
      <div class="flex justify-between gap-2 mt-8 w-full">
        <!-- ⚠ Aquí irá la acción del backend -->
        <Button icon="pi pi-save" label="Guardar" class="w-full primary" />
        <router-link to="/admin/catalogo" class="w-full">
          <Button icon="pi pi-times" label="Cancelar" class="w-full secondary" />
        </router-link>
      </div>
    </div>
  </section>
</template>

