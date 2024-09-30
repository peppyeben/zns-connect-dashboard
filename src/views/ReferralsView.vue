<template>
    <div class="w-full flex flex-col px-14 py-8 bg-[#ebebeb]">
        <NavBar></NavBar>
        <EarningsByChain></EarningsByChain>
        <div class="flex flex-row justify-center items-center space-x-8">
            <ReferralCommissionChange></ReferralCommissionChange>
            <TotalUsers></TotalUsers>
        </div>
        <ChainComparisonReferrals></ChainComparisonReferrals>
    </div>
</template>

<script>
import ChainComparisonReferrals from "@/components/ChainComparisonReferrals.vue";
import EarningsByChain from "@/components/EarningsByChain.vue";
import NavBar from "@/components/NavBar.vue";
import ReferralCommissionChange from "@/components/ReferralCommissionChange.vue";
import TotalUsers from "@/components/TotalUsers.vue";

export default {
    name: "ReferralView",
    components: {
        NavBar,
        EarningsByChain,
        ReferralCommissionChange,
        TotalUsers,
        ChainComparisonReferrals,
    },
};
</script>
