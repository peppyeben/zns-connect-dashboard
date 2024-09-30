<template>
    <div class="flex justify-start items-start" style="height: 20rem">
        <canvas
            ref="totalUsersChart"
            class="w-full"
            style="height: 100%"
        ></canvas>
    </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { Chart } from "chart.js/auto";

export default {
    name: "TotalUsersChart",
    props: {
        totalUsersTF: {
            type: Object,
            default: () => {},
        },
    },
    setup(props) {
        const totalUsersChart = ref(null);
        let chartInstance = null;

        const renderChart = () => {
            if (!totalUsersChart.value) return;
            if (chartInstance) {
                chartInstance.destroy();
            }

            const totalusers = props.totalUsersTF?.changes || {};

            const labels = Object.keys(totalusers).filter(
                (key) => key !== "allTime"
            );
            const data = labels.map((label) => totalusers[label]);

            chartInstance = new Chart(totalUsersChart.value, {
                type: "doughnut",
                data: {
                    labels: labels.map((label) => label),
                    datasets: [
                        {
                            label: "Referral Commission Change",
                            data: data,
                            backgroundColor: generateRandomColors(),
                            hoverOffset: 1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false,
                            labels: {
                                color: "#333333",
                            },
                        },
                        tooltip: {
                            enabled: true,
                            mode: "index",
                            callbacks: {
                                label: (tooltipItem) => {
                                    return `${tooltipItem.raw.toFixed(2)}`;
                                },
                            },
                        },
                    },
                },
            });
        };

        onMounted(() => {
            renderChart();
        });

        function generateRandomColors() {
            const baseHue = 70;
            const colors = [];

            for (let i = 0; i < 20; i++) {
                const saturation = Math.floor(Math.random() * 11) + 5;
                const lightness = Math.floor(Math.random() * 21) + 20;
                colors.push(`hsl(${baseHue}, ${saturation}%, ${lightness}%)`);
            }

            return colors;
        }

        watch(
            () => props.registrationChangeTF,
            (newVal, oldVal) => {
                if (newVal !== oldVal) {
                    renderChart();
                }
            },
            { immediate: true }
        );

        return {
            totalUsersChart,
        };
    },
};
</script>
