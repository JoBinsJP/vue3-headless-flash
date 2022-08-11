import { Component } from "vue"

interface OptionInterface {
    icon: Component | string,
    class: string,
    textClass: string,
    iconClass: string,
}

enum FlashType {
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
    INFO = "INFO",
    WARNING = "WARNING",
}

interface Message {
    timestamp: number,
    type: keyof typeof FlashType,
    message: string
}

type OptionsType = Record<keyof typeof FlashType, OptionInterface>

export { type Message, FlashType, type OptionInterface, type OptionsType }
