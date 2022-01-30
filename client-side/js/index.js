import About from "./components/About";
import Art1 from "./components/Art1.js";
import Contact from "./components/Contact";
import Home from "./components/Home";
import ProgrammingResource from "./components/ProgrammingResource.js";
import ProgrammingResources from "./components/ProgrammingResources.js";
import Science from "./components/Science.js";
import apiHelpers from "./api-helpers/apiHelpers.js";
import crud from "./crud/crud.js";

const app = document.querySelector("#app");

buildPage();

function buildPage() {
  renderHome();
  navAbout();
  navContact();
  navHome();
  navTechnology();
  navArtSection();
  navScience();
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

//Madison's Functions
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
  });
}

function navArtSection() {
  const lingamCover = document.querySelector("#artTile");
  lingamCover.addEventListener("click", () => {
    apiHelpers.getRequest(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/39359",
      (metObject) => {
        app.innerHTML = Art1(metObject);
      }
    );
  });
}

//Lyzz's function
function navScience() {
  const scienceElem = document.querySelector("#scienceTile");
  scienceElem.addEventListener("click", () => {
    // const app = document.querySelector('#app');
    app.innerHTML = Science();
    apiHelpers.getRequest(
      "https://api.nasa.gov/planetary/apod?api_key=eWhcVkX9a7jqZ58hERTeYYEoHEdjjXN5gea5XwRC",
      (science) => {
        app.innerHTML = Science(science);
      }
    );
    //Lyzz's API function
  });
}

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
    }
  });
}

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
