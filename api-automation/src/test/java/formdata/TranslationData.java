package formdata;

import general.ReusableFunctions;

import java.util.Map;

public class TranslationData {
    public static Map<String, String> getTranslation (){
        return ReusableFunctions.form_data("source_language","en", "target_language","id",
                "text","What is your name?");
    }
}
