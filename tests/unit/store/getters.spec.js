import { getters } from "@/store";

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
        },
        {
            "title": "Play",
            "timeframes": {
                "daily": {
                    "current": 1,
                    "previous": 2
                },
                "weekly": {
                    "current": 10,
                    "previous": 8
                },
                "monthly": {
                    "current": 23,
                    "previous": 29
                }
            }
        }
    ]
}

describe("getters", () => {
    it("getCategories getter", () => {
        const results = getters.getCategories(state);
        expect(results).toEqual(["work", "play"]);       
    });

    it("getSingleCategory getter", () => {
        const results = getters.getSingleCategory(state)("play");
        expect(results).toEqual(
            {
                "title": "Play",
                "timeframes": {
                    "daily": {
                        "current": 1,
                        "previous": 2
                    },
                    "weekly": {
                        "current": 10,
                        "previous": 8
                    },
                    "monthly": {
                        "current": 23,
                        "previous": 29
                    }
                }
            }
        );
    });
});
