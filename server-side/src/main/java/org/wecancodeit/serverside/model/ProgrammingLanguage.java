package org.wecancodeit.serverside.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class ProgrammingLanguage {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @Lob
    private String description;
    @Lob
    private String educationWebsiteUrl;

    public ProgrammingLanguage(String name, String description, String educationWebsiteUrl) {
        this.name = name;
        this.description = description;
        this.educationWebsiteUrl = educationWebsiteUrl;
    }

    public ProgrammingLanguage() {}

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getEducationWebsiteUrl() {
        return educationWebsiteUrl;
    }
}
