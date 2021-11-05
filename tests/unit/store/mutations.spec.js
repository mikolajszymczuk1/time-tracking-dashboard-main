import { mutations } from "@/store";

describe("mutations", () => {
    it("changeTimeframe mutation", () => {
        let state = { currentTimeframe: "weekly" };
        
        expect(state).toEqual({ currentTimeframe: "weekly"});
        mutations.changeTimeframe(state, "daily");
        expect(state).toEqual({ currentTimeframe: "daily" });
    });
});
