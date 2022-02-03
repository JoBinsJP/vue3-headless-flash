import emitter from "tiny-emitter/instance"
import { FLASH_EVENT_NAME } from "./Constants"
import { FlashType } from "../types/FlashType"
class Flash {
    static success(message: String) {
        Flash.flash(message, FlashType.SUCCESS)
    };

    static error(message: String) {
        emitter.emit("notification", {
            type: "error",
            message,
        })
    };

    static info(message: String) {
        emitter.emit("notification", {
            type: "info",
            message,
        })
    };

    static warning(message: String) {
        emitter.emit("notification", {
            type: "warning",
            message,
        })
    };

    static flash(message: String, type: FlashType) {
        emitter.emit(FLASH_EVENT_NAME, {
            type: type,
            message,
        })
    };
}

export default Flash
