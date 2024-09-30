<template>
    <div class="relative w-full">
        <!-- Display the current holder data -->
        <div
            v-for="(holder, index) in totalHolders"
            :key="index"
            v-show="currentIndex === index"
            class="flex flex-col flex-grow w-full justify-center items-center space-y-3 p-3 rounded-lg border border-[#adaeb0]"
        >
            <p class="text-[#000] font-bold">Unique holders</p>
            <p class="text-[#000] font-medium">{{ holder.chain }}</p>
            <p class="text-[#000] font-bold">
                {{ formatNumber(holder.count) }}
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
                class="rounded-full px-3 py-3 hover:bg-[#adaeb0] hover:bg-opacity-40"
                :class="
                    currentIndex === 0 ? 'cursor-not-allowed' : 'cursor-pointer'
                "
            >
                <img src="arrow-left.png" alt="" class="w-5" />
            </button>
            <button
                @click="nextItem"
                :disabled="currentIndex === totalHolders.length - 1"
                class="rounded-full px-3 py-3 hover:bg-[#adaeb0] hover:bg-opacity-40"
                :class="
                    currentIndex === totalHolders.length - 1
                        ? 'cursor-not-allowed'
                        : 'cursor-pointer'
                "
            >
                <img src="arrow-right.png" alt="" class="w-5" />
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "CardDetailsHoldersByChain",
    props: {
        totalHolders: {
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
            if (currentIndex.value < props.totalHolders.length - 1) {
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
