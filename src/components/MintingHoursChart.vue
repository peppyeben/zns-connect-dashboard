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
                            backgroundColor: "transparent", // Optional: Use a transparent background if needed
                            borderRadius: "1rem",
                            tension: 0.4,
                            pointRadius: 0,
                            borderColor: "#333333", // Line color
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            grid: {
                                display: false,
                            },
                        },
                        y: {
                            beginAtZero: true,
                            grid: {
                                display: false,
                            },
                        },
                    },
                    responsive: true,
                    color: "white",
                    plugins: {
                        legend: {
                            labels: {
                                color: "#333333",
                            },
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
