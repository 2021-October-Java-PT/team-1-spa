// console.log('Client Side is wired up!');

import About from "./components/About";
import Contact from "./components/Contact";
import ProgrammingResources from "./components/ProgrammingResources.js";
import Science from "./components/Science.js";
import apiHelpers from "./api-helpers/apiHelpers";
import crud from "./crud/crud.js";

const app = document.querySelector("#app");

buildPage();

function buildPage() {
  about();
  navContact();
  navTechnology();
  navScience();
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
//Lyzz's function
function navScience() {
  const scienceElem = document.querySelector("#scienceTile");
  scienceElem.addEventListener("click", () => {
    const app = document.querySelector('#app');
        app.innerHTML = Science();
    // apiHelpers.getRequest("https://api.nasa.gov/planetary/apod?api_key=eWhcVkX9a7jqZ58hERTeYYEoHEdjjXN5gea5XwRC"), science => {
    // app.innerHTML = Science(science);
    });

  }

  //Lyzz's API function