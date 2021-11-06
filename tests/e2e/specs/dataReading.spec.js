describe("dataReading", () => {
    beforeEach(() => {
        cy.fixture("data.json").as("data");
    });

    it("when visit a main page all cards should have default data", () => {
        const defaultTimeframe = "weekly";
        cy.visit("/");
        cy.get("@data").then((data) => {
            checkCardTimeData(data, defaultTimeframe);
        });
    });

    it("after click a timeframe button should show correct data", () => {
        cy.get(".card-profile__category-name").each((button) => {
            cy.get("@data").then((data) => {
                button.click();
                checkCardTimeData(data, button.text().toLowerCase());
            });
        });
    });
});

function checkCardTimeData(data, timeframe) {
    cy.get(".card-time").each((card, index) => {
        let currentCategory = data[index];
        let title = currentCategory.title;
        let currentTime = currentCategory.timeframes[timeframe].current;
        let previousTime = currentCategory.timeframes[timeframe].previous;
        
        cy.get(card)
            .find(".card-time__card-header")
            .contains(title);

        cy.get(card)
            .find(".card-time__time")
            .contains(currentTime);

        cy.get(card)
            .find(".card-time__last-time")
            .contains(previousTime);
    });
}
