<template>
    <div v-if="Object.keys(messages).length" class="alert-wrapper absolute  top-14 z-[9999]">
        <template v-for="(notification, index) in messages">
            <flash-item v-if="notification.message!==''"
                        :key="index"
                        :notification="notification"
                        @hide="hideFlash"/>
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
    import { FLASH_EVENT_NAME } from "/js/Constants"
    import FlashItem            from "/components/  FlashItem"

    export default defineComponent({
        name: "Flash",

        components: { FlashItem },

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
