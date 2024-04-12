import {test,expect} from "playwright/test";
import { LoginPage } from "../../Pages/Login";

test("login page",async({page})=>{
 
const loginPage = new LoginPage(page);


 await loginPage.gotoLoginPage();
 await loginPage.login("tomsmith","SuperSecretPassword!");
//test
    // await page.getByLabel('Username').click();
    // await page.getByLabel('Username').fill('tomsmith');
    // await page.getByLabel('Password').click();
    // await page.getByLabel('Password').fill('SuperSecretPassword!');
    // await page.getByRole('button', { name: ' Login' }).click();
    await page.getByRole('heading', { name: 'Welcome to the Secure Area.' }).isVisible();
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.close();


    
})