Feature: Payments

    Background:
        Given on app launch

    Scenario: User should purchase airtime successfully
        When the user is on the payments screen and clicks Airtime
        Then they should be able to purchase airtime successfully
    
    # Scenario: User should not purchase airtime with invalid OTP
    #     When the user is on the payments screen and clicks Airtime
    #     And they try to complete airtime purchase with invalid OTP
    #     Then they should see an error message

    # Scenario: User should purchase data successfully
    #     When the user is on the payments screen and clicks Airtme/Data
    #     Then they should be able to purchase data successfully
    
    # Scenario: User should not purchase data with invalid OTP
    #     When the user is on the payments screen and clicks Airtme/Data
    #     And they try to complete data purchase with invalid OTP
    #     Then they should see an error message
        