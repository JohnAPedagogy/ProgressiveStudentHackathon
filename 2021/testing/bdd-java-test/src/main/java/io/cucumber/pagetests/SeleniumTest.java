package io.cucumber.pagetests;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

public class SeleniumTest {
    protected static WebDriver driver;

    public static void main(String[] args) throws InterruptedException {

        // declaration and instantiation of objects/variables
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

// Launch website $x("//button//div[text()='I agree']")
        driver.navigate().to("http://www.google.com/");

        //Thread.sleep(3000);
        //driver.findElement(By.id("L2AGLb")).click();

        WebElement clearpop = new WebDriverWait(driver, 3)
                .until(driver -> driver.findElement(By.id("L2AGLb")));
        clearpop.click();
        //driver.findElement(By.className("QS5gu.sy4vM")).click();

        // accepting javascript alert
       // Alert alert = driver.switchTo().alert();
       // alert.accept();

        // Click on the search text box and send value
        driver.findElement(By.name("q")).sendKeys("javatpoint tutorials");

        // Click on the search button
        driver.findElement(By.name("btnK")).click();

    }

}