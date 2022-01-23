package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.wecancodeit.serverside.repository.LanguageRepository;
import org.wecancodeit.serverside.model.ProgrammingLanguage;

import javax.annotation.Resource;
import java.util.Collection;

@Controller
public class LanguageController {

    @Resource
    private LanguageRepository languageRepo;

    @PostMapping("/api/coding/add-programming-language")
    public Collection<ProgrammingLanguage> addItem(@RequestBody String body) throws JSONException {
        JSONObject newLanguage = new JSONObject(body);
        String name = newLanguage.getString("language name");
        String description = newLanguage.getString("language description");
        String educationWebsiteUrl = newLanguage.getString("website URL");
        ProgrammingLanguage languageToAdd = new ProgrammingLanguage(name, description, educationWebsiteUrl);
        languageRepo.save(languageToAdd);

        return (Collection<ProgrammingLanguage>) languageRepo.findAll();
    }

}
