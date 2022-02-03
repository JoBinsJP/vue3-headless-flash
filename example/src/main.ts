import { createApp } from 'vue'
import App from './App.vue'
import { FlashPlugin } from "../../src/FlashPlugin"
import TickIcon from "./Icons/TickIcon.vue"

const app = createApp(App)
app.use(FlashPlugin,{
    successIcon: TickIcon
})
app.mount('#app')
