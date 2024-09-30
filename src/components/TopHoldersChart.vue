<template>
    <div class="flex justify-start items-start" style="height: 20rem">
        <canvas
            ref="regChangeChart"
            class="w-full"
            style="height: 100%"
        ></canvas>
    </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { Chart } from "chart.js/auto";

export default {
    name: "TopHoldersChart",
    props: {
        topHoldersTF: {
            type: Array, // Make sure this reflects the correct type
            required: true,
        },
    },
    setup(props) {
        const regChangeChart = ref(null);
        let chartInstance = null;

        const renderChart = () => {
            if (!regChangeChart.value) return; // Ensure canvas is available
            if (chartInstance) {
                chartInstance.destroy(); // Destroy previous instance if it exists
            }

            // Check if topHoldersTF has data
            if (props.topHoldersTF.length > 0) {
                const currentData = props.topHoldersTF[0].holders; // Get the holders for the selected chain

                const labels = currentData.map((holder) => holder.address); // Extract addresses
                const data = currentData.map((holder) => holder.domainCount); // Extract domain counts

                chartInstance = new Chart(regChangeChart.value, {
                    type: "polarArea",
                    data: {
                        labels: labels.slice(0, 10),
                        datasets: [
                            {
                                label: "Domain Count",
                                data: data.slice(0, 10),
                                backgroundColor: generateRandomColors(),
                                hoverOffset: 4,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false,
                                labels: {
                                    color: "#333333", // Legend text color
                                },
                            },
                            tooltip: {
                                enabled: true, // Enable tooltips on hover
                                mode: "index", // Show tooltip for all items at the hovered index
                            },
                        },
                    },
                });
            }
        };

        onMounted(() => {
            renderChart();
        });

        function generateRandomColors() {
            const baseHue = Math.floor(Math.random() * 360); // Random hue between 0-360
            const colors = [];

            for (let i = 0; i < 20; i++) {
                const saturation = Math.floor(Math.random() * 51) + 50; // Random saturation between 50-100
                const lightness = Math.floor(Math.random() * 21) + 10; // Random lightness between 10-30 for darker colors
                colors.push(`hsl(${baseHue}, ${saturation}%, ${lightness}%)`);
            }

            return colors;
        }

        watch(
            () => props.topHoldersTF,
            (newVal, oldVal) => {
                if (newVal !== oldVal) {
                    renderChart(); // Re-render the chart when the prop changes
                }
            },
            { immediate: true }
        );

        return {
            regChangeChart,
        };
    },
};
</script>
