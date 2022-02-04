import busywork from "../../images/busywork-box.png";
import charity from "../../images/charity-box.png";
import cooking from "../../images/cooking-box.png";
import diy from "../../images/diy-box.png";
import education from "../../images/education-box.png";
import music from "../../images/music-box.png";
import recreation from "../../images/recreation-box.png";
import relax from "../../images/relax-box.png";
import social from "../../images/social-box.png";

export default function BrainBreaks() {
    return `
    <div class="api-page-container">
    <div class="api-title">
        <h1>Let's Take a Break!</h1>
    </div>
    <div class="api-topics">
    <h2>Mystery Activity by Type:</h2>
        <ul>     
            <li class="brain-breaks__activity btn btn-info topic-list"><img src="${education}">
                <input type="hidden" id="breakId" value="education"></li>
            <li class="brain-breaks__activity btn btn-info topic-list"><img src="${recreation}">
                <input type="hidden" id="breakId" value="recreational"></li>
            <li class="brain-breaks__activity btn btn-info topic-list"><img src="${social}">
                <input type="hidden" id="breakId" value="social"></li>
            <li class="brain-breaks__activity btn btn-info topic-list"><img src="${diy}">
                <input type="hidden" id="breakId" value="diy"></li>
            <li class="brain-breaks__activity btn btn-info topic-list"><img src="${charity}">
                <input type="hidden" id="breakId" value="charity"></li>
            <li class="brain-breaks__activity btn btn-info topic-list"><img src="${cooking}">
                <input type="hidden" id="breakId" value="cooking"></li>
            <li class="brain-breaks__activity btn btn-info topic-list"><img src="${relax}">
                <input type="hidden" id="breakId" value="relaxation"></li>
            <li class="brain-breaks__activity btn btn-info topic-list"><img src="${music}">
                <input type="hidden" id="breakId" value="music"></li>
            <li class="brain-breaks__activity btn btn-info topic-list"><img src="${busywork}">
                <input type="hidden" id="breakId" value="busywork"></li>
        </ul>
        <h2>Activity by Number of Participants:</h2>
        <ul>
            <li class="brain-breaks__participants btn btn-info topic-list">1
                <input type="hidden" id="breakId" value="1"></li>
            <li class="brain-breaks__participants btn btn-info topic-list">2
                <input type="hidden" id="breakId" value="2"></li>
            <li class="brain-breaks__participants btn btn-info topic-list">3
                <input type="hidden" id="breakId" value="3"></li>
        </ul>
    </div>    
    </div>`;
  }

//Boredom API https://www.boredapi.com/documentation


