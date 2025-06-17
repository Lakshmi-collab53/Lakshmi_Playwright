import {test, expect} from '@playwright/test'
import data from "../testdata/login.json"
const employees = {
employee1:"Lakshmi",
employee2:"Rama", 
employee3:"Krishna",
employee4:"Latha",
employee5:"Ramesh",

}
for (let employee in employees){
test(`Add employee - ${employees[employee]}` , async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill(data.username)
await page.locator("input[type='password']").fill(data.password)
await page.locator("button[type='submit']").click()

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(employees[employee]);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(employees[employee]);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();

})
}