import Dia from "../../images/Dia.jpg";
import Jo from "../../images/Josephine.png";
import Lyzz from "../../images/Lyzz.png";
import Madison from "../../images/Madison1.jpg";
import Nicole from "../../images/Nicole1.png";
import gitHubImg from "../../images/GitHub.png";
import linkedInImg from "../../images/LinkedIn.png";

export default function About() {
  return `
    <div class="container-fluid api-button text-center">    
    <h3 class="margin" id="title">ABOUT US</h3><br>
    <main class="bios">
        <section id="lyzzhans">
            <h2>Lyzz Hans</h2>
            <img class="headshot" src="${Lyzz}" alt="Headshot" />
            <p class>I'm a coding hippie. Two things fascinate me: people and coding. I am constantly curious about our interconnectivity and a tireless advocate for inclusiveness and diversity. 
            During the pandemic, I enrolled in a Software Development Bootcamp and learned that I am obsessed with learning all things code and that test driven development is my jam.
            My enthusiasm for people and coding transpires well in Agile environments. I am always willing to help a fellow developer with questions and advice and I love sparking joy in teams.
            As a previous educator for adult learners, I am an avid believer that we are all life long learners. I transition quickly into any team because I am ready to work, but also ready to learn from my team and mentors.
            </p>
            <a id="github" href="https://github.com/LyzzHans">
                <img  id="github" src="${gitHubImg}" alt="github" />
            </a>
            <a id="linkedin" href="https://linkedin.com/in/lyzzhans/">
                <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
            </a>
            </section>
        <section id="nicolehofer">
          <h2>Nicole Hofer</h2>
          <img class="headshot" src="${Nicole}" alt="Headshot" />
          <p class>
            A rising software developer permanently curious about technology.
            Currently specializes in front-end applications and robotics. During
            free time, enjoys working on and building a homestead.
          </p>
          <a id="github" href="https://github.com/nichofer">
            <img  id="github" src="${gitHubImg}" alt="github" />
          </a>
          <a id="linkedin" href="http://linkedin.com/in/nicole-hofer">
            <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
          </a>
        </section>
        <section id="madisonmitchell">
          <h2>Madison Mitchell</h2>
          <img class="headshot" src="${Madison}" alt="Headshot" />
          <p class>A highly motivated Software Developer with 9 years experience working in the Technology Industry. 
          Currently working for a Fortune 500 Tech Company as a four-consecutive-year Triple Exceeding Expectations Tech Advisor 
          that is dedicated to producing high quality products and results. Naturally curious with a strong desire to grow skill set. 
          Excels in resolving challenges encountered in the workplace with innovative solutions and passionate about creating high quality, creative products.
          An avid reader, particuarly fantasy novels, and enjoys working on side projects to continue to challenge oneself as well as create handy products around the house, 
          like a smart mirror that tells the time, current events and weather updates.
          </p>
          <a id="github" href="https://github.com/madison-mitchell">
            <img  id="github" src="${gitHubImg}" alt="github" />
          </a>
          <a id="linkedin" href="http://linkedin.com/in/madison-r-mitchell">
            <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
          </a>
        </section>
        <section id="diascruggs">
          <h2>Dia Scruggs</h2>
          <img class="headshot" src="${Dia}" alt="Headshot" />
          <p class>I have always loved creativity and art. I write in my free time stories of romance, fantasy and action. I also love taking photos of pretty things like the sky and flowers. 
          I never knew how to further my need to add to the art world without having a graphic design degree or the ability to sketch and paint. That is until I found web design. Now I want to develop and master the skills 
          to make and design pretty and beautiful websites. I am still new and have so much to learn, but I am determined to do my best and master as much as I can to 
          one day be able to build websites that people will wow at.
          </p>
          <a id="github" href="https://github.com/DiaS793">
            <img  id="github" src="${gitHubImg}" alt="github" />
          </a>
          <a id="linkedin" href="https://linkedin.com/in/dia-scruggs/">
            <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
          </a>
        </section>
        <section id="josephinewilson">
          <h2>Josephine Wilson</h2>
          <img class="headshot" src="${Jo}" alt="Headshot" />
          <p class>Genuinely curious and quality-driven developer offering a strong foundation in software engineering and website development. 
          Experienced in creating high-quality designs and build into a functioning browser compatible website using object-oriented programming, 
          test driven development, Java, HTML, CSS, JavaScript, WordPress, search engine optimization, and search engine marketing.
          When I'm not coding, I'm out in the woods hiking or fishing.            
          </p>
          <a id="github" href="https://github.com/JPWilson2021">
            <img  id="github" src="${gitHubImg}" alt="github" />
          </a>
          <a id="linkedin" href="https://linkedin.com/in/jpwilson2021/">
            <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
          </a>
        </section>        
    </div>`;
}
