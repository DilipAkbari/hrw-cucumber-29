$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/gov/harrow/resources/featurefile/service.feature");
formatter.feature({
  "line": 1,
  "name": "Services function",
  "description": "As a user i want to check the service on Harrow website",
  "id": "services-function",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15004927300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to service page successfully",
  "description": "",
  "id": "services-function;user-should-navigate-to-service-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on services button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to service page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SerivceSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 206359400,
  "status": "passed"
});
formatter.match({
  "location": "SerivceSteps.iClickOnServicesButton()"
});
formatter.result({
  "duration": 362540300,
  "status": "passed"
});
formatter.match({
  "location": "SerivceSteps.iShouldNavigateToServicePageSuccessfully()"
});
formatter.result({
  "duration": 85560700,
  "status": "passed"
});
formatter.after({
  "duration": 876556900,
  "status": "passed"
});
formatter.before({
  "duration": 12619807700,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "verify text when user close Service page",
  "description": "",
  "id": "services-function;verify-text-when-user-close-service-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on services button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should navigate to service page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.match({
  "location": "SerivceSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 627300,
  "status": "passed"
});
formatter.match({
  "location": "SerivceSteps.iClickOnServicesButton()"
});
formatter.result({
  "duration": 479117300,
  "status": "passed"
});
formatter.match({
  "location": "SerivceSteps.iShouldNavigateToServicePageSuccessfully()"
});
formatter.result({
  "duration": 124730600,
  "status": "passed"
});
formatter.match({
  "location": "SerivceSteps.iClickOnCloseButton()"
});
formatter.result({
  "duration": 286458800,
  "status": "passed"
});
formatter.after({
  "duration": 916519300,
  "status": "passed"
});
});