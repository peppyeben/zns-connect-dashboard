<template>
    <div class="flex flex-col space-y-5 p-4 justify-center items-center w-full">
        <p class="text-2xl font-bold">Registration Change</p>
        <select
            name="regChangeTimeframe"
            ref="regChangeTimeframe"
            class="p-3 rounded-lg outline-none border border-[#333333] border-opacity-70"
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
