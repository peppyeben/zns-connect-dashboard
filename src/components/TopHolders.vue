<template>
    <div class="flex flex-col space-y-5 p-4 justify-center items-center w-full">
        <p class="text-2xl font-bold">Top Holders</p>
        <div class="relative">
            <select
                name="regChangeTimeframe"
                ref="regChangeTimeframe"
                class="p-3 rounded-lg outline-none cursor-pointer border border-[#333333] border-opacity-70 appearance-none custom-select"
                v-model="selectedChain"
                @change="updateChart"
            >
                <option value="" disabled>Select Chain</option>
                <option
                    v-for="holders in topHolders"
                    :key="holders.chain"
                    :value="holders.chain"
                >
                    {{ holders.chain }}
                </option>
            </select>
            <span class="custom-arrow"></span>
        </div>

        <TopHoldersChart :topHoldersTF="topHoldersTF"></TopHoldersChart>
    </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import TopHoldersChart from "./TopHoldersChart.vue";
import { useStore } from "vuex";

export default {
    name: "TopHolders",
    components: {
        TopHoldersChart,
    },
    setup() {
        const store = useStore();

        const selectedChain = ref("Ethereum");
        const topHoldersTF = ref({});
        const data = computed(() => store.getters.GET_DATA);

        const updateChart = () => {
            topHoldersTF.value = data.value.topHolders.filter(
                (x) => x.chain == selectedChain.value
            );
            // console.log(topHoldersTF.value);
        };

        onMounted(() => {
            updateChart();
        });

        return {
            topHolders: data.value.topHolders,
            topHoldersTF,
            selectedChain,
            updateChart,
        };
    },
};
</script>

<style scoped>
.custom-select {
    background-image: none;
    padding-right: 30px;
}

.custom-arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #333;
    pointer-events: none;
}
</style>
