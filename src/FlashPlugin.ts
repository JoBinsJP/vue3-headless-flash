import { App, Plugin }  from 'vue';
import Flash            from './components/Flash.vue';
import SuccessIcon      from "./Icons/SuccessIcon.vue"
import { FlashOptions } from "./types/FlashOptions"

// Install function used by Vue to register the plugin
export const FlashPlugin: Plugin = {
    install(app: App, options: FlashOptions) {
        app.config.globalProperties.$flashOptions = {
            successIcon: SuccessIcon,
        }
        app.component('Flash', Flash)
    }
}
