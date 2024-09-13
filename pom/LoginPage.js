const {expect, test} = require ("@playwright/test");

class LoginPage {

  constructor(page) {

    this.page = page;
    this.automationExerciseHeaderText = page
      .getByRole("link")
      .filter({ has: page.locator('[src="/static/images/home/logo.png"]') });
    this.signUpBtn = page.getByRole("link", { name: " Signup / Login" });

    this.newUserSignupTittle = page.getByRole("heading", {name: "New User Signup!"});

    this.newUserSignupTittle = page.getByRole("heading", {name: "New User Signup!"});

    this.accountInformationTittle = page.getByRole("heading", {name: "Enter Account Information"});

    this.mrRadioBtn = page.getByRole("radio", { name: "Mr." });

    this.expectedName = page.getByTestId("name").inputValue();
    this.expectedEmail = page.getByTestId("email").inputValue();

    expect(expectedName).toMatch("Test Playwright");

    this.signUpPassword = page.getByTestId("password");

    this.selectDay = page.getByTestId("days");
    this.selectMonth = page.getByTestId("months");
    this.selectYear = page.getByTestId("years");

    this.signUpForNewsletterCheckBox = page.getByLabel("Sign up for our newsletter!");

    this.receiveSpecialOffersCheckBox = page.getByLabel("Receive special offers from our partners!");

  }

async metoda() {
await page.goto("http://automationexercise.com", {waitUntil: "domcontentloaded"});

}


  await expect(automationExerciseHeaderText).toBeVisible();

  await signUpBtn.click();

  await expect(newUserSignupTittle).toBeVisible();

  await expect(accountInformationTittle).toBeVisible();

  await mrRadioBtn.click();

expectedName = await page.getByTestId("name").inputValue();
expectedEmail = await page.getByTestId("email").inputValue();

  expect(expectedName).toMatch("Test Playwright");

  expect(expectedEmail).toMatch("test.playwright@gmail.com");

  await signUpPassword.fill("Lozinka123!");

  await selectDay.selectOption("25");
  await selectMonth.selectOption("7");

  await selectYear.selectOption("1985");

  await signUpForNewsletterCheckBox.click();

  await receiveSpecialOffersCheckBox.click();



module.exports = {LoginPage}