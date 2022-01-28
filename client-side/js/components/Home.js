import artImg from "../../images/art.png";
import scienceImg from "../../images/science.png";
import techImg from "../../images/tech.png";

export default function Home() {
  return `
    <div class="container-fluid api-button text-center" id="app">
    <h3 class="margin" id="title">DISCOVER KNOWLEDGE AND ADVENTURE</h3><br>
    <div class="row">
      <div class="col-sm-4">
        <img src="${artImg}" class="img-responsive margin img-rounded" alt="Image" style="display:inline" alt="art"
          width="250" height="150">
        <div class="hover-effect">
          <div class="hover-text">CHOOSE A TOPIC</div>
        </div>
      </div>
      <div class="col-sm-4">
        <img src="${scienceImg}" class="img-responsive margin img-rounded" id="scienceTile" alt="Image" style="display:inline"
          alt="science" width="250" height="250">
        <div class="hover-effect">
          <div class="hover-text">CHOOSE A TOPIC</div>
        </div>
      </div>
      <div class="col-sm-4">
        <img src="${techImg}" class="img-responsive margin img-rounded" id="technologyTile" alt="Image"
          style="display:inline" alt="tech" width="250" height="250">
        <div class="hover-effect">
          <div class="hover-text">CHOOSE A TOPIC</div>
        </div>
      </div>
    </div>
  </div>
    `;

}