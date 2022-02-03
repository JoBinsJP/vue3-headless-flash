<template>
    <div v-if="Object.keys(messages).length" :class="wrapperClass">
        <template v-for="(notification, index) in messages">
            <slot :flash="notification"
                  :click="(timestamp)=>hideFlash(timestamp)"
                  :option="options[notification.type]">
                <FlashDefaultItem :option="options[notification.type]" :flash="notification" @close="hideFlash"/>
            </slot>
        </template>
    </div>
</template>

<script>
    import emitter          from "tiny-emitter/instance"
    import {
        defineComponent,
        onMounted,
        ref,
    }                       from "vue"
    import {
        DEFAULT_OPTIONS,
        FLASH_EVENT_NAME,
    }                       from "../js/Constants.ts"
    import FlashDefaultItem from "./FlashDefaultItem.vue"

    export default defineComponent({
        name: "Flash",
        components: { FlashDefaultItem },
        props: {
            timeout: {
                type: Number,
                required: false,
                default: () => 2000,
            },
            options: {
                type: Object,
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
            const messages = ref([])

            onMounted(() => {
                emitter.on(FLASH_EVENT_NAME, handleFlashEvent)
            })

            function handleFlashEvent({ message, type }) {
                const timestamp = (new Date()).getTime()

                messages.value.push({
                    timestamp: timestamp,
                    type,
                    message,
                })

                setTimeout(() => hideFlash(timestamp), props.timeout)
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
