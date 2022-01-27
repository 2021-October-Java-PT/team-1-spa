package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.ProgrammingResource;

import java.util.Optional;

public interface ProgrammingResourceRepository extends CrudRepository<ProgrammingResource, Long> {
    Optional<ProgrammingResource> findByName(String languageName);
}