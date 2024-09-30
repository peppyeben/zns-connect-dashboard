<template>
    <div class="flex flex-col space-y-5 p-4 justify-center items-center w-full">
        <p class="text-2xl font-bold">Total Users</p>
        <TotalUsersChart :totalUsersTF="totalUsersTF"></TotalUsersChart>
    </div>
</template>

<script>
import { computed } from "vue";
import TotalUsersChart from "./TotalUsersChart.vue";
import { useStore } from "vuex";

export default {
    name: "TotalUsers",
    components: {
        TotalUsersChart,
    },
    setup() {
        const store = useStore();

        const data = computed(() => store.getters.GET_DATA);

        return {
            totalUsersTF: data.value.totalUsers,
        };
    },
};
</script>
