export const FLASH_EVENT_NAME: string = "_flash"

import SuccessIcon from "../Icons/SuccessIcon.vue"
import ErrorIcon from "../Icons/ErrorIcon.vue"
import InfoIcon from "../Icons/InfoIcon.vue"
import WarningIcon from "../Icons/WarningIcon.vue"
import { OptionsType } from "../types"

export const DEFAULT_OPTIONS: OptionsType = {
    SUCCESS: {
        icon: SuccessIcon,
        class: "bg-green-500",
        textClass: "text-white",
        iconClass: "stroke-[#fff]",
    },
    ERROR: {
        icon: ErrorIcon,
        class: "bg-red-200",
        textClass: "text-red-500",
        iconClass: "stroke-red-500",
    },
    INFO: {
        icon: InfoIcon,
        class: "bg-gray-300",
        textClass: "text-gray-600",
        iconClass: "stroke-gray-600",
    },
    WARNING: {
        icon: WarningIcon,
        class: "bg-yellow-400",
        textClass: "text-gray-800",
        iconClass: "stroke-gray-800",
    },
}
