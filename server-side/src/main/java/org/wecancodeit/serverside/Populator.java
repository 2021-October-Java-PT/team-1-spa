package org.wecancodeit.serverside;

import org.springframework.stereotype.Component;
import org.springframework.boot.CommandLineRunner;
import org.wecancodeit.serverside.models.ProgrammingResource;
import org.wecancodeit.serverside.repositories.ProgrammingResourceRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private ProgrammingResourceRepository programmingRepo;

    @Override
    public void run(String... args) throws Exception {


        ProgrammingResource blocklyGames = new ProgrammingResource("Blockly Games", "Blocky offers a variety of games adopting the approach of teaching kids how to code using interactive challenges", "https://blockly.games", "https://i.ibb.co/Sfk11bJ/blocklygames-logo.png");
        ProgrammingResource codeCombat = new ProgrammingResource("Code Combat", "CodeCombat is acommunity project,with hundreds of players volunteering to create levels, contribute to our code to add features, fix bugs, playtest, and even translate the game into 50 languages so far.", "https://codecombat.com/home", "https://i.ibb.co/Qp08MrH/codecombat-logo.png");
        ProgrammingResource codeOrg = new ProgrammingResource("code.org", "Code.org® is a nonprofit dedicated to expanding access to computer science in schools and increasing participation by young women and students from other underrepresented groups.", "https://code.org/", "https://i.ibb.co/G9W0srC/codeorg-logo.png");
        ProgrammingResource crunchzilla = new ProgrammingResource("Crunchzilla", "Crunchzilla is one of the simplest teaching platforms when it comes to boosting your kids' knowledge of coding.", "http://www.crunchzilla.com/code-monster", "https://i.ibb.co/H7bd7gD/crunchzilla-logo.png");
        ProgrammingResource scratch = new ProgrammingResource("Scratch", "Scratch is the world's largest free coding community for kids.", "https://scratch.mit.edu/", "https://i.ibb.co/Hd4vfqc/scratch-logo.png");

        programmingRepo.save(blocklyGames);
        programmingRepo.save(codeCombat);
        programmingRepo.save(codeOrg);
        programmingRepo.save(crunchzilla);
        programmingRepo.save(scratch);


    }
}