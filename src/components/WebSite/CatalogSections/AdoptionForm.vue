<script setup lang="ts">
import { FileUpload, InputText, Select } from 'primevue';

</script>

<template>
    <div class="page">
        <Section class="sectionAdoptionForm">
            <div class="container">
                <div class="containerTitle">
                    <div class="iconButtonBack">

                    </div>
                    <div class="title">
                        <h3 class="bold">Ficha de Adopción</h3>
                    </div>
                </div>
                <div class="containerSubtitle">
                    <p>Ayúdanos a conocerte mejor para asegurar que cada perro llegue al hogar ideal; la información
                        será confidencial y usada solo para el proceso de adopción.</p>
                </div>
                <div class="containerForm">
                    <div class="form">
                        <div class="name field">
                            <label for="">Nombres</label>
                            <InputText />
                        </div>
                        <div class="lastName field">
                            <label for="">Apellidos</label>
                            <InputText />
                        </div>
                        <div class="occupation field">
                            <label for="">Ocupación</label>
                            <InputText />
                        </div>
                        <div class="sameField">
                            <div class="age field">
                                <label for="">Edad</label>
                                <InputNumber fluid />
                            </div>
                            <div class="district field">
                                <label for="">Distrito</label>
                                <Select placeholder="Seleccionar" fluid />
                            </div>
                        </div>
                        <div class="phone field">
                            <label for="">N° de Contacto</label>
                            <InputNumber />
                        </div>
                    </div>
                    <div class="evidence">
                        <label for="">Adjuntar foto(Opcional) <br>
                            mascotas / espacio designado </label>
                        <FileUpload mode="advanced" :auto="false" :multiple="false" :maxFileCount="1" accept="image/*"
                            :maxFileSize="5242880">
                            <template #empty>
                                <span>Selecciona o arrastra una foto aquí.</span>
                            </template>
                        </FileUpload>
                    </div>
                    <div class="permissions">
                        <div class="useData standarContainer">
                            <label for="">Uso de Datos</label>
                            <div class="toggleContainer">
                                <toggle-switch />
                                <label for="">Estoy de acuerdo</label>
                            </div>
                        </div>
                        <div class="tyc standarContainer">
                            <label for="">Términos y condiciones</label>
                            <div class="toggleContainer">
                                <toggle-switch />
                                <label for="">Acepto</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="actions">
                    <Button label="Enviar" icon="pi pi-send" iconPos="right" fluid class="primary" />
                    <Button label="Cancelar" icon="pi pi-times" iconPos="right" fluid class="secondary" />
                </div>
            </div>
        </Section>
    </div>
</template>

/* TODO:

1.- Ajustar el FileUpload para que se vea mejor.
2.- Agregar validaciones a los campos del formulario.
3.- Implementar la lógica para enviar el formulario.

*/