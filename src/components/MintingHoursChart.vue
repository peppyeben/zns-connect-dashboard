<template>
    <canvas ref="mintingChart" class="w-full md:w-[70%] lg:w-[70%]"></canvas>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { Chart } from "chart.js/auto";

export default {
    name: "MintingHoursChart",
    props: {
        minting24h: {
            type: Object,
            default: () => {},
        },
    },
    setup(props) {
        const mintingChart = ref(null);

        let chartInstance = null;

        const renderChart = () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
            chartInstance = new Chart(mintingChart.value, {
                type: "line",
                data: {
                    labels: props.minting24h.hourlyBreakdown.map(
                        (x) => `${24 - Number(x.hour)}h`
                    ),
                    datasets: [
                        {
                            label: "No. of Minted Domains",
                            data: props.minting24h.hourlyBreakdown.map(
                                (x) => x.count
                            ),
                            borderWidth: 2,
                            backgroundColor: "transparent",
                            borderRadius: "1rem",
                            tension: 0.4,
                            pointRadius: 1,
                            borderColor: "#4c4c4c",
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            grid: {
                                display: false,
                            },
                            ticks: {
                                color: "#000",
                            },
                        },
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: "#333333",
                                borderColor: "#000000",
                                lineWidth: 0.3,
                            },
                            ticks: {
                                color: "#000",
                            },
                        },
                    },
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false, // Hides the legend
                        },
                    },
                },
            });
        };

        onMounted(() => {
            renderChart();
        });

        watch(
            () => props.minting24h,
            (newVal, oldVal) => {
                if (newVal !== oldVal) {
                    renderChart();
                }
            },
            { immediate: true }
        );

        return {
            mintingChart,
        };
    },
};
</script>
