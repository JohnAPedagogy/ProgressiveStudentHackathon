package io.cucumber.skeleton;

import io.cucumber.pagetests.HomePageTest;
import io.cucumber.pagetests.LoginPageTest;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;

public class StepDefinitions {
    @Given("I am on the home page")
    public void testHomepage(){
        HomePageTest homePageTest = new HomePageTest();
        homePageTest.visit();
    }
}
