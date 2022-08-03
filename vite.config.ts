import vue from "@vitejs/plugin-vue"
import path from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "vue3-headless-flash",
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
    plugins: [
        vue(),
        dts({
            outputDir: "dist",
            exclude: ["example"],
        }),
    ],
})
