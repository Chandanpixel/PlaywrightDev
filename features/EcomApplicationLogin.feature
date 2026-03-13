Feature: E-commerce Application Login and Purchase
  As a user of the Sauce Demo e-commerce site
  I want to log in, add a product to the cart, and complete a purchase
  So that I can verify the shopping workflow

  Scenario: Successful login, add to cart, and checkout
    Given I am on the Sauce Demo login page
    When I enter username "standard_user" and password "secret_sauce"
    And I click the login button
    Then I should be redirected to the inventory page
    When I add "Sauce Labs Backpack" to the cart
    And I go to the cart
    Then I should see "Sauce Labs Backpack" in the cart
    When I proceed to checkout
    And I fill in first name "John", last name "Doe", and postal code "12345"
    And I complete the purchase
    Then I should see the message "Thank you for your order!"
