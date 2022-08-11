<template>
    <div class="relative flex justify-between rounded-md px-6 py-3 mb-2" :class="option.class">
        <div class="flex items-center">
             <component :is="option.icon" class="w-6 h-6" :class="option.iconClass"/>
            <div class="ml-2" :class="option.textClass">
                {{ flash.message }}
            </div>
        </div>
        <button type="button" class="w-6 h-6" :class="option.textClass" @click.stop="close">
            &times;
        </button>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, PropType } from "vue"
    import ErrorIcon from "../Icons/ErrorIcon.vue"
    import { Message, OptionInterface } from "../types"

    export default defineComponent({
        name: "FlashDefaultItem",
        components: { ErrorIcon },
        emits: ["close"],
        props: {
            flash: {
                type: Object as PropType<Message>,
                required: true,
            },
            option: {
                type: Object as PropType<OptionInterface>,
                required: true,
            },
        },
        setup(props, { emit }) {
            const close = () => {
                emit("close", props.flash.timestamp)
            }

            return {
                close,
            }
        },
    })
</script>
