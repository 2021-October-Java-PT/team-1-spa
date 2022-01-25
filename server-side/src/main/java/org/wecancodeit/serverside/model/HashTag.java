package org.wecancodeit.serverside.model;


import javax.persistence.*;
import java.util.Collection;

@Entity
public class HashTag {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @ManyToMany(mappedBy = "hashTags")
    private Collection<ProgrammingLanguage> programmingLanguages;


    public HashTag() {
    }
}
