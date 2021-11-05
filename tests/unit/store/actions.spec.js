import { actions } from "@/store";

describe("actions", () => {
    it("should call changeTimeframe action with correct arguments", async () => {
        const commit = jest.fn();
        await actions.changeTimeframe({ commit }, "monthly");
        expect(commit).toHaveBeenCalledWith("changeTimeframe", "monthly");
    });
});
