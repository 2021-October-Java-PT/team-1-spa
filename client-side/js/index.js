import About from "./components/About";
import ArtResource from "./components/ArtResource.js";
import ArtResources from "./components/ArtResources.js";
import BrainBreak from "./components/BrainBreak";
import BrainBreaks from "./components/BrainBreaks";
import Contact from "./components/Contact";
import Home from "./components/Home";
import ProgrammingResource from "./components/ProgrammingResource.js";
import ProgrammingResources from "./components/ProgrammingResources.js";
import SpaceResource from "./components/SpaceResource.js";
import SpaceResources from "./components/SpaceResources.js";
import XtraResource from "./components/XtraResource.js"
import apiHelpers from "./api-helpers/apiHelpers.js";

const app = document.querySelector("#app");

let keywordsWomen = ['Sally Ride', 'females', 'Hidden Figures', 'Mukai Chiaki', 'Pamela Melroy', 'Stephanie Wilson', 'Jessica Watkins', 'Wang Yaping', 'Mae C. Jemison'];
let keywordsMen = ['Charlie Bolden', 'Neil Armstrong', 'Guion Bluford', 'John Glenn', 'Ellison Onizuka', 'Franklin Chang-Diaz', 'John Herrington', 'Michael López-Alegría', 'Ellison Onizuka'];
let keywordsPlanet = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
let keywordsNasaMisc = ['Hubble', 'Milky Way', 'Orion', 'Big Bang', 'Galaxies', 'Asteroid', 'Stars' ];

let artMask = ["7581", "318622", "310279", "547257", "22739", "311950", "35152"];
let artMusic = ["503530", "561518", "310563", "5394", "546194", "310532" ];
let artArch = ["452817", "449028", "347552", "9997", "470599","202127" ];
let artStat = ["196910", "231788", "232047", "57612", "200567","38146"];



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
  navXtraResource();
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
    navXtraResource();
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


function navArt(){
  const artElem =  document.querySelector("#artTile");
  artElem.addEventListener("click", ()=> {
    app.innerHTML = ArtResources();
    retrieveArtResources();
  });
  
}

function retrieveArtResources() {
  app.addEventListener("click", (event) => {
    const artId = document.querySelector("#artId").value;
    if (event.target.classList.contains("artMask")){
      let artRand = Math.floor(Math.random()* artMask.length);
      let value = artMask[artRand];
      console.log(artRand);
      console.log(value);
      apiHelpers.getRequest(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${value}`, artResource => {
        app.innerHTML = ArtResource(artResource)
      });
    }
   if (event.target.classList.contains ("artMusic")){
    let artRand = Math.floor(Math.random()* artMusic.length);
    let value = artMusic[artRand];
    console.log(artRand);
    console.log(value);
    apiHelpers.getRequest(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${value}`, artResource => {
      app.innerHTML = ArtResource(artResource)
    });
   }

   if (event.target.classList.contains ("artArch")){
    let artRand = Math.floor(Math.random()* artArch.length);
    let value = artArch[artRand];
    console.log(artRand);
    console.log(value);
    apiHelpers.getRequest(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${value}`, artResource => {
      app.innerHTML = ArtResource(artResource)
    });
   }

   if (event.target.classList.contains ("artStat")){
    let artRand = Math.floor(Math.random()* artStat.length);
    let value = artStat[artRand];
    console.log(artRand);
    console.log(value);
    apiHelpers.getRequest(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${value}`, artResource => {
      app.innerHTML = ArtResource(artResource)
    });
   }
  })
  returnToArt();
}

function returnToArt() {
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("returnArt")) {
      app.innerHTML = ArtResources();
    }
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


function navXtraResource() {
  const resourcesElem = document.querySelector("#resourcesTile");
  resourcesElem.addEventListener("click", () => {
    apiHelpers.getRequest("https://api.nasa.gov/planetary/apod?api_key=eWhcVkX9a7jqZ58hERTeYYEoHEdjjXN5gea5XwRC", (xtraResource) => {
      console.log('XTRA RESOURCE', xtraResource);
      app.innerHTML = XtraResource(xtraResource);
    });
  });
}

function retrieveSpaceResource() {
  app.addEventListener("click", (event) => {
    const spaceId = document.querySelector("#spaceId").value;
    if (event.target.classList.contains("space__activityWomen")) {
      let randIdx = Math.floor(Math.random() * keywordsWomen.length);
      let value = keywordsWomen[randIdx];
      console.log(randIdx);
      console.log(value);
      apiHelpers.getRequest(`https://images-api.nasa.gov/search?q=${value}`, spaceResource => {
        app.innerHTML = SpaceResource(spaceResource);
      });
    } 
    if (event.target.classList.contains("space__activityMen")) {
      let randIdx = Math.floor(Math.random() * keywordsMen.length);
      let value = keywordsMen[randIdx];
      console.log(randIdx);
      console.log(value);
      apiHelpers.getRequest(`https://images-api.nasa.gov/search?q=${value}`, spaceResource => {
        app.innerHTML = SpaceResource(spaceResource);
      });
    } 
    if (event.target.classList.contains("space__activityPlanets")) {
      let randIdx = Math.floor(Math.random() * keywordsPlanet.length);
      let value = keywordsPlanet[randIdx];
      console.log(randIdx);
      console.log(value);
      apiHelpers.getRequest(`https://images-api.nasa.gov/search?q=${value}`, spaceResource => {
        app.innerHTML = SpaceResource(spaceResource);
      });
    }
    if (event.target.classList.contains("space__activityNasaMisc")) {
      let randIdx = Math.floor(Math.random() * keywordsNasaMisc.length);
      let value = keywordsNasaMisc[randIdx];
      console.log(randIdx);
      console.log(value);
      apiHelpers.getRequest(`https://images-api.nasa.gov/search?q=${value}`, spaceResource => {
        app.innerHTML = SpaceResource(spaceResource);
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
    apiHelpers.getRequest(
      "http://localhost:8080/api/programming-resources",
      (programmingResources) => {
        app.innerHTML = ProgrammingResources(programmingResources);
      }
    );
    renderProgrammingResource();
    addProgramingResourceToAPI();
  });
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

function addProgramingResourceToAPI() {
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-programming-resource__submit")) {
      const addResourceName = event.target.parentElement.querySelector(
        ".add-programming-resource__name"
      ).value;
      const addResourceDescription = event.target.parentElement.querySelector(
        ".add-programming-resource__description"
      ).value;
      const addResourceUrl = event.target.parentElement.querySelector(
        ".add-programming-resource__website__url"
      ).value;
      const addResourceLogo = event.target.parentElement.querySelector(
        ".add-programming-resource__website__logoLink"
      ).value;

      apiHelpers.postRequest(
        "http://localhost:8080/api/programming-resources/add-resource",
        {
          name: addResourceName,
          description: addResourceDescription,
          url: addResourceUrl,
          logo: addResourceLogo,
        },
        (programmingResources) =>
          (app.innerHTML = ProgrammingResources(programmingResources))
      );
    }
  });
}