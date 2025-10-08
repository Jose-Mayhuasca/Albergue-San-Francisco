<template>
    <section class="sectionLogin">
        <div class="container">
            <Toast />
            <div class="title">
                <h1>LOGIN</h1>
                <h6>Solo para personal autorizado</h6>
            </div>
            <Form class="form" @submit="onSubmit">
                <div class="inputBox">
                    <h6>Usuario</h6>
                    <InputText v-model="user.username" type="number" fluid />
                </div>
                <div class="inputBox">
                    <h6>Contraseña</h6>
                    <InputText v-model="user.password" type="password" fluid />
                </div>
                <Button type="submit" class="p-button" label="Iniciar Sesión" @click.prevent="onSubmit" />
                <div class="links smallSize">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div>
            </Form>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';

const router = useRouter();
const toast = useToast();

const user = ref({
    username: "",
    password: ""
})

function onSubmit() {
    const response = userValidation(user.value.username, user.value.password);

    if (response) {
        setTimeout(() => {
            router.push("/");
        }, 2500); // Espera 1.5 segundos para que se vea el toast
        console.log("Usuario o contraseña correctos");
    }
    else {
        console.log("Usuario o contraseña incorrectos");
    }
}

function userValidation(username, password) {
    let response = false;
    if (username === "123456789" && password === "admin") {
        toast.add({
            severity: 'success',
            summary: 'Login Exitoso',
            detail: 'Bienvenido al sistema',
            life: 2000
        });
        response = true;
    } else if (username === "" && password === "") {
        toast.add({
            severity: 'warn',
            summary: 'Campos Vacíos',
            detail: 'Por favor, complete todos los campos',
            life: 2000
        });
    } else {
        toast.add({
            severity: 'error',
            summary: 'Error de Autenticación',
            detail: 'Usuario o contraseña incorrectos',
            life: 2000
        });
    }
    return response;
}

</script>
