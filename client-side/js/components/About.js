import Lyzz from "../../images/Lyzz.png";
import Nicole from "../../images/Nicole.jpg";
import gitHubImg from "../../images/GitHub.png";
import linkedInImg from "../../images/LinkedIn.png";

export default function About() {
  return `
    <div class="container-fluid api-button text-center">    
    <h3 class="margin" id="">ABOUT US</h3><br>
    <main class="bios">
        <section id="lyzzhans">
            <h2>Lyzz Hans</h2>
            <img class="headshot" src="${Lyzz}" alt="Headshot" />
            <p class>
               
            </p>
            <a id="github" href="">
                <img  id="github" src="${gitHubImg}" alt="github" />
            </a>
            <a id="linkedin" href="">
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
          <img class="headshot" src="" alt="Headshot" />
          <p class>
            
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
          <img class="headshot" src="" alt="Headshot" />
          <p class>
            
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
          <img class="headshot" src="" alt="Headshot" />
          <p class>
            
          </p>
          <a id="github" href="">
            <img  id="github" src="${gitHubImg}" alt="github" />
          </a>
          <a id="linkedin" href="">
            <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
          </a>
        </section>        
    </div>`;
}
