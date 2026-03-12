Feature: Ecommerce validations

Scenario:Placing the order
Given a login to Ecommerce application using "username" and "password"
When Add "zara coat 3" to cart
Then Verify "zara coat 3 " is displayed in cart
When Enter valid details and place the order
Then Verify order is present in orderHistory page