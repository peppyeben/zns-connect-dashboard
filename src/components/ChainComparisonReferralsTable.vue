<template>
    <div class="flex flex-col w-full mx-auto">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full border-collapse">
                        <thead class="border-b border-[#c9c9c9] font-medium">
                            <tr>
                                <th scope="col" class="px-6 py-4 text-left">
                                    Chain
                                </th>
                                <th scope="col" class="px-6 py-4 text-right">
                                    Commission
                                </th>
                                <th scope="col" class="px-6 py-4 text-right">
                                    Users
                                </th>
                                <th scope="col" class="px-6 py-4 text-right">
                                    Average
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="chain in chainRefs"
                                :key="chain.chain"
                                class="border-b border-neutral-200"
                            >
                                <td class="whitespace-nowrap px-6 py-4">
                                    {{ chain.chain }}
                                </td>
                                <td
                                    class="whitespace-nowrap px-6 py-4 text-right"
                                >
                                    {{ chain.commission }}
                                </td>
                                <td
                                    class="whitespace-nowrap px-6 py-4 text-right"
                                >
                                    {{ chain.users }}
                                </td>
                                <td
                                    class="whitespace-nowrap px-6 py-4 text-right"
                                >
                                    {{ chain.averageCommissionPerUser }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChainComparisonReferralsTable",
    props: {
        chainRefs: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        console.log(props.chainRefs);
        return {};
    },
};
</script>
