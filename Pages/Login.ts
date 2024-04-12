import { Locator, Page } from "playwright"



 export class LoginPage {
   readonly page: Page
   readonly userName: Locator
   readonly password: Locator
   readonly login_btn: Locator

     constructor(page:Page) {

        this.page = page
        
        this.userName = page.getByLabel('Username')
        this.password = page.getByLabel('password')
        this.login_btn = page.getByRole('button', { name: ' Login' })

    }

async gotoLoginPage(){

    await this.page.goto("https://the-internet.herokuapp.com/login")

}

    async login(username, password) {
        
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.login_btn.click();
    }


}