
Feature: Test

Scenario: Test Karate
Given def color = 'red '
And def num = 5
Then assert color + num == 'red 5'

Scenario: UIAutomation
  Given driver 'https://www.google.com'
  And waitFor("input[title='Search']")
  And input("input[title='Search']",'Karate UI Automation')
  And waitFor(".FPdoLc input[value='Google Search']")
  And click(".FPdoLc input[value='Google Search']")
  Then waitFor("//h3[text()='Karate UI - Karate -Intuit")
