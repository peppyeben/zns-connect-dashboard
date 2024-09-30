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
    name: "RegistrationChangeChart",
    props: {
        registrationChangeTF: {
            type: Object,
            default: () => {},
        },
    },
    setup(props) {
        const regChangeChart = ref(null);
        let chartInstance = null;

        const renderChart = () => {
            if (!regChangeChart.value) return; // Ensure canvas is available
            if (chartInstance) {
                chartInstance.destroy();
            }
            chartInstance = new Chart(regChangeChart.value, {
                type: "doughnut",
                data: {
                    labels: ["New Registrations", "Renewals", "Transfers"],
                    datasets: [
                        {
                            label: "Registration Change",
                            data: [
                                props.registrationChangeTF[0]
                                    ?.newRegistrations || 0,
                                props.registrationChangeTF[0]?.renewals || 0,
                                props.registrationChangeTF[0]?.transfers || 0,
                            ],
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
        };

        onMounted(() => {
            renderChart();
        });

        function generateRandomColors() {
            const baseHue = 70; // Base hue for the color #c9fc01
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
            regChangeChart,
        };
    },
};
</script>
