# Feature: Validate upload of file
# Scenario: File needs to be uploaded
#     # Given testautomation site is open
#     # Then upload file from fileupload folder
Feature: Add a mobile to the cart on Amazon
#   Scenario: Search for a mobile and add the first result to the cart
#     Given I am on the Amazon homepage
#     When I type mobile into the search bar
# #     # And I select the first mobile from the results
# #     # Then I add the mobile to the cart
# #     # And the cart should contain 1 item

  Scenario Outline: Enter text mobile in search box
    Given I am on the Amazon homepage
    Then Enter text in <searchBox>

    Examples:
      | Testid | searchBox |
      |    001 | mobile |
