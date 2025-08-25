const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#email';
    this.passwordInput = '//input[@placeholder="Password"]';
    this.loginButton = '//button[@id="submit"]';
    this.logOut = '//button[@id="logout"]';
    this.loginvalidation = '//p[contains(text(),"Click on any contact to view the Contact Details")]';
    this.alertMessage = '//span[@id="error"]';
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.page.waitForTimeout(2000);
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }

  async verifyValidLogin() {
    const logOutButton = this.page.locator(this.logOut);
    const loginValidation = this.page.locator(this.loginvalidation);

    await this.page.waitForTimeout(2000);
    await expect(logOutButton).toBeVisible();   
    await expect(loginValidation).toHaveText('Click on any contact to view the Contact Details');  
  }

  async verifyInvalidLogin() {
    const invalidLogin = this.page.locator(this.alertMessage);
    await expect(invalidLogin).toHaveText('Incorrect username or password');
  }
};
