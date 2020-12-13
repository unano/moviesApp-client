let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Button Test ", () => {
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
  })
  beforeEach(() => {
    cy.visit("/");
    cy.Adminlogin();
    cy.get("nav").find("li").eq(0).find("a").click();
  });
  describe("Button Test of Home Page" ,() => {
    it("should add movie to favorite movies after clicking 'add to favorite", () => {
      cy.get(".card").eq(1).find("button").should("have.text","Add to Favorites").click();
      cy.PersonAreaIcons("Favorite");
      cy.get(".card").eq(0).should('be.visible');
      });
    });
  describe("Button Test of Upcoming Page" ,() => {
    it("should add movie to Watch List after clicking 'add to watchlist", () => {
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.get(".card").eq(1).find("button").should("have.text","Add to watch list").click();
      cy.PersonAreaIcons("Watch List");
      cy.get(".card").eq(0).should('be.visible');
      });
    });
  describe("Button Test of Top Rated Page" ,() => {
    it("should add movie to Collection page after clicking 'add to Collection", () => {
      cy.get("nav").find("li").eq(2).find("a").click();
      cy.get(".card").eq(1).find("button").should("have.text","Add to Collections").click();
      cy.PersonAreaIcons("Collection");
      cy.get(".card").eq(0).should('be.visible');
      });
    });
  describe("Button Test of Watchlist Page" ,() => {
    it("should remove movie from watchlist and return it back to upcoming page after clicking 'remove from", () => {
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.get(".card").eq(1).find("button").click();
      cy.get(".badge").contains(19);
      cy.PersonAreaIcons("Watch List");
      cy.get(".card").eq(0).find("button").should("have.text","remove from watch list").click();
      cy.get(".card").should("have.length", 0);
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.get(".badge").contains(20);
      });
    });
  describe("Button Test of Write a Review Page" ,() => {
      it("should add movie to Collection page after clicking 'add to Collection", () => {
        cy.get(".card").eq(1).find("button").click();
        cy.PersonAreaIcons("Favorite");
        cy.get(".card").eq(0).find(".btn").click();
        cy.url().should("include", `/reviews/form`);
        cy.get("#name").should("contain","Add your review");
        });
      });
  });