<template>
    <div class="w-full flex flex-col px-14 py-8">
        <GeneralHero></GeneralHero>
        <MintingHours></MintingHours>
        <div class="flex justify-center items-center w-full">
            <RegistrationChange></RegistrationChange>
            <TopHolders></TopHolders>
        </div>
    </div>
</template>

<script>
import GeneralHero from "@/components/GeneralHero.vue";
import MintingHours from "@/components/MintingHours.vue";
import RegistrationChange from "@/components/RegistrationChange.vue";
import TopHolders from "@/components/TopHolders.vue";

export default {
    name: "HomeView",
    components: {
        GeneralHero,
        MintingHours,
        RegistrationChange,
        TopHolders,
    },
};
</script>
