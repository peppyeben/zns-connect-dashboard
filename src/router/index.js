import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/GeneralView.vue"),
    },
    {
        path: "/referrals",
        name: "referrals",
        component: () => import("../views/ReferralsView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
