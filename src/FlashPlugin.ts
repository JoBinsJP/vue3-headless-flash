import { App, Plugin } from 'vue';

// Install function used by Vue to register the plugin
export const FlashPlugin: Plugin = {
    install(app: App) {
        // register Headline as a global component, so you can use it wherever you want in your app
        // app.component('Headline', Headline)
    }
}
