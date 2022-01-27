package org.wecancodeit.serverside.rest.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.ProgrammingResource;
import org.wecancodeit.serverside.repositories.ProgrammingResourceRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class ProgrammingRestController {

    @Resource
    private ProgrammingResourceRepository programmingRepo;

    @GetMapping("/api/programming-resources")
    public Collection<ProgrammingResource> getProgrammingLanguages() {
        return (Collection<ProgrammingResource>) programmingRepo.findAll();
    }

    @GetMapping("/api/programming-resources/{id}")
    public Optional<ProgrammingResource> getProgrammingLanguage(@PathVariable Long id) {
        return programmingRepo.findById(id);
    }

    @PostMapping("/api/programming-resources/add-resource")
    public Collection<ProgrammingResource> addItem(@RequestBody String body) throws JSONException {
        JSONObject newLanguage = new JSONObject(body);
        String name = newLanguage.getString("resource name");
        String description = newLanguage.getString("resource description");
        String educationWebsiteUrl = newLanguage.getString("website URL");

        Optional<ProgrammingResource> resourceToAddOpt = programmingRepo.findByName(name);

        if (resourceToAddOpt.isEmpty()) {
            ProgrammingResource resourceToAdd = new ProgrammingResource(name, description, educationWebsiteUrl);
            programmingRepo.save(resourceToAdd);
        }

        return (Collection<ProgrammingResource>) programmingRepo.findAll();
    }

}