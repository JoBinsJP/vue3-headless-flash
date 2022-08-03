import { FlashType } from "../types/"
import emitter from "../utils/emitter"
import { FLASH_EVENT_NAME } from "./Constants"

export default class Flash {
    static success(message: string) {
        Flash.flash(message, FlashType.SUCCESS)
    };

    static error(message: string) {
        Flash.flash(message, FlashType.ERROR)
    };

    static info(message: string) {
        Flash.flash(message, FlashType.INFO)
    };

    static warning(message: string) {
        Flash.flash(message, FlashType.WARNING)
    };

    static flash(message: string, type: keyof typeof FlashType) {
        const timestamp = new Date().getTime()

        emitter.emit(FLASH_EVENT_NAME, {
            timestamp: timestamp,
            type: type,
            message,
        })
    };
}
