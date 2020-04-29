package uk.gov.harrow.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.gov.harrow.utility.Utility;

public class HomePage extends Utility {
    private static Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//span[@class='icon-fallback']")
    WebElement _loginOrRegisterLink;

    @FindBy(xpath = "//span[@class='button__text'][contains(text(),'Services')]")
    WebElement _servicesBtn;

    public void clickOnLoginOrRegisterLink() {
        Reporter.addStepLog("Click on login or register link " + _loginOrRegisterLink.toString());
        clickOnElement(_loginOrRegisterLink);
        log.info("Click on login or register link " + _loginOrRegisterLink.toString());
    }

    public void clickOnServicesBtn() {
        Reporter.addStepLog(" Click on service button " + _servicesBtn.toString() + "<br>");
        clickOnElement(_servicesBtn);
        log.info(" Click on service button " + _servicesBtn.toString());
    }

    public String getServicesText() {
        waitUntilElementToBeClickable((By) _servicesBtn, 10);
        return getTextFromElement(_servicesBtn);
    }


}
