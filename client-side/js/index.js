import About from "./components/About";
import Art from "./components/Art.js";
import BrainBreak from "./components/BrainBreak";
import BrainBreaks from "./components/BrainBreaks";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Melroy from "./components/Melroy.js"
import Mukai from "./components/Mukai.js";
import ProgrammingResource from "./components/ProgrammingResource.js";
import ProgrammingResources from "./components/ProgrammingResources.js";
import SpaceResource from "./components/SpaceResource.js";
import SpaceResources from "./components/SpaceResources.js";
import apiHelpers from "./api-helpers/apiHelpers.js";

const app = document.querySelector("#app");

buildPage();

function buildPage() {
  renderHome();
  navAbout();
  navContact();
  navHome();
  navTechnology();
  navScience();
  navBrainBreaks();
  navArt();
}

function renderHome() {
  app.innerHTML = Home();
}

function navHome() {
  const homeElem = document.querySelector(".navbar-home");
  homeElem.addEventListener("click", () => {
    app.innerHTML = Home();
    navAbout();
    navContact();
    navHome();
    navTechnology();
    navScience();
    navBrainBreaks();
    navArt();
  });
}

function navAbout() {
  const aboutElem = document.querySelector(".navbar-about");
  aboutElem.addEventListener("click", () => {
    // console.log("button clicked");
    app.innerHTML = About();
  });
}

function navContact() {
  const contactElem = document.querySelector(".navbar-contact");
  contactElem.addEventListener("click", () => {
    app.innerHTML = Contact();
  });
}

function navArt() {
  const lingCover = document.querySelector("#artTile");
  lingCover.addEventListener("click", () => {
    apiHelpers.getRequest(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/39359",
      (metObject) => {
        app.innerHTML = Art(metObject);
      }
    );
  });
}

//Lyzz's function
function navScience() {
  const scienceElem = document.querySelector("#scienceTile");
  scienceElem.addEventListener("click", () => {

    app.innerHTML = SpaceResources();
    retrieveSpaceResource();
  });
}

function retrieveSpaceResource() {
  app.addEventListener("click", (event) => {
    const spaceId = document.querySelector("#spaceId").value;
    if (event.target.classList.contains("space__1")) {
      apiHelpers.getRequest("https://images-api.nasa.gov/search?q=females", (spaceId) => {
        console.log('SPACE ID', spaceId);
        app.innerHTML = SpaceResource(spaceId);
      });
    } else if (event.target.classList.contains("space__2")) {
      apiHelpers.getRequest("https://images-api.nasa.gov/search?q=Chiaki%20Mukai", (spaceId) => {
        console.log('SPACE ID', spaceId);
        app.innerHTML = Mukai(spaceId);
      });
    } else if (event.target.classList.contains("space__3")) {
      apiHelpers.getRequest("https://images-api.nasa.gov/search?q=pamela%20melroy", (spaceId) => {
        console.log('SPACE ID', spaceId);
        app.innerHTML = Melroy(spaceId);
      });
    }
  });
  
  returnToScience();
}

function returnToScience() {
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("returnScience")) {
      app.innerHTML = SpaceResources();
    }
  });
}

function navBrainBreaks() {
  const brainBreakElem = document.querySelector("#brainBreakTile");
  brainBreakElem.addEventListener("click", () => {
    // const input = prompt("Please enter an activity type of " +
    // "education, recreational, social, diy, charity, cooking, relaxation, music, or busywork", "education");
    // alert(input);
    app.innerHTML = BrainBreaks();
    renderBrainBreak();
  });
}

function renderBrainBreak() {
  app.addEventListener("click", (event) => {
    const breakId = event.target.querySelector("#breakId").value;
    if (event.target.classList.contains("brain-breaks__activity")) {
      apiHelpers.getRequest(`http://www.boredapi.com/api/activity?type=${breakId}`, brainBreak => {
        app.innerHTML = BrainBreak(brainBreak);
      });
    } else if (event.target.classList.contains("brain-breaks__participants")) {
      apiHelpers.getRequest(`http://www.boredapi.com/api/activity?participants=${breakId}`, brainBreak => {
        app.innerHTML = BrainBreak(brainBreak);
      });
    }
  });
  returnToBreaks();
}

function returnToBreaks() {
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("returnBreaks")) {
      app.innerHTML = BrainBreaks();
    }
  });
}

//Madison's Functions
//Function to navigate to all ProgrammingResources page by clicking on tile
function navTechnology() {
  const technologyElem = document.querySelector("#technologyTile");
  technologyElem.addEventListener("click", () => {
    apiHelpers.getRequest("http://localhost:8080/api/programming-resources", programmingResources => {
      app.innerHTML = ProgrammingResources(programmingResources);
    })
    renderProgrammingResource();
    addProgramingResourceToAPI()
  })
}

//Function to navigate to individual ProgrammingResource page by clicking on it's name on all ProgrammingResources page
function renderProgrammingResource() {
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("programming-resource__list")) {
      const programmingResourceId = event.target.querySelector(
        "#programmingLanguageId"
      ).value;
      apiHelpers.getRequest(
        `http://localhost:8080/api/programming-resources/${programmingResourceId}`,
        (programmingResource) => {
          app.innerHTML = ProgrammingResource(programmingResource);
        }
      );
      returnToAllResources();
      addProgramingResourceToAPI();
    }
  });
}

//Function to return to all ProgrammingResources page by clicking on button in individual ProgrammingResource page
function returnToAllResources() {
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("returnResources")) {
      apiHelpers.getRequest(
        "http://localhost:8080/api/programming-resources",
        (programmingResources) => {
          app.innerHTML = ProgrammingResources(programmingResources);
        }
      );
    }
  });

}

//Function to allow user to add resources to API
function addProgramingResourceToAPI() {
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-programming-resource__submit")) {
      const addResourceName = event.target.parentElement.querySelector(".add-programming-resource__name").value;
      const addResourceDescription = event.target.parentElement.querySelector(".add-programming-resource__description").value;
      const addResourceUrl = event.target.parentElement.querySelector(".add-programming-resource__website__url").value;
      const addResourceLogo = event.target.parentElement.querySelector(".add-programming-resource__website__logoLink").value;

      apiHelpers.postRequest("http://localhost:8080/api/programming-resources/add-resource", {
          name: addResourceName,
          description: addResourceDescription,
          url: addResourceUrl,
          logo: addResourceLogo
        },
        (programmingResources) => (app.innerHTML = ProgrammingResources(programmingResources)));
    }
  });
}