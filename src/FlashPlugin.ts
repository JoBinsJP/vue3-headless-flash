import { App, Plugin } from "vue"
import FlashContainer from "./components/Flash.vue"

export const FlashPlugin: Plugin = {
    install(app: App) {
        app.component("FlashContainer", FlashContainer)
    },
}
