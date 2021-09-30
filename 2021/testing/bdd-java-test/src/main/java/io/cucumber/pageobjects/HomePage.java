
package io.cucumber.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends PageObject {

    @FindBy(tagName = "h1")
    private WebElement welcome;

    @FindBy(id="RegisterButton")
    private WebElement registerButton;

    @FindBy(id="LoginButton")
    private WebElement loginButton;

    public HomePage(WebDriver driver) {
        super(driver);
    }

    public void login(){
        this.loginButton.click();
    }

    public void enterAddress(String address, String zipCode){
       this.registerButton.click();
    //    return new RegisterPage(driver);
    }

    public boolean isInitialized() {
        return welcome.isDisplayed();
    }
}
