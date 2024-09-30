<template>
    <div class="flex flex-col justify-start items-start w-full p-4 space-y-4">
        <p class="text-2xl font-bold">Overview</p>
        <section class="flex w-full justify-start items-stretch space-x-4">
            <CardDetails
                :percentage="percentage"
                :overall="overall"
                :title="title"
            ></CardDetails>
            <MintingByChain :mintingByChain="mintingByChain"></MintingByChain>
            <CardDetailsHoldersByChain
                :totalHolders="totalHolders"
            ></CardDetailsHoldersByChain>
        </section>
    </div>
</template>

<script>
import { useStore } from "vuex";
import CardDetails from "./CardDetails.vue";
import { computed } from "vue";
import CardDetailsHoldersByChain from "./CardDetailsHoldersByChain.vue";
import MintingByChain from "./MintingByChain.vue";

export default {
    name: "GeneralHero",
    components: {
        CardDetails,
        CardDetailsHoldersByChain,
        MintingByChain,
    },
    setup() {
        const store = useStore();

        const data = computed(() => store.getters.GET_DATA);

        console.log(data.value);

        return {
            percentage: Number(Math.random() * 10).toFixed(2),
            overall: data.value.totalMinting.overall,
            title: "Total Minting",
            totalHolders: data.value.totalHolders,
            mintingByChain: data.value.totalMinting.byChain,
        };
    },
};
</script>
