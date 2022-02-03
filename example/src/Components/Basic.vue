<template>
    <Setting @flash="flash"/>
    <flash :timeout="timeout"/>
</template>

<script>
    import {
        defineComponent,
        ref,
    }              from "vue"
    import Flash   from "../../../src/js/Flash"
    import Setting from "./Setting.vue"

    export default defineComponent({
        name: "Basic",
        components: { Setting },
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
