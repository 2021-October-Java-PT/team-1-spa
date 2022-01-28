// console.log('Client Side is wired up!');

import About from "./components/About";
import Art from "./components/Art.js";
import Contact from "./components/Contact";
import ProgrammingResources from "./components/ProgrammingResources.js";
import apiHelpers from "./api-helpers/apiHelpers";
import crud from "./crud/crud.js";

const app = document.querySelector("#app");

buildPage();

function buildPage() {
  about();
  navContact();
  navTechnology();
  navArt();
}

function about() {
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

//Madison's Function
function navTechnology() {
  const technologyElem = document.querySelector("#technologyTile");
  technologyElem.addEventListener("click", () => {
    crud.getRequest("http://localhost:8080/api/programming-resources", programmingResources => {
      app.innerHTML = ProgrammingResources(programmingResources);
    })
  })
  
}

function navArt(){
  const lingCover = document.querySelector("#artTile");
  lingCover.addEventListener('click', () => {
    const app = document.querySelector('#app');
    app.innerHTML = Art();
    
    // apiHelpers.getRequest("https://collectionapi.metmuseum.org/public/collection/v1/objects/65397")
    
  })
}