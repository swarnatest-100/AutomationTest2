// import { Given,When,Then }  from "@wdio/cucumber-framework";

// Given(/^guru99 site is open$/,async function () {
    
//     await browser.url("https://demo.guru99.com/test/drag_drop.html")
//     await browser.maximizeWindow()
//     await browser.pause(3000)
// })
    

// When (/^Drag the box and drop to the position$/, async function () {
//     let bank = await $("(//a[@class='button button-orange'])[5]")
//     let account = await $("//ol[@class='field14 ui-droppable ui-sortable']")
//     await bank.dragAndDrop(account)
//     await browser.pause(4000)
// })

// When(/^Drag the amount$/ , async function () {
//     let money = await $("(//a[@class='button button-orange'])[4]")
//     let amount = await $("(//ol[@class='field13 ui-droppable ui-sortable'])[1]")
//     await money.dragAndDrop(amount)
//     await browser.pause(3000)
// })

// When(/^Drag the sales and drop to the Account$/, async function () {
//     let sales = await $("//a[@class='button button-orange' and text()=' SALES ']")
//     let account2 = await $("//ol[@class='field15 ui-droppable ui-sortable']")
//     await sales.dragAndDrop(account2)
//     await browser.pause(3000)
// })

// When(/^Drag the amount and drop to the account$/, async function () {

//    let money2 = await $("(//a[@class='button button-orange'])[2]")
//    let amount2= await $("(//ol[ @class='field13 ui-droppable ui-sortable'])[2]")
//    await money2.dragAndDrop(amount2)
//    await browser.pause(4000)
// })

// Then(/^Perfect match displays/, async function () {
//     const element = await $("//a[text()='Perfect!']")
//     await expect(element).toHaveText('Perfect!')
    
// })
