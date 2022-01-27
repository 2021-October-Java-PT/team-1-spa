package org.wecancodeit.serverside.rest.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.repositories.ProgrammingRepository;
import org.wecancodeit.serverside.models.ProgrammingResource;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class ProgrammingRestController {

    @Resource
    private ProgrammingRepository programmingRepo;

    @GetMapping("/api/programming-languages")
    public Collection<ProgrammingResource> getProgrammingLanguages() {
        return (Collection<ProgrammingResource>) programmingRepo.findAll();
    }

    @GetMapping("/api/programming-languages/{id}")
    public Optional<ProgrammingResource> getProgrammingLanguage(@PathVariable Long id) {
        return programmingRepo.findById(id);
    }

    @PostMapping("/api/programming-languages/add-language")
    public Collection<ProgrammingResource> addItem(@RequestBody String body) throws JSONException {
        JSONObject newLanguage = new JSONObject(body);
        String name = newLanguage.getString("language name");
        String description = newLanguage.getString("language description");
        String educationWebsiteUrl = newLanguage.getString("website URL");

        Optional<ProgrammingResource> languageToAddOpt = programmingRepo.findByName(name);

        if (languageToAddOpt.isEmpty()) {
            ProgrammingResource languageToAdd = new ProgrammingResource(name, description, educationWebsiteUrl);
            programmingRepo.save(languageToAdd);
        }

        return (Collection<ProgrammingResource>) programmingRepo.findAll();
    }

}