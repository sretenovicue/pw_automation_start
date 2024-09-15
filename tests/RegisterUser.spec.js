const { test, expect } = require("@playwright/test");
const{LoginPage} = require('../pom/LoginPage')

test("Register user", async ({ page }) => {

const loginPage = new LoginPage(page);

await loginPage.openApp();

await loginPage.clickOnSignupBtn();

await loginPage.fillSignUpForm();

await loginPage.checkMrRadioBtn();

await loginPage.enterAccountInformation();

await loginPage.enterDateOfBirt();

await loginPage.chechRadioBtns();

await loginPage.createAccount();

await loginPage.clickOnContinueBtn();

await loginPage.deleteAccount();


});
