<template>
    <div
        class="flex flex-col flex-grow justify-start items-start space-y-5 px-5 py-3 rounded-lg border border-[#adaeb0]"
    >
        <p class="flex justify-between items-center w-full">
            <img
                :src="
                    marketplace.marketplace == 'Element'
                        ? 'element.png'
                        : 'opensea-logo.svg'
                "
                alt=""
                class="w-5"
            />
            <img
                :src="`${String(marketplace.chain)
                    .split(' ')[0]
                    .toLowerCase()}.png`"
                alt=""
                class="w-5"
            />
        </p>
        <p class="flex justify-center">
            {{ Number(marketplace.volume / 1000).toFixed(2) }}
            {{ marketplace.currency == "BNB" ? "BNB" : "Ξ " }}
        </p>
    </div>
</template>

<script>
export default {
    name: "NFTMPCards",
    props: {
        marketplace: {
            type: Object,
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
