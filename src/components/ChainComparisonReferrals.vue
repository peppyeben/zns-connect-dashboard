<template>
    <div class="flex flex-col space-y-5 p-4 justify-center items-center w-full">
        <p class="text-2xl font-bold">Chains</p>
        <ChainComparisonReferralsTable
            :chainRefs="chainRefs"
        ></ChainComparisonReferralsTable>
    </div>
</template>

<script>
import { computed } from "vue";
import ChainComparisonReferralsTable from "./ChainComparisonReferralsTable.vue";
import { useStore } from "vuex";

export default {
    name: "ChainComparisonReferrals",
    components: {
        ChainComparisonReferralsTable,
    },
    setup() {
        const store = useStore();

        const data = computed(() => store.getters.GET_DATA);

        return {
            chainRefs: data.value.chainComparison,
        };
    },
};
</script>
