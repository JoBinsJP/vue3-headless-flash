<template>
    <div class="container mx-auto py-6">
        <div class="w-2/3 mx-auto flex">
            <h1 class="text-2xl pr-8 border-r border-gray-400" :class="currentRoute==='/'?'font-bold underline':''">
                <a href="/">Basic Example</a>
            </h1>
            <h1 class="px-8 text-2xl" :class="currentRoute==='/complex'?'font-bold underline':''">
                <a href="/complex">Complex Example</a>
            </h1>
        </div>
    </div>
    <transition>
        <component :is="ROUTES[currentRoute]"/>
    </transition>
</template>
<script lang="ts">
    import {
        defineComponent,
        ref,
    }                 from "vue"
    import Basic   from "./Components/Basic.vue"
    import Complex from "./Components/Complex.vue"

    const ROUTES= {
        "/" : Basic,
        "/complex" : Complex,
    }

    export default defineComponent({
        setup() {
            const currentRoute = ref(window.location.pathname)

            return {
                currentRoute,
                ROUTES,
            }
        },
    })
</script>

