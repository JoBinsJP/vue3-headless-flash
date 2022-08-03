<template>
    <div class="container mx-auto py-6">
        <div class="w-2/3 mx-auto flex">
            <h1 class="text-2xl pr-8 border-r border-gray-400">
                <button @click="goto('#basic')"
                        :class="currentRoute==='#basic'?'font-bold underline decoration-sky-500':''">
                    Basic Example
                </button>
            </h1>
            <h1 class="px-8 text-2xl">
                <button @click="goto('#complex')" :class="currentRoute==='#complex'?'font-bold underline':''">Complex Example</button>
            </h1>
        </div>
    </div>
    <transition>
        <div>
            <component :is="ROUTES[currentRoute]"/>
        </div>
    </transition>
</template>
<script lang="ts">
    import { defineComponent, ref } from "vue"
    import Basic from "./Components/Basic.vue"
    import Complex from "./Components/Complex.vue"

    const ROUTES: { [key: string]: any } = {
        "#basic": Basic,
        "#complex": Complex,
    }

    export default defineComponent({
        setup() {
            const currentRoute = ref("#basic")

            const goto = (route: string) => {
                window.location.hash = route
                currentRoute.value = route
            }

            return {
                currentRoute,
                goto,
                ROUTES,
            }
        },
    })
</script>

