import {test, expect} from '@playwright/test'

test("Add jobcategory", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill(process.env.ORG_USERNAME)
await page.locator("input[type='password']").fill(process.env.ORG_PASSWORD)
await page.locator("button[type='submit']").click()

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click()
await page.locator("//span[normalize-space(text())='Job']").click()
await page.locator("//a[normalize-space(text())='Job Categories']").click()
await page.locator("//i[contains(@class,'oxd-icon bi-plus')]").click()
await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("QAtest")
await page.locator("//button[@type='submit']").click()

await expect(page.getByText("Job Categories")).toBeVisible()

})