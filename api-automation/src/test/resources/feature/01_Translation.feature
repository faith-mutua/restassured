@Translation

  Feature: Translation

    @POST
    Scenario: Translate a given text
      Given I am Testing Case : "100"
      And I Set translate given text
      When I Set request HEADER and FORMDATA
      And Send a POST HTTP request
      Then I receive text translated in the new language

    @GET
    Scenario: Get all available languages
      Given I am Testing Case : "101"
      And I Set get all languages available
      When I Set request HEADER
      And Send a GET HTTP request
      Then I receive a valid response for fetching available languages
