import { shallowMount, createLocalVue} from "@vue/test-utils";
import Vuex from "vuex";
import { getters } from "@/store";
import data from "@/data/data.json";
import TimeTrackingDashboard from "@/components/TimeTrackingDashboard.vue";
import CardTime from "@/components/cards/CardTime.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const state = {
    timeData: data
}

const store = new Vuex.Store({
    state,
    getters
});

describe("TimeTrackingDashboard.vue", () => {
    it("should create cards from the data.json", () => {
        const wrapper = shallowMount(TimeTrackingDashboard, {
            store, localVue
        });

        const allCards = wrapper.findAllComponents(CardTime);
        const categories = getters.getCategories(state, getters);
        expect(allCards.length).toBe(categories.length);
        for (let i = 0; i < allCards.length; i++) {
            expect(allCards.at(i).props("cardType")).toBe(categories[i]);
        }
    });
});
