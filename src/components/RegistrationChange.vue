<template>
    <div class="flex flex-col space-y-5 p-4 justify-center items-center w-full">
        <p class="text-2xl font-bold">Registration Change</p>
        <div class="relative">
            <select
                name="regChangeTimeframe"
                ref="regChangeTimeframe"
                class="p-3 rounded-lg outline-none cursor-pointer border border-[#333333] border-opacity-70 appearance-none custom-select"
                v-model="selectedTimeframe"
                @change="updateChart"
            >
                <option value="" disabled>Select a timeframe</option>
                <option
                    v-for="change in registrationChange"
                    :key="change.timeframe"
                    :value="change.timeframe"
                >
                    {{
                        change.timeframe == "allTime"
                            ? "All Time"
                            : change.timeframe
                    }}
                </option>
            </select>
            <span class="custom-arrow"></span>
        </div>
        <RegistrationChangeChart
            :registrationChangeTF="registrationChangeTF"
        ></RegistrationChangeChart>
    </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import RegistrationChangeChart from "./RegistrationChangeChart.vue";
import { useStore } from "vuex";

export default {
    name: "RegistrationChange",
    components: {
        RegistrationChangeChart,
    },
    setup() {
        const store = useStore();

        const selectedTimeframe = ref("1h");
        const registrationChangeTF = ref({});
        const data = computed(() => store.getters.GET_DATA);

        const updateChart = () => {
            registrationChangeTF.value = data.value.registrationChange.filter(
                (x) => x.timeframe == selectedTimeframe.value
            );
        };

        onMounted(() => {
            updateChart();
        });

        return {
            registrationChange: data.value.registrationChange,
            registrationChangeTF,
            selectedTimeframe,
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
