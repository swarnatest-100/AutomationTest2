import { Given,When,Then }  from "@wdio/cucumber-framework";

// Given(/^Amazon site is open$/,async function () {
    
    // await browser.url("https://www.amazon.com/")
    // await browser.maximizeWindow()
    // await browser.pause(3000)
// })

// Given(/^select country from Drop down$/, async function () {
//     await browser.url("https://testautomationpractice.blogspot.com/")

//     let countrydropdown = await $("#country")
//     await countrydropdown.selectByAttribute('value', 'germany')
//     await browser.pause(3000)
//     await countrydropdown.selectByVisibleText('India')
//     await browser.pause(3000)
//     await countrydropdown.selectByIndex(2)
//     await browser.maximizeWindow()
//     await browser.pause(3000)
//     let countrylist = await $$("#country option")

//     console.log("list of countries " +countrylist.length)


// for(let i=0; i< countrylist.length; i++)
//     {
//     const countryname = countrylist[i]
//     console.log(countryname.getText())
//     }
// })
// Given(/^Amazon site is open$/, async function () {

//     await browser.url("https://www.amazon.in/")
//     await browser.pause(7000)
//     let listofoptions = await $('#searchDropdownBox')
//     await browser.pause(3000)
//     await listofoptions.selectByVisibleText('Books')
//     await browser.pause(3000)
//     let catelog = await $$("#searchDropdownBox option")
//     console.log("list of catelog items " + catelog.length)
// })

// Given(/^Open test automation practise page$/, async function () {
//     await browser.url("https://testautomationpractice.blogspot.com/")
// })
// Then(/^Select the country with(.*)$/, async function(countryname) {
//     let countrydropdown = await $("#country")
//     await browser.pause(3000)
//     await countrydropdown.selectByVisibleText(countryname)
//     await browser.pause(3000)

// })