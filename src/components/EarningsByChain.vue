<template>
    <div
        class="flex flex-col space-y-4 px-4 py-6 justify-start items-start w-full"
    >
        <p class="text-2xl font-bold pt-8">Earnings (By Chain)</p>
        <EarningsByChainTable
            :totalEarningsByChain="totalEarningsByChain"
        ></EarningsByChainTable>
    </div>
</template>

<script>
import { useStore } from "vuex";
import EarningsByChainTable from "./EarningsByChainTable.vue";
import { computed } from "vue";

export default {
    name: "EarningsByChain",
    components: {
        EarningsByChainTable,
    },
    setup() {
        const store = useStore();

        const data = computed(() => store.getters.GET_DATA);

        return {
            totalEarningsByChain: data.value.totalEarningsByChain,
        };
    },
};
</script>
