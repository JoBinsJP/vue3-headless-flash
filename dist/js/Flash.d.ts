import { FlashType } from "../types/FlashType";
declare class Flash {
    static success(message: string): void;
    static error(message: string): void;
    static info(message: string): void;
    static warning(message: string): void;
    static flash(message: string, type: FlashType): void;
}
export default Flash;
//# sourceMappingURL=Flash.d.ts.map