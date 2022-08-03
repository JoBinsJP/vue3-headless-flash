<template>
    <div class="container mx-auto py-6">
        <div class="w-2/3 mx-auto">
            <div class="w-full flex items-center mb-2">
                <label class="w-40 font-bold text-lg">Message:</label>
                <input type="text" v-model="data.message" class="flex-1 border rounded-md px-6 py-3">
            </div>
            <div class="w-full flex items-center mb-2">
                <label class="w-40 font-bold text-lg">Type:</label>
                <select v-model="data.type" class="flex-1 border rounded-md px-6 py-3">
                    <option :value="FlashType.SUCCESS">{{ FlashType.SUCCESS }}</option>
                    <option :value="FlashType.ERROR">{{ FlashType.ERROR }}</option>
                    <option :value="FlashType.WARNING">{{ FlashType.WARNING }}</option>
                    <option :value="FlashType.INFO">{{ FlashType.INFO }}</option>
                </select>
            </div>
            <div class="w-full flex items-center mb-2">
                <label class="w-40 font-bold text-lg">Timeout:</label>
                <input type="number" v-model="data.timeout" class="flex-1 border rounded-md px-6 py-3">
            </div>
            <div class="flex justify-end">
                <button type="button" @click="$emit('flash', data)" class="bg-yellow-500 px-6 py-3 rounded-md">Flash</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent, reactive } from "vue"

    import { FlashType } from "../../src/types/index"

    export default defineComponent({
        name: "Setting",
        setup() {
            const data = reactive({
                type: FlashType.SUCCESS,
                message: "Hi there",
                timeout: 2000,
            })

            return {
                data,
                FlashType,
            }
        },
    })
</script>
