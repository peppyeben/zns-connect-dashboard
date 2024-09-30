<template>
    <div class="flex flex-col space-y-5 p-4 justify-center items-center w-full">
        <p class="text-2xl font-bold">NFT Volume by Marketplace</p>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full"
        >
            <NFTMPCards
                v-for="mp in mpVol"
                :key="mp.chain"
                :marketplace="mp"
                class="m-2"
            ></NFTMPCards>
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import NFTMPCards from "./NFTMPCards.vue";
import { computed } from "vue";

export default {
    name: "NftMPVolume",
    components: {
        NFTMPCards,
    },
    setup() {
        const store = useStore();

        const data = computed(() => store.getters.GET_DATA);

        return {
            mpVol: data.value.nftMarketplaceVolume,
        };
    },
};
</script>
