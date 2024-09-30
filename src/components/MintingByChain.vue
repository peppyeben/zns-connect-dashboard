<template>
    <div class="relative w-full">
        <div
            v-for="(minting, index) in mintingByChain"
            :key="index"
            v-show="currentIndex === index"
            class="flex flex-col flex-grow w-full justify-center items-center space-y-3 p-3 rounded-lg border border-[#e5e8ed]"
        >
            <p class="text-[#000] font-bold">Minting by Chain</p>
            <p class="text-[#000] font-medium">{{ minting.chain }}</p>
            <p class="text-[#000] font-bold">
                {{ formatNumber(minting.count) }}
            </p>
            <p :class="randomInt % 2 === 0 ? 'text-green-600' : 'text-red-600'">
                {{ randomInt % 2 === 0 ? randomFixed : "-" + randomFixed }}
                %
            </p>
        </div>

        <div
            class="absolute bottom-[25%] left-0 right-0 flex justify-between px-5"
        >
            <button
                @click="prevItem"
                :disabled="currentIndex === 0"
                class="bg-gray-300 p-3 rounded-full hover:bg-opacity-85"
            >
                l
            </button>
            <button
                @click="nextItem"
                :disabled="currentIndex === mintingByChain.length - 1"
                class="bg-gray-300 p-3 rounded-full hover:bg-opacity-85"
            >
                R
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "MintingByChain",
    props: {
        mintingByChain: {
            type: Array,
        },
    },
    setup(props) {
        const currentIndex = ref(0);

        const randomInt = ref(Math.floor(Math.random() * 10));
        const randomFixed = ref(Number(Math.random() * 10).toFixed(2));

        function formatNumber(num) {
            if (num >= 1000000) {
                return (num / 1000000).toFixed(2).replace(/\.?0+$/, ".0") + "M";
            } else if (num >= 1000) {
                return (num / 1000).toFixed(2).replace(/\.?0+$/, ".0") + "K";
            } else {
                return num.toString();
            }
        }

        function nextItem() {
            if (currentIndex.value < props.mintingByChain.length - 1) {
                currentIndex.value++;
                randomInt.value = Math.floor(Math.random() * 10);
                randomFixed.value = Number(Math.random() * 10).toFixed(2);
            }
        }
        function prevItem() {
            if (currentIndex.value > 0) {
                currentIndex.value--;
                randomInt.value = Math.floor(Math.random() * 10);
                randomFixed.value = Number(Math.random() * 10).toFixed(2);
            }
        }

        return {
            formatNumber,
            currentIndex,
            nextItem,
            prevItem,
            randomInt,
            randomFixed,
        };
    },
};
</script>
