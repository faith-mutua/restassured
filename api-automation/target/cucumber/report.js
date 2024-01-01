$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/01_Translation.feature");
formatter.feature({
  "name": "Translation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Translation"
    }
  ]
});
formatter.scenario({
  "name": "Translate a given text",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Translation"
    },
    {
      "name": "@POST"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am Testing Case : \"100\"",
  "keyword": "Given "
});
formatter.match({
  "location": "GenericSteps.i_am_Testing_Case(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Set translate given text",
  "keyword": "And "
});
formatter.match({
  "location": "TranslationSteps.i_Set_translate_given_text()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Set request HEADER and FORMDATA",
  "keyword": "When "
});
formatter.match({
  "location": "GenericSteps.i_Set_request_HEADER_and_FORMDATA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Send a POST HTTP request",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.send_a_POST_HTTP_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive text translated in the new language",
  "keyword": "Then "
});
formatter.match({
  "location": "TranslationSteps.i_receive_text_translated_in_the_new_language()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Get all available languages",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Translation"
    },
    {
      "name": "@GET"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am Testing Case : \"101\"",
  "keyword": "Given "
});
formatter.match({
  "location": "GenericSteps.i_am_Testing_Case(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Set get all languages available",
  "keyword": "And "
});
formatter.match({
  "location": "TranslationSteps.iSetGetAllLanguagesAvailable()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Set request HEADER",
  "keyword": "When "
});
formatter.match({
  "location": "GenericSteps.i_Set_request_HEADER()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Send a GET HTTP request",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.send_a_GET_HTTP_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive a valid response for fetching available languages",
  "keyword": "Then "
});
formatter.match({
  "location": "TranslationSteps.iReceiveAValidResponseForFetchingAvailableLanguages()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});