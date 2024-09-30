import { createStore } from "vuex";

import DOE_DATA from "@/utils/doe.json";

export default createStore({
    state: {
        data: DOE_DATA,
    },
    getters: {
        GET_DATA: (state) => state.data,
    },
    mutations: {},
    actions: {},
    modules: {},
});
