<template>
    <div v-if="Object.keys(messages).length">
        <template v-for="(notification, index) in messages">
            <slot :flash="notification"
                  :click="(timestamp)=>hideFlash(timestamp)"
                  :option="options.success">
            </slot>
        </template>
    </div>
</template>

<script>
    import emitter from "tiny-emitter/instance"

    import {
        defineComponent,
        onMounted,
        ref,
    }                           from "vue"
    import { FLASH_EVENT_NAME } from "../js/Constants"
    // import FlashItem            from "./FlashItem.vue"

    export default defineComponent({
        name: "Flash",

        props: {
            options: {
                type: Object,
                required: false,
                default: () => {},
            },
        },

        // components: { FlashItem },

        setup() {
            const messages = ref([])

            onMounted(() => {
                emitter.on(FLASH_EVENT_NAME, handleFlashEvent)
            })

            function handleFlashEvent({ message, type }) {
                messages.value.push({
                    timestamp: (new Date()).getTime(),
                    type,
                    message,
                })
            }

            function hideFlash(timestamp) {
                messages.value = messages.value.filter(
                    notification => notification.timestamp !== timestamp,
                )
            }

            return {
                messages,
                hideFlash,
            }
        },
    })
</script>
