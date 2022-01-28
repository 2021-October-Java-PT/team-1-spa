package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class ProgrammingResource {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @Lob
    private String description;
    @Lob
    private String educationWebsiteUrl;
    private String logoImage;

    public ProgrammingResource(String name, String description, String educationWebsiteUrl, String logoImage) {
        this.name = name;
        this.description = description;
        this.educationWebsiteUrl = educationWebsiteUrl;
        this.logoImage = logoImage;
    }

    public ProgrammingResource() {
    }

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

    public String getLogoImage() {
        return logoImage;
    }
}