import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import ProgrammingResource from "./components/ProgrammingResource.js";
import ProgrammingResources from "./components/ProgrammingResources.js";
import apiHelpers from "./api-helpers/apiHelpers.js";
// import crud from "./crud/crud.js";

const app = document.querySelector("#app");

buildPage();

function buildPage() {
  renderHome();
  navAbout();
  navContact();
  navHome();
  navTechnology();
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