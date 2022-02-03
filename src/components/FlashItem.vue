<template>
    <div class="alert" :class="classes">
            Hello I am flash Item
            <template #icon>
                I am Icon
            </template>
<!--            <template #message>-->
<!--                I am message-->
<!--            </template>-->
<!--        <span class="icon-holder">-->
<!--            &lt;!&ndash; <success-icon v-if="notification.type==='success'" stroke="#57c75c" fill="none" class="h-4 w-4"/>-->
<!--            <alert-error-icon v-else-if="notification.type==='error'" stroke="#9b4745" class="h-4 w-4" fill="none"/>-->
<!--            <info-icon v-else-if="notification.type==='info'" class="h-4 w-4" stroke="#327aa1"/>-->
<!--            <alert-warning-icon v-else-if="notification.type==='warning'" class="h-4 w-4" fill="none" stroke="#9f9727"/> &ndash;&gt;-->
<!--        </span>-->
<!--        <p v-html="notification.message"/>-->
<!--        <a href="#" @click="handleHide">-->
<!--            *-->
<!--            &lt;!&ndash; <close-icon class="h-4 w-4" stroke="#ffffff" fill="none"/> &ndash;&gt;-->
<!--        </a>-->
    </div>
</template>

<script>
    import {
        computed,
        onMounted,
        defineComponent,
    }                       from "vue"
    // import useStr           from "../../Utils/useStr"

    export default defineComponent({
        name: "NotificationItem",
        components: {
        },
        props: {
            notification: {
                type: Object,
                required: true,
            },
        },
        emits: ["hide"],

        setup(props, context) {
            // const str = useStr()

            onMounted(() => {
                setTimeout(handleHide, 20000)
            })

            const classes = computed(() => {
                return {
                    success: "alert-success",
                    error: "alert-error",
                    warning: "alert-warning",
                    info: "alert-info",
                }[props.notification.type]
            })

            function handleHide() {
                context.emit("hide", props.notification.timestamp)
            }

            return {
                classes,
                handleHide,
            }
        },
    })
</script>
