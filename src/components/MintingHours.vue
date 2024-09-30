<template>
    <div class="flex flex-col space-y-4 p-4 justify-center items-start w-full">
        <p class="text-2xl font-bold text-center mx-auto">Minting (24h)</p>
        <MintingHoursChart
            :minting24h="minting24h"
            class="w-screen mx-auto"
        ></MintingHoursChart>
    </div>
</template>

<script>
import { useStore } from "vuex";
import MintingHoursChart from "./MintingHoursChart.vue";
import { computed } from "vue";

export default {
    name: "MintingHours",
    components: {
        MintingHoursChart,
    },
    setup() {
        const store = useStore();

        const data = computed(() => store.getters.GET_DATA);

        console.log(data.value);

        return {
            minting24h: data.value.minting24h,
        };
    },
};
</script>
