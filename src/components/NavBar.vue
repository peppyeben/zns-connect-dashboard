<template>
    <!-- Main navigation container -->
    <nav
        class="flex-no-wrap relative flex w-full items-center justify-between bg-transparent py-4 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4"
    >
        <div class="flex w-full flex-wrap items-center justify-between px-3">
            <img src="favicon.png" alt="" class="w-10" />
            <div class="flex space-x-4">
                <router-link
                    :to="{ name: 'home' }"
                    class="py-2 px-4 rounded-lg hover:bg-[#dedede]"
                    >General</router-link
                >
                <router-link
                    :to="{ name: 'referrals' }"
                    class="py-2 px-4 rounded-lg hover:bg-[#dedede]"
                    >Referrals</router-link
                >
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
};
</script>
