import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/tailwind.css'
import vuetify from './plugins/vuetify'

const app = createApp(App)
app.use(vuetify)
app.mount('#app')
