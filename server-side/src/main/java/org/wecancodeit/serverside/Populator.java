package org.wecancodeit.serverside;

import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.model.ProgrammingLanguage;
import org.springframework.boot.CommandLineRunner;
import org.wecancodeit.serverside.repository.ProgrammingLanguageRepository;

import javax.annotation.Resource;

@Component

public class Populator implements CommandLineRunner {

    @Resource
    private ProgrammingLanguageRepository programmingRepo;

    ProgrammingLanguage scratch = new ProgrammingLanguage("Scratch", "Scratch is the world's largest free coding community for kids.", "https://scratch.mit.edu/");
    ProgrammingLanguage codeOrg = new ProgrammingLanguage("code.org", "Code.org® is a nonprofit dedicated to expanding access to computer science in schools and increasing participation by young women and students from other underrepresented groups.", "https://code.org/");
    ProgrammingLanguage codeCombat = new ProgrammingLanguage("Code Combat", "CodeCombat is acommunity project,with hundreds of players volunteering to create levels, contribute to our code to add features, fix bugs, playtest, and even translate the game into 50 languages so far.", "https://codecombat.com/home");
    ProgrammingLanguage blockyGames = new ProgrammingLanguage("BlockyGames", "Blocky offers a variety of games adopting the approach of teaching kids how to code using interactive challenges", "https://blockly.games");
    ProgrammingLanguage crunchzilla = new ProgrammingLanguage("crunchzilla", "Crunchzilla is one of the simplest teaching platforms when it comes to boosting your kids' knowledge of coding.", "http://www.crunchzilla.com/code-monster");

    @Override
    public void run(String... args) throws Exception {
        
    }
}
