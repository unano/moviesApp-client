// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('Adminlogin',()=>{
    cy.get("nav").find("li").eq(5).find("a").click();
    cy.get("#usernameButton").type("adminstrator") ;
    cy.get("#passwordButton").type("123456") ;
    cy.get('#Login').click();
});

Cypress.Commands.add('regist',(username,password)=>{
    cy.get("nav").find("li").eq(5).find("a").click();
    cy.contains("regist").click();
    cy.contains("Username:").next().type(username) ;
    cy.get("#passwordButton").type(password) ;
    cy.get("#passwordButton").next().click();
});

Cypress.Commands.add('login',(username,password)=>{
    cy.get("nav").find("li").eq(5).find("a").click();
    cy.get("#usernameButton").type(username) ;
    cy.get("#passwordButton").type(password) ;
    cy.get("#passwordButton").next().click();
});