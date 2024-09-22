Feature: Sign In With Pin

    Background:
        Given on app launch

    Scenario: User should sign in with valid credentials
        When the user enters mobile number and pin
        Then the user should be signed in