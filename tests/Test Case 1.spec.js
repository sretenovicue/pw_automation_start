const {test, expect} = require('@playwright/test');
const {faker} = require('@faker-js/faker');

test('Register user', async ({page}) => {

await page.goto('http://automationexercise.com', {waitUntil:"domcontentloaded"});

const automationExerciseHeaderText = page.getByRole('link')
.filter({has:page.locator('[src="/static/images/home/logo.png"]')});

await expect(automationExerciseHeaderText).toBeVisible();

const signUpBtn = page.getByRole('link', {name:" Signup / Login"});

await signUpBtn.click();

const newUserSignupTittle = page.getByRole('heading', {name:"New User Signup!"});

await expect(newUserSignupTittle).toBeVisible(); 

const nameTextBox = page.getByTestId('signup-name');
const emailTextBox = page.getByTestId('signup-email');
const newSignUpBtn = page.getByTestId('signup-button');

await nameTextBox.fill('Test Playwright');
await emailTextBox.fill('test.playwright@gmail.com');
await newSignUpBtn.click();

const accountInformationTittle = page.getByRole('heading', {name:"Enter Account Information"});

await expect(accountInformationTittle).toBeVisible();

const mrRadioBtn = page.getByRole('radio', {name:"Mr."});

await mrRadioBtn.click();

const expectedName = await page.getByTestId('name').inputValue();
const expectedEmail = await page.getByTestId('email').inputValue();

expect(expectedName).toMatch('Test Playwright');

expect(expectedEmail).toMatch('test.playwright@gmail.com');

const signUpPassword = page.getByTestId('password');

await signUpPassword.fill('Lozinka123!');

const selectDay = page.getByTestId('days');
const selectMonth = page.getByTestId('months');
const selectYear = page.getByTestId('years');

await selectDay.selectOption('25');
await selectMonth.selectOption('7');

await selectYear.selectOption('1985');

const signUpForNewsletterCheckBox = page.getByRole('checkbox')
.filter({has:page.locator('#uniform-newsletter')});

await signUpForNewsletterCheckBox.click();

const receiveSpecialOffersCheckBox = page.locator('#uniform-optin');

await receiveSpecialOffersCheckBox.click();
});