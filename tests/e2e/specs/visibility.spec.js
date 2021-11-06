describe("visibility", () => {
    it("visit homepage", () => {
        cy.visit("localhost:8080");
    });

    it("all single components should exists and be visible", () => {
        cy.get(".time-tracking-dashboard")
            .should("exist").and("be.visible");

        cy.get(".card-profile")
            .should("exist").and("be.visible");
    });

    it("all repeatable components should exist and be visible", () => {
        cy.fixture("data.json").then((data) => {
            cy.get(".card-time")
                .should("have.length", data.length);
        });
    });
});
