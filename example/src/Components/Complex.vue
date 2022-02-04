<template>
    <Setting @flash="flash"/>
    <FlashContainer
        :timeout="timeout"
        wrapper-class="absolute w-[200px] right-[20px] bottom-[20px]"
        v-slot="slotProps">
        <div class="relative flex justify-between rounded-md px-6 py-3 mb-2" :class="slotProps.option.class">
            <div class="flex items-center">
                <button type="button" @click.stop="slotProps.click(slotProps.flash.timestamp)">
                    &times;
                </button>
                <div class="ml-2" :class="slotProps.option.textClass">
                    {{ slotProps.flash.message }}
                </div>
            </div>
            <component :is="slotProps.option.icon" class="w-6 h-6" :class="slotProps.option.iconClass"/>
        </div>
    </FlashContainer>
</template>

<script>
    import {
        defineComponent,
        ref,
    }                from "vue"
    import { Flash, FlashContainer } from "vue3-headless-flash"
    import Setting   from "./Setting.vue"

    export default defineComponent({
        name: "CustomIcon",
        components: {
            Setting,
            FlashContainer
        },
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
