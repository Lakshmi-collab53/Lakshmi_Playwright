import {test, expect} from '@playwright/test'

test("Add paygrade", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill("Admin")
await page.locator("input[type='password']").fill("admin123")
await page.locator("button[type='submit']").click()

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click()
await page.locator("//span[normalize-space(text())='Job']").click()
await page.locator("//a[normalize-space(text())='Pay Grades']").click()
await page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("Grade11")
await page.locator("//button[@type='submit']").click()

await expect(page.getByText("Edit Pay Grade")).toBeVisible()

})