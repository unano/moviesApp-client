let movies;
const movieId = 497582; // Enola Holmes movie id
let reviews;
let people;
let upcoming;
let topRated;

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        upcoming = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        topRated = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        console.log(response);
        reviews = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/person/popular/?api_key=${Cypress.env(
          "TMDB_KEY"
        )}`
      )
      .its("body")
      .then((response) => {
        console.log(response);
        people = response.results;
      });
  });

  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.Adminlogin();
      cy.get("nav").find("li").eq(0).find("a").click();
    });
    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
      cy.get("#titles").contains(movies[1].title);
    });
    it("should allow navigation from site header", () => {
      cy.get("nav").find("div").contains("Personal area").click().get("#simple-menu").contains("Favorites").click();
      cy.url().should("include", `/favorites`);
      cy.get(".title").contains("Favorite Movies");
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get(".title").contains("Upcoming Movies");
      cy.get("nav").find("li").eq(2).find("a").click();
      cy.get("nav.navbar-brand").find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get(".title").contains("Discover Movies");
    });
  });
  describe("From the Upcoming page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.Adminlogin();
      cy.get("nav").find("li").eq(1).find("a").click();
    });
    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${upcoming[1].id}`);
      cy.get("#titles").contains(upcoming[1].title);
    });
  });
  describe("From the Top Rated page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.Adminlogin();
      cy.get("nav").find("li").eq(2).find("a").click();
    });
    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${topRated[1].id}`);
      cy.get("#titles").contains(topRated[1].title);
    });
  });
  // describe("From the Movie Details page ", () => {
  //   beforeEach(() => {
  //     cy.visit(`/movies/${movieId}`);
  //   });
  //   it("should change browser URL when show/hide reviews is clicked", () => {
  //     cy.contains("Show Reviews").click();
  //     cy.url().should("include", `/movies/${movieId}/reviews`);
  //     cy.contains("Hide Reviews").click();
  //     cy.url().should("not.include", `/movies/${movieId}/reviews`);
  //   });
  //   it("navigate to the full review page when a 'Full Review' link is clicked", () => {
  //       cy.contains("Show Reviews").click();
  //       cy.contains("Full Review").click();
  //       cy.url().should("include", `/reviews/${reviews[0].id}`);

  //   });
  // });
  describe("From the Favorites page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.Adminlogin();
      cy.get("nav").find("li").eq(0).find("a").click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("button").click();
      cy.PersonAreaIcons("Favorites");
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("#titles").contains(movies[0].title);
    });
  });
  describe("From the Watch List page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.Adminlogin();
      cy.get("nav").find("li").eq(1).find("a").click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("button").click();
      cy.PersonAreaIcons("Watch List");
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${upcoming[0].id}`);
      cy.get("#titles").contains(upcoming[0].title);
    });
  });
  describe("From the Collection page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.Adminlogin();
      cy.get("nav").find("li").eq(2).find("a").click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("button").click();
      cy.PersonAreaIcons("Collection");
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${topRated[0].id}`);
      cy.get("#titles").contains(topRated[0].title);
    });
  });
  describe("The Go Back button", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.Adminlogin();
      cy.get("nav").find("li").eq(0).find("a").click();
    });
    it("should navigate from home page to movie details and back", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.get("#button1").click();
      cy.url().should("not.include", `/movies`);
      cy.get(".title").contains("Discover Movies");
    });
    it("should navigate from favorites page to movie details and back", () => {
        cy.get(".card").eq(0).find("button").click();
        cy.get("nav").find("div").contains("Personal area").click().get("#simple-menu").contains("Favorites").click()
        cy.get(".card").eq(0).find("img").click();
        cy.get("svg[data-icon=arrow-circle-left]").click();
        cy.url().should("include", `/favorites`);
        cy.get(".title").contains("Favorite Movies");
    });
  });
  describe("From the People page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate from people page to people details and change url", () => {
      cy.get("nav").find("li").eq(3).find("a").click();
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/person/${people[0].id}`);
      cy.get("#name").contains(`${people[0].name}`);
    });
    it("should navigate from people details to movie details page and change url", () => {
      cy.get("nav").find("li").eq(3).find("a").click();
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/person/${people[0].id}`);
      cy.get(".personMovieCard").eq(0).click();
      cy.url().should("include", `/movies`);
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.get(".name2").eq(0).click();
      cy.url().should("include", `/movies`);
    });
  });
  describe("From the Personal Info page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.Adminlogin();
    });
    it("should navigate to the personalInfo page and change browser URL", () => {
      cy.PersonAreaIcons("Personal Info");
      cy.url().should("include", `/info`);
      cy.get("h1").should("have.text","User profile");
    });
    it("should navigate from personalInfo  page to personalInfoEdit page and change url", () => {
      cy.PersonAreaIcons("Personal Info");
      cy.contains("Modify").click();
      cy.url().should("include", `/editInfo`);
    });
  });
});