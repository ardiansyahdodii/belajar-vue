<template>
    <div>
        PINIA PAGES
        <div>
            <div>
                {{ countStore.count }}
            </div>
            <div>
                <button @click="countStore.increment">Count ++</button>
            </div>
            <div>
                {{ countStore.doubleCount }}
            </div>
        </div>
    </div>
</template>

<script>
import { useCounterStore } from "../store/countStore"

export default {
    setup() {
        const countStore = useCounterStore()

        return {countStore}
    },
}
</script>