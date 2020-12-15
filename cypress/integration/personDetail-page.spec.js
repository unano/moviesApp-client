let person;    // List of movies from TMDB
let movies;
let personId=null;

describe("PersonDetail Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
        `https://api.themoviedb.org/3/person/popular/?api_key=${Cypress.env(
            "TMDB_KEY"
          )}`
        )
        .its("body")
        .then((response) => {
            return response.results[2].id;
        })
        .then((arbitraryPersonIdignored) => {
          personId = arbitraryPersonIdignored
          return cy
            .request(
              `https://api.themoviedb.org/3/person/${personId}?api_key=${Cypress.env(
                "TMDB_KEY"
              )}`
            )
            .its("body");
        })
        .then((personDetails) => {
          person = personDetails;
          return personDetails.id;
        })
    cy.request(
        `https://api.themoviedb.org/3/person/popular/?api_key=${Cypress.env(
            "TMDB_KEY"
          )}`
        )
        .its("body")
        .then((response) => {
            return response.results[2].id;
        })
        .then((arbitraryPersonIdignored) => {
            personId = arbitraryPersonIdignored
            return cy
              .request(
                `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${Cypress.env(
                  "TMDB_KEY"
                )}`
              )
              .its("body");
          })
          .then((personMovies) => {
            movies = personMovies;
          })

    });  
    
  beforeEach(() => {
    cy.visit("/");
    cy.get("nav").find("li").eq(3).find("a").click();
    cy.get("img").eq(2).click();
  });

  describe("Person details", () => {
      it("should display picture of the person", () => {
        cy.get("img").should("have.attr", "src")
        .should("include", person.profile_path);
      })
      it("should display personal profile of the person",()=>{
        cy.contains("Name").next().should("contain", person.name);
        cy.contains("Date of Birth").next().should("contain", person.birthday);
        cy.contains("Gender").next().should("contain", person.gender===1?"female" :"male");
        cy.contains("Popularity").next().should("contain", person.popularity);
        cy.contains("birthplace").next().should("contain", person.place_of_birth);
        cy.contains("Known for").next().should("contain", person.known_for_department);
        cy.contains("Also knwon as").next().should("contain", person.also_known_as[0]);
        cy.get("#name").should("contain", person.name);
        cy.contains("Personal profile").next().should("contain", person.biography);
      })
    })
});