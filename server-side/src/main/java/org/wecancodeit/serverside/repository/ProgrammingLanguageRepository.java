package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.ProgrammingLanguage;

import java.util.Optional;

public interface LanguageRepository extends CrudRepository<ProgrammingLanguage, Long> {
    Optional<ProgrammingLanguage> findByName(String languageName);
}
