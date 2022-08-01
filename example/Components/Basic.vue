<template>
    <Setting @flash="flash"/>
    <FlashContainer :timeout="timeout"/>
</template>

<script>
    import { defineComponent, ref } from "vue"
    import { Flash, FlashContainer } from "../../dist/index.es"
    import Setting from "./Setting.vue"

    export default defineComponent({
        name: "Basic",
        components: { Setting, FlashContainer },
        setup() {
            const timeout = ref(2000)

            const flash = (data) => {
                timeout.value = data.timeout
                Flash.flash(data.message, data.type)
            }

            return {
                timeout,
                flash,
            }
        },
    })
</script>
