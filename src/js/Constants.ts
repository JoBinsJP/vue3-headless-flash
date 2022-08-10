export const FLASH_EVENT_NAME: string = "_flash"

import { OptionsType } from "../types"

export const DEFAULT_OPTIONS: OptionsType = {
    SUCCESS: {
        icon: "../Icons/SuccessIcon.vue",
        class: "bg-green-500",
        textClass: "text-white",
        iconClass: "stroke-[#fff]",
    },
    ERROR: {
        icon: "../Icons/ErrorIcon.vue",
        class: "bg-red-200",
        textClass: "text-red-500",
        iconClass: "stroke-red-500",
    },
    INFO: {
        icon: "../Icons/InfoIcon.vue",
        class: "bg-gray-300",
        textClass: "text-gray-600",
        iconClass: "stroke-gray-600",
    },
    WARNING: {
        icon: "../Icons/WarningIcon.vue",
        class: "bg-yellow-400",
        textClass: "text-gray-800",
        iconClass: "stroke-gray-800",
    },
}
