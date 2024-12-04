import { Given,When,Then }  from "@wdio/cucumber-framework";

Given(/^I am on the Amazon homepage$/, async () => {
    await browser.url('https://www.amazon.com')
    await browser.maximizeWindow()
    await browser.pause(3000)
})

Then(/^Enter text in(.*)$/, async function(searchBox) {
    let SearchText = await $("#twotabsearchtextbox")
    await browser.pause(3000)
    await SearchText.setValue(searchBox)
    await browser.pause(3000)
    const searchButton = await $("#nav-search-submit-button")
    await searchButton.waitForDisplayed({ timeout: 5000 })
    await searchButton.click() // Click the search button
    await browser.pause(3000)
    const addToCartButton = await $("//button[@id='a-autoid-1-announce']")
    await addToCartButton.waitForDisplayed({ timeout: 5000 })
    // Click the 'Add to Cart' button
    await addToCartButton.click()
    })



// Wait for the search button to be displayed and clickable


// Then(/^I type mobile into the search bar $/, async function() {
//     let searchBox = await $("[aria-label='Search Amazon']")
//       // Wait for the search bar to be displayed and enabled
//     await searchBox.waitForDisplayed({ timeout: 10000 })
//     await searchBox.waitForEnabled({ timeout: 10000 })
//     console.log("Search bar is ready for interaction.")
//     await browser.pause(3000)
//    // Clear any existing value and type "mobile" into the search box
//     await searchBox.clearValue()
//     await searchBox.setValue('mobile')
//     await browser.pause(3000)

// })  


//   When('I click the search button', async () => {
//     const searchButton = await $("input.nav-input[type="submit"]")
//     await searchButton.click()
//   })
  
//   Then('I should see search results for {string}', async (searchTerm: string) => {
//     const searchResults = await $('#search');
//     expect(await searchResults.getText()).to.include(searchTerm)
//   })

// When(/^I search for mobile $/, async function () {
    
//     const searchBox = await $("input#twotabsearchtextbox")
//     await searchBox.waitForDisplayed({ timeout: 5000 }); // Wait for the search box to be displayed
//     await searchBox.clearValue()
//     await searchBox.setValue('mobile')
//     // const searchButton = await $("input#nav-search-submit-button")
//     // await searchButton.waitForDisplayed({ timeout: 5000 })
//     // await searchButton.click()
// })

// When('I select the first mobile from the results', async () => {
//     const firstResult = await $('div.s-main-slot div[data-component-type="s-search-result"] h2 a');
//     await firstResult.click();
// });

// Then('I add the mobile to the cart', async () => {
//     const addToCartButton = await $('#add-to-cart-button');
//     await addToCartButton.waitForDisplayed({ timeout: 5000 });
//     await addToCartButton.click();
// });

// Then('the cart should contain 1 item', async () => {
//     const cartCount = await $('#nav-cart-count');
//     await cartCount.waitForDisplayed({ timeout: 5000 });
//     const itemCount = await cartCount.getText();
//     expect(itemCount).to.equal('1');
// });