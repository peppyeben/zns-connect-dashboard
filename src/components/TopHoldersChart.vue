<template>
    <div class="flex justify-start items-stretch w-full" style="height: 20rem">
        <div
            class="flex justify-start items-stretch w-full"
            style="height: 20rem"
        >
            <canvas
                ref="regChangeChart"
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
    name: "TopHoldersChart",
    props: {
        topHoldersTF: {
            // type: Array, // Make sure this reflects the correct type
            // required: true,
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

                const labels = currentData.map((holder) =>
                    formatAddress(holder.address)
                ); // Extract addresses
                const data = currentData.map((holder) => holder.domainCount); // Extract domain counts

                chartInstance = new Chart(regChangeChart.value, {
                    type: "bar",
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: "Domain Count",
                                data: data,
                                backgroundColor: generateRandomColors(),
                                hoverOffset: 4,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
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
                            },
                        },
                    },
                });
            }
        };

        onMounted(() => {
            // regChangeChart.value.instance.resize();
            renderChart();
        });

        function formatAddress(address) {
            // Check if the address is valid
            if (typeof address === "string" && address.length > 4) {
                const firstTwo = address.slice(0, 2);
                const lastTwo = address.slice(-2);
                return `${firstTwo}...${lastTwo}`;
            }
            return "Invalid address";
        }

        function generateRandomColors() {
            const baseHue = Math.floor(Math.random() * 360); // Random hue between 0-360
            const colors = [];

            for (let i = 0; i < 20; i++) {
                const saturation = Math.floor(Math.random() * 11) + 5;
                const lightness = Math.floor(Math.random() * 21) + 20;
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
