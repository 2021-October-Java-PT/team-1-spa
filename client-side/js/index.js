import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import ProgrammingResource from "./components/ProgrammingResource.js";
import ProgrammingResources from "./components/ProgrammingResources.js";
import SpaceResources from "./components/SpaceResources.js";
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
    apiHelpers.getRequest("http://localhost:8080/api/programming-resources", programmingResources => {
      app.innerHTML = ProgrammingResources(programmingResources);
    })
    renderProgrammingResource();
  })
}

//Lyzz's function
function navScience() {
  const scienceElem = document.querySelector("#scienceTile");
  scienceElem.addEventListener("click", () => {
    console.log('FIRE');
    apiHelpers.getRequest("https://images-api.nasa.gov/asset/as11-40-5874", (apolloObject) => {
      console.log('APOLLO OBJECT', apolloObject);
      app.innerHTML = SpaceResources(apolloObject);
    });
    //Lyzz's API function
  });
}


function renderProgrammingResource() {
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("programming-resource__list")) {
      const programmingResourceId = event.target.querySelector("#programmingLanguageId").value;
      apiHelpers.getRequest(`http://localhost:8080/api/programming-resources/${programmingResourceId}`, programmingResource => {
        app.innerHTML = ProgrammingResource(programmingResource);
      });
      returnToAllResources();
    }
  });
}

function returnToAllResources() {
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("returnResources")) {
      apiHelpers.getRequest("http://localhost:8080/api/programming-resources", programmingResources => {
        app.innerHTML = ProgrammingResources(programmingResources);
      });
    }
  });
}