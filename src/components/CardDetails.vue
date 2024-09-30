<template>
    <div
        class="flex flex-col flex-grow w-full justify-start items-start space-y-3 p-3 rounded-lg border border-[#e5e8ed]"
    >
        <p class="text-[#000] font-medium">{{ title }}</p>
        <p class="text-[#000] font-bold">{{ formatNumber(overall) }}</p>
        <p class="text-green-600">{{ percentage }} %</p>
    </div>
</template>

<script>
export default {
    name: "CardDetails",
    props: {
        title: {
            type: String,
        },
        percentage: {
            type: String,
        },
        overall: {
            type: Number,
        },
    },
    setup() {
        function formatNumber(num) {
            if (num >= 1000000) {
                return (num / 1000000).toFixed(2).replace(/\.?0+$/, ".0") + "M";
            } else if (num >= 1000) {
                return (num / 1000).toFixed(2).replace(/\.?0+$/, ".0") + "K";
            } else {
                return num.toString();
            }
        }
        return {
            formatNumber,
        };
    },
};
</script>
