Feature: Validate user name through Login

  @Login
  Scenario Outline: Validate user name for successful Login
    Given that I am on the web site from Conduit
    When I type the credentials email and password
    |email  |password  |
    |<email>|<password>|
    Then I see the username and check for successful login
    |username  |
    |<username>|
  Examples:
  |email             |password|username|
  |djchrist@gmail.com|test1234|DjTest  |
    