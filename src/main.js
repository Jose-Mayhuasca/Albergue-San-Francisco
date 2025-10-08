// Vue & App
import { createApp } from 'vue'
import App from './App.vue'

// Router
import router from './router'

// PrimeVue core
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import ToastService from 'primevue/toastservice'

// PrimeVue components (registro modular)
import Componentes from './primevue'

// PrimeIcons
import 'primeicons/primeicons.css'

// Tailwind utilities (v4) primero
import '@/assets/tailwind.css'

// Estilos globales personalizados (SCSS)
import '@/assets/styles.scss'

// Inicialización de la app
const app = createApp(App)

// Configuración del tema Styled con Aura
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false,
    },
  },
})

// Router
app.use(router)
app.use(ToastService)

// Registro de componentes PrimeVue
Object.entries(Componentes).forEach(([name, component]) => {
  app.component(name, component)
})

// Montaje de la app
app.mount('#app')
