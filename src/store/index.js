import Vue from "vue";
import Vuex from "vuex";
import data from "@/data/data.json";
Vue.use(Vuex);

const state = {
    timeData: data,
    currentTimeframe: "weekly"
}

export const getters = {
    getCategories: (state) => state.timeData.map(el => el.title.replace(" ", "-").toLowerCase()),
    getSingleCategory: (state) => (categoryName) => {
        return state.timeData.filter(el => el.title.replace(" ", "-").toLowerCase() === categoryName)[0];
    }
}

export const mutations = {
    changeTimeframe(state, newTimeframe) {
        state.currentTimeframe = newTimeframe;
    }
}

export const actions = {
    changeTimeframe(context, newTimeframe) {
        context.commit("changeTimeframe", newTimeframe);
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
