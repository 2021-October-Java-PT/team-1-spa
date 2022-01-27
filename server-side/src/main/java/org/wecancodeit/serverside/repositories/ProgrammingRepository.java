package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.ProgrammingResource;

import java.util.Optional;

public interface ProgrammingLanguageRepository extends CrudRepository<ProgrammingResource, Long> {
    Optional<ProgrammingResource> findByName(String languageName);
}
