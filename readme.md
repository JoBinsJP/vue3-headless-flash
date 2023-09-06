# Vue 3 Headless Flash (Toaster)

Headless refers to no css by default at all. It allows you to flash the message with your custom template as you want.

> Demo: [https://vue3-headless-flash.netlify.app/](https://vue3-headless-flash.netlify.app)

### Installation

```shell
yarn add vue3-headless-flash
```

### Uses

##### Basic uses

Step 1: Import the `FlashContainer` and `Flash`

```vue
// App.vue

<script>
    import { defineComponent } from "vue"
    import { Flash, FlashContainer } from "vue3-headless-flash"
    import "vue3-headless-flash/dist/style.css"

    export default defineComponent({
        components: {
            FlashContainer
        },
        setup() {
            return {
                Flash
            }
        }
    })
</script>
```
Step 2: Place the `FlashContainer` component in bash layout. Addling a button as well to demonstrate the flash action.

```vue

<template>
    <button @click="Flash.success('Hello I am success')"></button>
    <FlashContainer/>
</template>
```


Complete Example Looks Like:

```vue
<template>
    <button @click="Flash.success('Hello I am success')"></button>
    <FlashContainer/>
</template>
<script>
    import { defineComponent } from "vue"
    import { Flash, FlashContainer } from "vue3-headless-flash"

    export default defineComponent({
        components: {
            FlashContainer
        },
        setup() {
            return {
                Flash
            }
        }
    })
</script>
```

##### Custom Layout

```vue
<template>
    <FlashContainer
        :option="OPTIONS"
        :timeout="5000"
        wrapper-class="absolute w-[200px] right-[20px] bottom-[20px]"
        v-slot="slotProps">
        <div class="relative flex justify-between rounded-md px-6 py-3 mb-2" :class="slotProps.option.class">
            <div class="flex items-center">
                <button type="button" @click.stop="slotProps.click(slotProps.flash.timestamp)">
                    &times;
                </button>
                <div class="ml-2" :class="slotProps.option.textClass">
                    {{ slotProps.flash.message }}
                </div>
            </div>
            <component :is="slotProps.option.icon" class="w-6 h-6" :class="slotProps.option.iconClass"/>
        </div>
    </FlashContainer>
</template>
<script setup>
    import { SucessIcon }      from "./IconPath"
    import { ErrorIcon }       from "./IconPath"
    import { WarningIcon }     from "./IconPath"
    import { InfoIcon }        from "./IconPath"

    const OPTIONS = {
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
        }
    }
</script>
```
> Here all the options properties you have passed as params will access through slot's properties.
## License

MIT © [https://github.com/JoBinsJP/vue3-headless-flash](https://github.com/JoBinsJP/vue3-headless-flash)
