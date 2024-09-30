<template>
    <div class="flex flex-col space-y-4 p-4 justify-start items-start w-full">
        <p class="text-2xl font-bold">Minting (24h)</p>
        <MintingHoursChart :minting24h="minting24h"></MintingHoursChart>
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
