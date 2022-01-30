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
    public Collection<ProgrammingResource> getProgrammingResources() {
        return (Collection<ProgrammingResource>) programmingRepo.findAll();
    }

    @GetMapping("/api/programming-resources/{id}")
    public Optional<ProgrammingResource> getProgrammingResource(@PathVariable Long id) {
        return programmingRepo.findById(id);
    }

    @PostMapping("/api/programming-resources/add-resource")
    public Collection<ProgrammingResource> addProgrammingResource(@RequestBody String body) throws JSONException {
        JSONObject newResource = new JSONObject(body);
        String name = newResource.getString("name");
        String description = newResource.getString("description");
        String url = newResource.getString("url");
        String logoLink = newResource.getString("logo");

        Optional<ProgrammingResource> resourceToAddOpt = programmingRepo.findByName(name);

        if (resourceToAddOpt.isEmpty()) {
            ProgrammingResource resourceToAdd = new ProgrammingResource(name, description, url, logoLink);
            programmingRepo.save(resourceToAdd);
        }

        return (Collection<ProgrammingResource>) programmingRepo.findAll();
    }

}