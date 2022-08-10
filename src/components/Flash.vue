<template>
    <div v-if="Object.keys(messages).length" :class="wrapperClass">
        <template v-for="notification in messages">
            <slot
                :flash="notification"
                :click="(timestamp: Number) => hideFlash(timestamp)"
                :option="options[notification.type]">
                <FlashDefaultItem
                    :option="options[notification.type]"
                    :flash="notification"
                    @close="hideFlash"/>
            </slot>
        </template>
    </div>
</template>

<script lang="ts">
    import type { Ref } from "vue"
    import { defineComponent, onMounted, PropType, ref } from "vue"
    import "../index.css"
    import { DEFAULT_OPTIONS, FLASH_EVENT_NAME } from "../js/Constants"
    import { FlashType, Message, OptionsType } from "../types"
    import emitter from "../utils/emitter"
    import FlashDefaultItem from "./FlashDefaultItem.vue"

    export default defineComponent({
        name: "FlashContainer",
        components: { FlashDefaultItem },
        props: {
            timeout: {
                type: Number,
                required: false,
                default: () => 2000,
            },
            options: {
                type: Object as PropType<OptionsType>,
                required: false,
                default: () => DEFAULT_OPTIONS,
            },
            wrapperClass: {
                type: String,
                required: false,
                default: () => "absolute w-[200px] right-[20px] top-[20px]",
            },
        },

        setup(props) {
            const messages: Ref<Message[]> = ref([])

            onMounted(() => {
                console.log('here')
                emitter.on(FLASH_EVENT_NAME, handleFlashEvent)
            })

            const handleFlashEvent = (message: Message) => {
                messages.value.push(message)

                if (!props.timeout) {
                    return
                }

                setTimeout(() => hideFlash(message.timestamp), props.timeout)
            }

            const hideFlash = (timestamp: Number) => {
                messages.value = messages.value.filter(
                    (notification) => notification.timestamp !== timestamp,
                )
            }

            return {
                messages,
                hideFlash,
                FlashType,
            }
        },
    })
</script>
