package org.wecancodeit.serverside.models;


import org.wecancodeit.serverside.models.ProgrammingResource;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class HashTag {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
//    @ManyToMany(mappedBy = "hashTags")
//    private Collection<ProgrammingResource> programmingLanguages;


    public HashTag() {
    }
}
