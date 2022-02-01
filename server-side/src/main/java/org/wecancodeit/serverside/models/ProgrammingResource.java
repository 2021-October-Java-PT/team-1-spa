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
    private String url;
    private String logoUrl;

    public ProgrammingResource(String name, String description, String url, String logoUrl) {
        this.name = name;
        this.description = description;
        this.url = url;
        this.logoUrl = logoUrl;
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

    public String getUrl() {
        return url;
    }

    public String getLogoUrl() {
        return logoUrl;
    }
}