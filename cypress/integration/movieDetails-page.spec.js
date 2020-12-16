let movieId = null
let movie;
let reviews;
let SimilarMovies;

describe("Movie Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[1].id;
      })
      .then((arbitraryMovieIdignored) => {
        movieId = arbitraryMovieIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((movieDetails) => {
        movie = movieDetails;
        return movieDetails.id;
      })
    cy.request(
        `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
        .its("body")
        .then((response) => {
          return response.results[1].id;
        })
        .then((arbitraryMovieIdignored) => {
          movieId = arbitraryMovieIdignored
          return cy
            .request(
              `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${Cypress.env(
                "TMDB_KEY"
              )}`
            )
            .its("body");
        })
        .then((AllSimilarMovies) => {
          SimilarMovies = AllSimilarMovies;
          return SimilarMovies.id;
        })
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
        .its("body")
        .then((response) => {
          return response.results[1].id;
        })
        .then((arbitraryMovieIdignored) => {
          movieId = arbitraryMovieIdignored
          return cy
          .request(
            `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
              "TMDB_KEY"
              )}`
              )
              .its("body");
            })
            .then((AllReviews) => {
              reviews = AllReviews;
              return reviews.id;
            })
        })
beforeEach(() => {
    cy.visit(`/`);
    cy.get(".card").eq(1).find("img").click();
  });
it("should display movie title in the page header", () => {
    cy.get("#titles").contains(movie.title);
});
  it("should display the movie's details", () => {
    cy.get("h4").contains("Overview");
    cy.get("h4").next().contains(movie.overview);
    cy.get("ul")
      .eq(1)
      .within(() => {
        cy.get("li").eq(0).contains("Runtime");
        cy.get("li").eq(1).contains(movie.runtime);
        cy.get("li").eq(2).contains("Release Date");
        cy.get("li").eq(3).contains(movie.release_date);
    });
  });
  it("should display the Home icon with the correct URL value", () => {
    cy.get(".fa-home")
      .parent()
      .should("have.attr", "href")
      .should("include", movie.homepage);
    });
    it("should display the image with the appropriate src attribute", () => {
      cy.get("img")
        .should("have.attr", "src")
        .should("include", movie.poster_path);
    });
  it("should show reviews when click 'show reviews'",()=>{
    cy.get(".btn").click();
    cy.get("td").eq(0).should("have.text",reviews.results[0].author)
    cy.get("td").eq(1).should("contain",reviews.results[0].content.substring(0,20))
    cy.get("td").eq(1).next().should("have.text"," Full Review")
  });
  it("should display full review when click 'Full Review'", () => {
    cy.get(".btn").click();
    cy.get("#fullReview").click();
    cy.url().should("include", `/reviews/${reviews.results[0].id}`);
    cy.get("p").should("contain",reviews.results[0].author);
    cy.get("p").should("contain",reviews.results[0].content);

  });
  it("should display similar movies", () => {
    cy.get("#movpic2").should("have.attr", "src")
    .should("include", SimilarMovies.results[0].poster_path);
  });
  

});