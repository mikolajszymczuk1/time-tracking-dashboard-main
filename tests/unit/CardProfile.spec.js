import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import CardProfile from "@/components/cards/CardProfile.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const state = {
    currentTimeframe: "weekly"
}

const mutations = {
    changeTimeframe: jest.fn()
}

const actions = {
    changeTimeframe: jest.fn()
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
});

describe("CardProfile.vue", () => {
    it("should has correct props", () => {
        const wrapper = mount(CardProfile, {
            store,
            localVue,
            propsData: {
                fullName: "Jeremy Robson",
                avatarImage: "some/url"
            }
        });

        expect(wrapper.find(".card-profile__fullname").text()).toBe(`Report for
            Jeremy Robson`);
        expect(wrapper.find(".card-profile__avatar").attributes("style")).toBe("background-image: url(some/url);");
    });

    it("when component is created, should set default value for timeframe data", () => {
        const wrapper = mount(CardProfile, {
            store,
            localVue,
            propsData: {
                fullName: "Jeremy Robson",
                avatarImage: "some/url"
            },
            data() {
                return {
                    timeframe: ""
                }
            }
        });

        expect(wrapper.vm.$data.timeframe).toBe("weekly");
    });

    it("dispatches an action when radio button is clicked", async () => {
        store.dispatch = jest.fn();
        const wrapper = mount(CardProfile, {
            store,
            localVue,
            propsData: {
                fullName: "Jeremy Robson",
                avatarImage: "some/url"
            }
        });
        
        const inputs = wrapper.findAll(".card-profile__input");
        await inputs.at(0).trigger("click");
        expect(store.dispatch).toHaveBeenCalledWith("changeTimeframe", "daily");
        await inputs.at(1).trigger("click");
        expect(store.dispatch).toHaveBeenCalledWith("changeTimeframe", "weekly");
        await inputs.at(2).trigger("click");
        expect(store.dispatch).toHaveBeenCalledWith("changeTimeframe", "monthly");
    });
});
