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
                    <Password v-model="user.password" toggleMask :feedback="false" fluid />
                </div>
                <Button type="submit" class="p-button" label="Iniciar Sesión" @click.prevent="onSubmit"
                    :loading="loading" />
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

const loading = ref(false);

const user = ref({
    username: "",
    password: ""
})

async function onSubmit() {

    loading.value = true;

    if (!validationFields(user.value.username, user.value.password)) {
        toast.add({
            severity: 'warn',
            summary: 'Campos Incompletos',
            detail: 'Por favor, complete todos los campos',
            life: 2000
        });
        return;
    }

    const request = {
        userName: user.value.username,
        userRefugePassword: user.value.password
    }

    const response = await loginService.LoginService(request);


    if (response.status === 200) {
        localStorage.setItem('dataUser', JSON.stringify(response.data));
        toast.add({
            severity: 'success',
            summary: 'Login Exitoso',
            detail: 'Bienvenido al sistema',
            life: 2000
        });
        setTimeout(() => {
            router.push("/admin");
            loading.value = false;
        }, 2000);
    }
    else {
        toast.add({
            severity: 'error',
            summary: 'Error de Autenticación',
            detail: 'Usuario o contraseña incorrectos',
            life: 2000
        });
        loading.value = false;
    }
}

const validationFields = (username, password) => {
    return !!(username?.trim() && password?.trim());
};


</script>
