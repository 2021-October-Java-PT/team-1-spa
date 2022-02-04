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
        ProgrammingResource coderz = new ProgrammingResource("Coderz", "At CoderZ, we believe STEM and Computer Science education are essential for the future and should be universally available to all kids. So we built a gamified coding platform that makes it easy for anyone to learn (and teach), using robots to bring the subject matter to life!", "https://gocoderz.com/", "https://i.ibb.co/Th6Tc0r/coderz-logo.png");
        ProgrammingResource crunchzilla = new ProgrammingResource("Crunchzilla", "Crunchzilla is one of the simplest teaching platforms when it comes to boosting your kids' knowledge of coding.", "http://www.crunchzilla.com/code-monster", "https://i.ibb.co/H7bd7gD/crunchzilla-logo.png");
        ProgrammingResource scratch = new ProgrammingResource("Scratch", "Scratch is the world's largest free coding community for kids.", "https://scratch.mit.edu/", "https://i.ibb.co/Hd4vfqc/scratch-logo.png");
        ProgrammingResource swiftPlaygrounds = new ProgrammingResource("Swift Playgrounds", "        Swift Playgrounds is a revolutionary app for iPad and Mac that makes it fun to learn and experiment with Swift — a powerful programming language created by Apple and used by the pros to build today’s most popular apps. Swift Playgrounds requires no coding knowledge, so it’s perfect for students just starting out. Solve puzzles to master the basics. Then step up to learn the building blocks of apps with interactive walkthroughs designed by Apple. And have fun creating your very own real-life apps.", "https://www.apple.com/swift/playgrounds/", "https://i.ibb.co/xqxGbv0/swiftplaygrounds-logo.png");


        programmingRepo.save(blocklyGames);
        programmingRepo.save(codeCombat);
        programmingRepo.save(codeOrg);
        programmingRepo.save(coderz);
        programmingRepo.save(crunchzilla);
        programmingRepo.save(scratch);
        programmingRepo.save(swiftPlaygrounds);

    }
}