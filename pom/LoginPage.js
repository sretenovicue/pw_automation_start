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
    
    this.nameTextBox = page.getByTestId("signup-name");
    this.emailTextBox = page.getByTestId("signup-email");
    this.newSignUpBtn = page.getByTestId("signup-button");

    this.mrRadioBtn = page.getByRole("radio", { name: "Mr." });

    this.expectedName = page.getByTestId("name").inputValue();
    this.expectedEmail = page.getByTestId("email").inputValue();
    this.signUpPassword = page.getByTestId("password");

    this.selectDay = page.getByTestId("days");
    this.selectMonth = page.getByTestId("months");
    this.selectYear = page.getByTestId("years");

    this.signUpForNewsletterCheckBox = page.getByLabel("Sign up for our newsletter!");

    this.receiveSpecialOffersCheckBox = page.getByLabel("Receive special offers from our partners!");

  }

async openApp() {
await this.page.goto("/", {waitUntil: "domcontentloaded"});
await expect(this.automationExerciseHeaderText).toBeVisible();
}

async clickOnSignupBtn(){
await this.signUpBtn.click();
await expect(this.newUserSignupTittle).toBeVisible();
}

async fillSignUpForm(){
  await this.nameTextBox.fill("Test Playwright");
  await this.emailTextBox.fill("test.playwright@gmail.com");
  await this.newSignUpBtn.click();

}

async checkMrRadioBtn(){
  await expect(this.accountInformationTittle).toBeVisible();
  await this.mrRadioBtn.click();
}

async enterAccountInformation(){
  expect(await this.expectedName).toMatch("Test Playwright");
  expect(await this.expectedEmail).toMatch("test.playwright@gmail.com");
  await this.signUpPassword.fill("Lozinka123!");
}

async enterDateOfBirt(){
  await this.selectDay.selectOption("25");
  await this.selectMonth.selectOption("7");
  await this.selectYear.selectOption("1985");
}

async chechRadioBtns(){
  await this.signUpForNewsletterCheckBox.click();

  await this.receiveSpecialOffersCheckBox.click();

}

}


module.exports = {LoginPage}