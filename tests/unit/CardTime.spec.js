import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { getters } from "@/store";
import CardTime from "@/components/cards/CardTime.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const state = {
    timeData: [
        {
            "title": "Work",
            "timeframes": {
                "daily": {
                    "current": 5,
                    "previous": 7
                },
                "weekly": {
                    "current": 32,
                    "previous": 36
                },
                "monthly": {
                    "current": 103,
                    "previous": 128
                }
            }
        }
    ],
    currentTimeframe: "weekly"
}

const store = new Vuex.Store({
    state,
    getters
});

describe("CardTime.vue", () => {
    it("should create correct classname", () => {
        const wrapper = mount(CardTime, {
            store,
            localVue,
            propsData: {
                cardType: "work"
            }
        });

        expect(wrapper.classes()).toContain("card-time--work-theme");
    });

    it("card should load correct data", () => {
        const wrapper = mount(CardTime, {
            store,
            localVue,
            propsData: {
                cardType: "work"
            }
        });

        expect(wrapper.find(".card-time__card-header").text()).toBe("Work");
        expect(wrapper.find(".card-time__time").text()).toBe("32hrs");
        expect(wrapper.find(".card-time__last-time").text()).toBe("Last Week - 36hrs");
    });

    it("convertTimeframeName method", () => {
        const wrapper = mount(CardTime, {
            store,
            localVue,
            propsData: {
                cardType: "work"
            }
        });

        expect(wrapper.vm.convertTimeframeName("daily")).toBe("Day");
        expect(wrapper.vm.convertTimeframeName("weekly")).toBe("Week");
        expect(wrapper.vm.convertTimeframeName("monthly")).toBe("Month");
        expect(wrapper.vm.convertTimeframeName("some else")).toBe("Time");
    });
});
