import { App, Plugin }  from 'vue';
import Flash            from './components/Flash.vue';

export const FlashPlugin: Plugin = {
    install(app: App) {
        app.component('Flash', Flash)
    }
}
