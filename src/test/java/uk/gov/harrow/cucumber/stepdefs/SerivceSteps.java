package uk.gov.harrow.cucumber.stepdefs;

import com.cucumber.listener.Reporter;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.gov.harrow.pages.HomePage;
import uk.gov.harrow.pages.ServicePage;

public class SerivceSteps {
    @Given("^I am on Home Page$")
    public void iAmOnHomePage() {
        Reporter.addStepLog("I am on Home Page = https://www.harrow.gov.uk/ ");
    }

    @When("^I click on services button$")
    public void iClickOnServicesButton() {
        new HomePage().clickOnServicesBtn();
    }

    @Then("^I should navigate to service page successfully$")
    public void iShouldNavigateToServicePageSuccessfully() {
        new ServicePage().getAdultSocialCareText();
    }

    @And("^I click on close button$")
    public void iClickOnCloseButton() {
        new ServicePage().clickOnCloseButton();
    }
}
