<template>
    <div class="w-full flex flex-col px-14 py-8">
        <GeneralHero></GeneralHero>
        <MintingHours></MintingHours>
        <RegistrationChange></RegistrationChange>
        <TopHolders></TopHolders>
        <NftMPVolume></NftMPVolume>
    </div>
</template>

<script>
import GeneralHero from "@/components/GeneralHero.vue";
import MintingHours from "@/components/MintingHours.vue";
import NftMPVolume from "@/components/NftMPVolume.vue";
import RegistrationChange from "@/components/RegistrationChange.vue";
import TopHolders from "@/components/TopHolders.vue";

export default {
    name: "HomeView",
    components: {
        GeneralHero,
        MintingHours,
        RegistrationChange,
        TopHolders,
        NftMPVolume,
    },
};
</script>
