package io.cucumber.pagetests;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import io.cucumber.pageobjects.LoginPage;
import io.cucumber.pageobjects.FunctionalTest;
import org.junit.Test;

public class LoginPageTest extends FunctionalTest {

    @Test
    public void signUp(){
        driver.get("http://www.kimschiller.com/page-object-pattern-tutorial/index.html");

        LoginPage signUpPage = new LoginPage(driver);
        // assertTrue(signUpPage.isInitialized());

        signUpPage.enterName("First", "Last");
        signUpPage.enterAddress("123 Street", "12345");

        // ReceiptPage receiptPage = signUpPage.submit();
        // assertTrue(receiptPage.isInitialized());

        //assertEquals("Thank you", receiptPage.confirmationHeader());
    }
}