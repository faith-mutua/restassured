package stepdefs;

import config.EndpointURLs;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import formdata.TranslationData;
import general.ReusableFunctions;

import static stepdefs.Hooks.RequestFormData;
import static stepdefs.Hooks.endPoint;

public class TranslationSteps {
    @Given("I Set translate given text")
    public void i_Set_translate_given_text(){
        endPoint = EndpointURLs.TRANSLATE_TEXT;
        RequestFormData = TranslationData.getTranslation();
    }

    @Then("I receive text translated in the new language")
    public void i_receive_text_translated_in_the_new_language(){
        ReusableFunctions.thenFunction(Hooks.HTTP_RESPONSE_SUCCESS);
    }

    @Given("I Set get all languages available")
    public void iSetGetAllLanguagesAvailable() {
        endPoint = EndpointURLs.GET_LANGUAGES;
    }

    @Then("I receive a valid response for fetching available languages")
    public void iReceiveAValidResponseForFetchingAvailableLanguages() {
        ReusableFunctions.thenFunction(Hooks.HTTP_RESPONSE_SUCCESS);
    }
}
