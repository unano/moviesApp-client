describe("Personal page", () => {
    beforeEach(() => {
      cy.visit("/")
      cy.regist("userA","123456");
      cy.login("userA","123456");
      cy.PersonAreaIcons("Personal Info")
    });
    it("should contain page header", () => {
        cy.get("h1").contains("User profile");
    });
    it("should have username equal to user's name", () => {
        cy.get("p").eq(0).contains("userA");
    });
    it("should update data after doing modification", () => {
        cy.contains("Modify").click();
        cy.contains("Female").click();
        cy.get("textarea").eq(0).clear().type("hobbyA");
        cy.get("textarea").eq(1).clear().type("movieA");
        cy.get("textarea").eq(2).clear().type("actorA");
        cy.get("textarea").eq(3).clear().type("introduceA");
        cy.get("button").eq(0).click();
        cy.get("p").eq(0).should("have.text","Username: userA");
        cy.get("p").eq(1).should("have.text","Gender: female");
        cy.get("p").eq(3).should("have.text","Hobby: hobbyA");
        cy.get("p").eq(4).should("have.text","Favorite movies: movieA");
        cy.get("p").eq(5).should("have.text","Favorite actors: actorA");
        cy.get("p").eq(6).should("have.text","Personal introduction: introduceA");
    });
    it("should have update data after doing modification", () => {
        cy.contains("Modify").click();
        cy.contains("Female").click();
        cy.get("textarea").eq(0).clear().type("hobbyA");
        cy.get("textarea").eq(1).clear().type("movieA");
        cy.get("textarea").eq(2).clear().type("actorA");
        cy.get("textarea").eq(3).clear().type("introduceA");
        cy.get("button").eq(0).click();
        cy.get("p").eq(0).should("have.text","Username: userA");
        cy.get("p").eq(1).should("have.text","Gender: female");
        cy.get("p").eq(3).should("have.text","Hobby: hobbyA");
        cy.get("p").eq(4).should("have.text","Favorite movies: movieA");
        cy.get("p").eq(5).should("have.text","Favorite actors: actorA");
        cy.get("p").eq(6).should("have.text","Personal introduction: introduceA");
    });
    it("should show original data on the textarea", () => {
        cy.contains("Modify").click();
        cy.get("textarea").eq(0).clear().type("hobbyA");
        cy.get("textarea").eq(1).clear().type("movieA");
        cy.get("textarea").eq(2).clear().type("actorA");
        cy.get("textarea").eq(3).clear().type("introduceA");
        cy.get("button").eq(0).click();
        cy.contains("Modify").click();
        cy.get("textarea").eq(0).should("have.text","hobbyA");
        cy.get("textarea").eq(1).should("have.text","movieA");
        cy.get("textarea").eq(2).should("have.text","actorA");
        cy.get("textarea").eq(3).should("have.text","introduceA");
    });

});