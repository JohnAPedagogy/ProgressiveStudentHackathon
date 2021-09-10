Feature: Belly

      Scenario: a few cukes
        Given I have 42 cukes in my registerDetails
        When I wait 1 hour
        Then my registerDetails should growl

    Scenario:   1. There is a link to 'Register' an account on the home page.
      # This is an example of a positive test
      Given I am on the home page
      # Then I should see the Link for Registration