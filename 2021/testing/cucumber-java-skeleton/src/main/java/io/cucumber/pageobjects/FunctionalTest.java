
package io.cucumber.pageobjects;

import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class FunctionalTest {
    protected static WebDriver driver;

    @BeforeClass
    public static void setUp(){
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @After
    public void cleanUp(){
        driver.manage().deleteAllCookies();
    }

    @AfterClass
    public static void tearDown(){
        driver.close();
    }
}

/*
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class First {

    public static void main(String[] args) {

    // declaration and instantiation of objects/variables
    System.setProperty("webdriver.chrome.driver", "D:\\ChromeDriver\\chromedriver.exe");
    WebDriver driver=new ChromeDriver();

// Launch website
    driver.navigate().to("http://www.google.com/");

    // Click on the search text box and send value
    driver.findElement(By.id("lst-ib")).sendKeys("javatpoint tutorials");

    // Click on the search button
    driver.findElement(By.name("btnK")).click();

    }

}
* */