import {test, expect} from '@playwright/test'
import data from "../testdata/login.json"
test("Add employmentstatus", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill(data.username)
await page.locator("input[type='password']").fill(data.password)
await page.locator("button[type='submit']").click()

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click()
await page.locator("//span[normalize-space(text())='Job']").click()
await page.locator("//a[normalize-space(text())='Employment Status']").click()
await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click()
await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("Remote")
await page.locator("//button[@type='submit']").click()

await expect(page.getByText("Employment Status")).toBeVisible()

})