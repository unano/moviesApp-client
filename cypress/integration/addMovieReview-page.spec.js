let movies;

describe("movie review form Page ", () => {
    before(() => {
      // Get movies from TMDB and store in movies variable.
      cy.request(
        `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
        .its("body")    // Take the body of HTTP response from TMDB
        .then((response) => {
          movies = response.results
        })
    });

    beforeEach(() => {
      cy.visit("/")
      cy.Adminlogin();
      cy.get("nav").find("li").eq(0).find("a").click();
      cy.get(".card").eq(1).find("button").click();
      cy.PersonAreaIcons("Favorites");
      cy.get(".card").eq(0).find(".btn").click();
    });
    it("should contain movie name", () => {
        cy.get("#titles").should("contain",movies[1].title);

    });
    it("should contain 'Add your review'", () => {
        cy.get("#name").should("contain","Add your review");
    });
    it("should inform when author name isn't entered", () => {
        cy.get("button").eq(1).click();
        cy.get(".form-group").eq(0).next().should("contain","Author name required");
    });
    it("should inform when review isn't entered", () => {
        cy.get("button").eq(1).click();
        cy.get(".form-group").eq(1).next().should("contain","No review text");
    });
    it("should inform when review is too short", () => {
        cy.get("textarea").clear().type("all");
        cy.get("button").eq(1).click();
        cy.get(".form-group").eq(1).next().should("contain","Review is too short");
    });
    it("should submit when user input is valid", () => {
        cy.get("input").clear().type("alllllll");
        cy.get("textarea").clear().type("alllllllllllll");
        cy.get("button").eq(1).click();
        cy.url().should("include", `/favorite`);
        cy.get(".title").contains("Favorite Movies");
    });
    it("should clear text when 'reset' is clicked", () => {
        cy.get("input").clear().type("alllllll");
        cy.get("textarea").clear().type("alllllllllllll");
        cy.get("button").eq(2).click();
        cy.get("input").should("have.text","");
        cy.get("textarea").should("have.text","");
    });


});