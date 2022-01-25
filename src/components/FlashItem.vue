<template>
    <div class="alert" :class="classes">
        <span class="icon-holder">
            <success-icon v-if="notification.type==='success'" stroke="#57c75c" fill="none" class="h-4 w-4"/>
            <alert-error-icon v-else-if="notification.type==='error'" stroke="#9b4745" class="h-4 w-4" fill="none"/>
            <info-icon v-else-if="notification.type==='info'" class="h-4 w-4" stroke="#327aa1"/>
            <alert-warning-icon v-else-if="notification.type==='warning'" class="h-4 w-4" fill="none" stroke="#9f9727"/>
        </span>
        <p v-html="str.nl2br(notification.message)"/>
        <a href="#" @click="handleHide">
            <close-icon class="h-4 w-4" stroke="#ffffff" fill="none"/>
        </a>
    </div>
</template>

<script>
    import {
        computed,
        onMounted,
        defineComponent,
    }                       from "vue"
    import AlertWarningIcon from "../Icons/AlaertWarningIcon"
    import AlertErrorIcon   from "../Icons/AlertErrorIcon"
    import CloseIcon        from "../Icons/CloseIcon"
    import InfoIcon         from "../Icons/InfoIcon"
    import SuccessIcon      from "../Icons/SuccessIcon"
    import useStr           from "../../Utils/useStr"

    export default defineComponent({
        name: "NotificationItem",
        components: {
            CloseIcon,
            SuccessIcon,
            InfoIcon,
            AlertErrorIcon,
            AlertWarningIcon,
        },
        props: {
            notification: {
                type: Object,
                required: true,
            },
        },
        emits: ["hide"],

        setup(props, context) {
            const str = useStr()

            onMounted(() => {
                setTimeout(handleHide, 2000)
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
                str,
            }
        },
    })
</script>
