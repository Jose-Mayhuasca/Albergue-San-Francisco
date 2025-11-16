<template>
    <section class="sectionLogin">
        <div class="container">
            <Toast />
            <div class="title">
                <h1 class="bold">LOGIN</h1>
                <h6>Solo para personal autorizado</h6>
            </div>
            <Form class="form" @submit="onSubmit">
                <div class="inputBox">
                    <h6>Usuario</h6>
                    <InputText v-model="user.username" fluid />
                </div>
                <div class="inputBox">
                    <h6>Contraseña</h6>
                    <InputText v-model="user.password" type="password" fluid />
                </div>
                <Button type="submit" class="p-button" label="Iniciar Sesión" @click.prevent="onSubmit" />
                <!-- <div class="links smallSize">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div> -->
            </Form>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import LoginService from '@/services/Authentication/LoginService.js';

const loginService = new LoginService();
const router = useRouter();
const toast = useToast();

const user = ref({
    username: "",
    password: ""
})

async function onSubmit() {

    const request = {
        userName: user.value.username,
        userRefugePassword: user.value.password
    }

    console.log("Request:", request);

    const response = await loginService.LoginService(request);
    console.log("Response:", response);

    if (response.status === 200) {
        toast.add({
            severity: 'success',
            summary: 'Login Exitoso',
            detail: 'Bienvenido al sistema',
            life: 2000
        });
        setTimeout(() => {
            router.push("/admin");
        }, 2000);
    }
    else {
        toast.add({
            severity: 'error',
            summary: 'Error de Autenticación',
            detail: 'Usuario o contraseña incorrectos',
            life: 2000
        });
    }

}

</script>
