import { createApp } from 'vue'
import App from './App.vue'
import { FlashPlugin } from "vue3-headless-flash"

const app = createApp(App)
app.use(FlashPlugin)
app.mount('#app')
