import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import HomeConduitPage from "../../pages/HomeConduitPage";
import LoginPage from "../../pages/LoginPage";


    Given("that I am on the web site from Conduit", () => {
        cy.visit("https://demo.realworld.io/#/login");
    }); 
    
    When("I type the credentials email and password", (dataTable) => {
        dataTable.hashes().forEach((row) => {
            LoginPage.submitLogin(row.email, row.password);
        });
    });

    Then("I see the username and check for successful login", (dataTable) => {
        dataTable.hashes().forEach((row) => {
            HomeConduitPage.checkTitle(row.username);
        });
        
        });
        
/*
    Given("that I am on the web site from Conduit", (dataTable) => {
        dataTable.hashes().forEach((row) => {
            const [width, height] = row.resolucion.split('x');
            cy.viewport(parseInt(width), parseInt(height));
        });
        cy.clearCookies();
    cy.visit('https://dev.d3o03xjtyo0zsq.amplifyapp.com/login');
    //homePage.clickOnButtonHazTuPrueba();
    }); 
    */