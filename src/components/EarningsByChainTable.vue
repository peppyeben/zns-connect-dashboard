<template>
    <div class="flex justify-start items-stretch w-full" style="height: 20rem">
        <div
            class="flex justify-start items-stretch w-full"
            style="height: 20rem"
        >
            <canvas
                ref="earningsChart"
                class="w-full h-full"
                style="height: 100%; width: 100%"
            ></canvas>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { Chart } from "chart.js/auto";

export default {
    name: "EarningsByChainTable",
    props: {
        totalEarningsByChain: {
            type: Object,
        },
    },
    setup(props) {
        const earningsChart = ref(null);
        let chartInstance = null;

        const renderChart = () => {
            if (!earningsChart.value) return;
            if (chartInstance) {
                chartInstance.destroy();
            }

            if (props.totalEarningsByChain) {
                const currentData = props.totalEarningsByChain;

                const labels = Object.keys(currentData);
                const data = Object.values(currentData);

                chartInstance = new Chart(earningsChart.value, {
                    type: "bar",
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: "Earnings",
                                data: data,
                                backgroundColor: generateRandomColors(
                                    labels.length
                                ),
                                hoverOffset: 4,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                                grid: {
                                    display: false,
                                },
                                ticks: {
                                    color: "#333333", // Customize the color of the labels on the x-axis
                                },
                            },
                            y: {
                                beginAtZero: true,
                                grid: {
                                    color: "#e5e5e5", // Optional: adjust grid color for better visuals
                                },
                                ticks: {
                                    color: "#333333", // Customize the color of the labels on the y-axis
                                },
                            },
                        },
                        plugins: {
                            legend: {
                                display: false, // Hide the legend if not needed
                                labels: {
                                    color: "#333333",
                                },
                            },
                            tooltip: {
                                enabled: true,
                                mode: "index",
                            },
                        },
                    },
                });
            }
        };

        function generateRandomColors() {
            const baseHue = Math.floor(Math.random() * 360);
            const colors = [];

            for (let i = 0; i < 20; i++) {
                const saturation = Math.floor(Math.random() * 11) + 5;
                const lightness = Math.floor(Math.random() * 21) + 20;
                colors.push(`hsl(${baseHue}, ${saturation}%, ${lightness}%)`);
            }

            return colors;
        }

        onMounted(() => {
            renderChart();
        });

        watch(
            () => props.totalEarningsByChain,
            (newVal, oldVal) => {
                if (newVal !== oldVal) {
                    renderChart();
                }
            },
            { immediate: true }
        );

        return {
            earningsChart,
        };
    },
};
</script>
