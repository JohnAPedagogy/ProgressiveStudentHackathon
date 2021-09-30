package io.cucumber.pagetests;

import io.cucumber.pageobjects.FunctionalTest;
import io.cucumber.pageobjects.HomePage;
import io.cucumber.pageobjects.LoginPage;
import org.junit.Test;

import static org.junit.Assert.assertTrue;

public class HomePageTest extends FunctionalTest {

    @Test
    public void register(){
        FunctionalTest.setUp();
        driver.get("http://localhost:4200");

        LoginPage signUpPage = new LoginPage(driver);
        // assertTrue(signUpPage.isInitialized());

        signUpPage.enterName("First", "Last");
        signUpPage.enterAddress("123 Street", "12345");

        //signUpPage.cleanUp();
        FunctionalTest.tearDown();

        // ReceiptPage receiptPage = signUpPage.submit();
        // assertTrue(receiptPage.isInitialized());

        //assertEquals("Thank you", receiptPage.confirmationHeader());
    }

    @Test
    public void visit(){
        FunctionalTest.setUp();
        driver.get("http://localhost:4200");

        HomePage homePage = new HomePage(driver);
        boolean initpage  = (homePage.isInitialized());
        System.out.println(initpage?"initialised********":"not initialised***********");
        assertTrue(initpage);

        cleanUp();
        FunctionalTest.tearDown();
    }
}