<template>
    <div
        class="w-full max-w-7xl mx-auto flex flex-col px-14 py-5 space-y-11 bg-[#ebebeb]"
    >
        <NavBar></NavBar>
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
import NavBar from "@/components/NavBar.vue";
import NftMPVolume from "@/components/NftMPVolume.vue";
import RegistrationChange from "@/components/RegistrationChange.vue";
import TopHolders from "@/components/TopHolders.vue";

export default {
    name: "GeneralView",
    components: {
        GeneralHero,
        MintingHours,
        RegistrationChange,
        TopHolders,
        NftMPVolume,
        NavBar,
    },
};
</script>
