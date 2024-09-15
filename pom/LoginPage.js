const { expect, test } = require("@playwright/test");
const { faker } = require("@faker-js/faker");
const {data, dataObject} = require('../testData/data')

class LoginPage {
  constructor(page) {
    this.page = page;
    this.automationExerciseHeaderText = page
      .getByRole("link")
      .filter({ has: page.locator('[src="/static/images/home/logo.png"]') });
    this.signUpBtn = page.getByRole("link", { name: " Signup / Login" });

    this.newUserSignupTittle = page.getByRole("heading", {
      name: "New User Signup!",
    });

    this.newUserSignupTittle = page.getByRole("heading", {
      name: "New User Signup!",
    });

    this.accountInformationTittle = page.getByRole("heading", {
      name: "Enter Account Information",
    });

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

    this.signUpForNewsletterCheckBox = page.getByLabel(
      "Sign up for our newsletter!"
    );

    this.receiveSpecialOffersCheckBox = page.getByLabel(
      "Receive special offers from our partners!"
    );

    this.addressFirstName = page.getByTestId("first_name");

    this.addressLastName = page.getByTestId("last_name");

    this.addressCompany = page.getByTestId("company");

    this.addressAddress = page.getByTestId("address");

    this.addressAddress2 = page.getByTestId("address2");

    this.countryDropDownMenu = page.getByTestId("country");

    this.addressState = page.getByTestId("state");

    this.addressCity = page.getByTestId("city");

    this.addressZipCode = page.getByTestId("zipcode");

    this.addressMobileNumber = page.getByTestId("mobile_number");

    this.addressCreateAccountBtn = page.getByTestId("create-account");

    this.accountCreatedTittle = page.locator(".title.text-center b");

    this.continueButton = page.getByTestId("continue-button");

    this.textForLoggedUser = page
      .getByRole("list")
      .locator("b")
      .filter({ hastext: "Test Playwright" });

    this.deleteAccountBtn = page
      .locator(".nav.navbar-nav li")
      .getByText(" Delete Account");

    this.deleteAccountMsg = page.getByRole("heading", {
      name: "Account Deleted!",
    });
  }

  async openApp() {
    await this.page.goto("/", { waitUntil: "domcontentloaded" });
    await expect(this.automationExerciseHeaderText).toBeVisible();
  }

  async clickOnSignupBtn() {
    await this.signUpBtn.click();
    await expect(this.newUserSignupTittle).toBeVisible();
  }

  async fillSignUpForm() {
    await this.nameTextBox.fill(dataObject.title);
    await this.emailTextBox.fill(dataObject.email);
    await this.newSignUpBtn.click();
  }

  async checkMrRadioBtn() {
    await expect(this.accountInformationTittle).toBeVisible();
    await this.mrRadioBtn.click();
  }

  async enterAccountInformation() {
    expect(await this.expectedName).toMatch(dataObject.title);
    expect(await this.expectedEmail).toMatch(dataObject.email);
    await this.signUpPassword.fill(dataObject.password);
  }

  async enterDateOfBirt() {
    await this.selectDay.selectOption(dataObject.day);
    await this.selectMonth.selectOption(dataObject.month);
    await this.selectYear.selectOption(dataObject.year);
  }

  async chechRadioBtns() {
    await this.signUpForNewsletterCheckBox.click();

    await this.receiveSpecialOffersCheckBox.click();
  }

  async createAccount() {
    await this.addressFirstName.fill(faker.person.firstName());

    await this.addressLastName.fill(faker.person.lastName());

    await this.addressCompany.fill(faker.company.name());

    await this.addressAddress.fill(faker.location.streetAddress({ useFullAddress: true }));

    await this.addressAddress2.fill(faker.location.streetAddress({ useFullAddress: true }));

    await this.countryDropDownMenu.selectOption(dataObject.country);

    await this.addressState.fill(faker.location.country());

    await this.addressCity.fill(faker.location.city());

    await this.addressZipCode.fill(faker.location.zipCode());

    await this.addressMobileNumber.fill(faker.phone.number());
    await this.addressCreateAccountBtn.click();
    await expect(this.accountCreatedTittle).toBeVisible();
  }
  async clickOnContinueBtn() {
    await this.continueButton.click();
    await expect(this.textForLoggedUser).toBeVisible();
  }

  async deleteAccountAndCloseApp() {
    await this.deleteAccountBtn.click();
    await expect(this.deleteAccountMsg).toHaveText(dataObject.status);
    await this.page.close();
  }
}

module.exports = { LoginPage };
