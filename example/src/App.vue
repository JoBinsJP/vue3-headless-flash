<template>
    <button @click="success">Success</button>
    <flash
        class="absolute w-[200px] right-[20px] top-[20px]"
        :options="{
            success:{
                icon: TickIcon,
                class:'bg-green-500',
                textColor:'text-white',
                iconColor:'stroke-[#fff]'
            }
        }"
        v-slot="slotProps">
        <div class="relative flex justify-between rounded-md px-6 py-3 mb-2" :class="slotProps.option.class">
            <div class="flex items-center">
                <component :is="slotProps.option.icon" class="w-6 h-6" :class="slotProps.option.iconColor"/>
                <div class="ml-2" :class="slotProps.option.textColor">
                    {{ slotProps.flash.message }}
                </div>
            </div>
            <button type="button" @click.stop="slotProps.click(slotProps.flash.timestamp)">
                <XIcon class="border rounded-full p-1 w-5 h-5 stroke-[#fff]"/>
            </button>
        </div>
    </flash>
</template>
<script lang="ts">
    import { defineComponent } from "vue"
    import Flash               from "../../src/js/Flash"
    import TickIcon            from "./Icons/TickIcon.vue"
    import XIcon               from "./Icons/XIcon.vue"

    export default defineComponent({
        components: { XIcon },
        setup() {
            const success = () => {
                Flash.success("Success")
            }

            return {
                success,
                TickIcon,
            }
        },
    })
</script>

