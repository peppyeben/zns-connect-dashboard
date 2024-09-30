<template>
    <div class="flex flex-col space-y-5 p-4 justify-center items-center w-full">
        <p class="text-2xl font-bold">Referral Commission Change</p>
        <ReferralCommissionChangeChart
            :referralCommissionChangeTF="referralCommissionChangeTF"
        ></ReferralCommissionChangeChart>
    </div>
</template>

<script>
import { computed } from "vue";
import ReferralCommissionChangeChart from "./ReferralCommissionChangeChart.vue";
import { useStore } from "vuex";

export default {
    name: "ReferralCommissionChange",
    components: {
        ReferralCommissionChangeChart,
    },
    setup() {
        const store = useStore();

        const data = computed(() => store.getters.GET_DATA);

        return {
            referralCommissionChangeTF: data.value.referralCommission,
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
