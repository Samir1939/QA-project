import  { test } from '@playwright/test';
import {LoginPage } from '../pageobjects/login.po';
const testData= require('../fixtures/loginFixture.json');

test.beforeEach(async({page}) => {
    await page.goto('/');

})

test.describe('Valid login tests',()=>{
    test('Login using valid username and password', async ({page}) => {
        const login = new LoginPage(page);
        await login.login(testData.validUser.username,testData.validUser.password);
        await login.verifyValidLogin();
        });
})


test.describe('Invalid login tests',()=>{
 test('Login using valid username and password', async ({page}) => {
        const login = new LoginPage(page);
        await login.login(testData.invalid.username,testData.invalid.password);
        await login.verifyValidLogin();
        });
})


    



    
