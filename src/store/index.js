import Vue from "vue";
import Vuex from "vuex";
import data from "@/data/data.json";
Vue.use(Vuex);

const state = {
    timeData: data,
    currentTimeframe: "weekly"
}

export const getters = {
    toLowerCaseVersion: () => (text) => text.replace(" ", "-").toLowerCase(),
    getCategories: (state, getters) => state.timeData.map(el => getters.toLowerCaseVersion(el.title)),
    getSingleCategory: (state, getters) => (categoryName) => {
        return state.timeData.filter(el => getters.toLowerCaseVersion(el.title) === categoryName)[0];
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
