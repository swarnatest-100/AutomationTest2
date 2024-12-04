import { Given,When,Then, Before }  from "@wdio/cucumber-framework";
// Before(async function () {
//     await browser.url('/gp/bestsellers/?ref_=navm_cs_bestsellers')    
// })
// Given (/^Open the practise page$/, async function () {
//     await browser.url("https://the-internet.herokuapp.com/upload")
//     await browser.pause(3000)

// })

// Then (/^upload file from fileupload folder$/, async function () {
//     await $ ("#file-upload").addValue('${process.cwd()}/data/FileUpload/demodata.txt')
//     await $("#file-submit").click()
//     await browser.pause(3000)
// })

// Then (/^upload file from fileupload folder$/, async function () {
//     const filePath = `${process.cwd()}/data/FileUpload/demodata.txt`;
//     await $("#file-upload").addValue(filePath); // Add file path to input
//     await $("#file-submit").click(); // Click submit
//     await browser.pause(3000)
//     // await $("#upload-success-message").waitForDisplayed({ timeout: 8000 }); // Wait for success message
// })

// Then(/^Validate Start button is displayed$/, async function (){

//     let Actualresult = await $ ("//button[@name='start']").isDisplayed()  //true false
//     expect(Actualresult).toEqual(true)

//     let ActualText = await $("//h2[@class='title']").getText()
//     expect(ActualText).toEqual("Upload Files")
    
//     let Actualresult1 = await $ ("//button[@name='start']")
//    console.log( expect(Actualresult1).toBeDisplayed)
// })

// Then(/^Validate Amazon Prime logo is displayed$/, async function () {
//     let Actualresult2 = await $ ("//span[@class='nav-sprite nav-logo-base']").isDisplayed()
//     expect(Actualresult2).toEqual("Amazon")
// })

Given(/^Amazon site is open$/, async function () {
    await browser.url('/')
})

Then(/^Validate Amazon Prime logo is displayed$/, async function () {
    const isAmazonLogoDisplayed: boolean = await $("//span[@class='nav-sprite nav-logo-base']").isDisplayed();
    expect(isAmazonLogoDisplayed).toBe(true); // Verify the logo is displayed
})

Then(/^Black Friday text displays$/, async function () {
    const blackFridayText = await $("//a[text()='Black Friday Deals']").getText(); // Extract the text
    expect(blackFridayText).toEqual("Black Friday Deals"); // Verify the text matches
})