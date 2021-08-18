
Feature: Test

Scenario: Test Karate
Given def color = 'red '
And def num = 5
Then assert color + num == 'red 5'

Scenario: UIAutomation
  Given driver 'https://www.amazon.com'
  And driver.maximize()
  And waitFor("{div/a}Computers")
  And waitFor("{}Computers")
  And waitFor("{^a}Today")
  * delay(5000)
  * waitFor("//h3[text()='Karate UI - Karate -Intuit")
  * leftOf("{^a}Today").find('{a}Best Sellers').click()
    * delay(7000)


  Scenario:
    * url 'http://localhost:4200'

  Scenario:
    Given driver 'https://www.amazon.com'
    * driver.http.path('url').post({ url: 'https://github.com' })