let people;    // List of movies from TMDB

// Utility functions
const filterByName = (peopleList, string) =>
  peopleList.filter((p) => p.name.toLowerCase().search(string) !== -1);

const filterByGender = (peopleList, gender) =>
  peopleList.filter((p) => p.gender===parseInt(gender));

describe("People Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
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
    
  beforeEach(() => {
    cy.visit("/");
    cy.get("nav").find("li").eq(3).find("a").click();
  });

  describe("Base test", () => {
    it("displays page header", () => {
      cy.get(".title").contains("Popular person");
    });
  });
  describe("Filtering", () => {
    describe("By movie title" ,() => {
      it("should display people with 'p ' in the title", () => {
        const searchString = 'p'
        const matchingPeople = filterByName(people, searchString );
        cy.get("input").eq(0).clear().type(searchString) ;
        cy.get(".card").should("have.length", matchingPeople.length);
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
          .find(".card-titles")
          .should("have.text", matchingPeople[index].name);
        });
      })
      it("should display no movie with 'xyz' in the title", () => {
        const searchString = "xyz";
        cy.get("input").eq(0).clear().type(searchString);
        cy.get(".card").should("have.length", 0);
      })
    })
    describe("By movie genre", () => {
      it("should display people with the specified gender only", () => {
        const targetGender="1";
        const matchingPeople = filterByGender(people, targetGender);
        cy.get("span").eq(targetGender).click();
        cy.get(".card").should("have.length", matchingPeople.length);
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
            .find(".card-titles")
            .should("have.text", matchingPeople[index].name);
        });      
      });
    });
    describe("By movie title and genre", () => {
      it("should display people with the specified genre and text only", () => {
        const searchString = "o";
        const targetGender="1";
        const matchingPeople1 = filterByGender(people, targetGender);
        const matchingPeople2 = filterByName(matchingPeople1, searchString ); 
        cy.get("span").eq(targetGender).click();
        cy.get("input").eq(0).clear().type(searchString) ; 
        cy.get(".card").should("have.length", matchingPeople2.length);
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
            .find(".card-titles")
            .should("have.text", matchingPeople2[index].name);
        });      
      });
    });
  });
});