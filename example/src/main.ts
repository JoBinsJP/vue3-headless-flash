import { createApp } from 'vue'
import App from './App.vue'
import { FlashPlugin } from "../../src/FlashPlugin"

const app = createApp(App)
app.use(FlashPlugin)
app.mount('#app')
