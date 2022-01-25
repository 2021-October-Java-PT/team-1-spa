// console.log('Client Side is wired up!');

import About from "./components/About";
import Contact from "./components/Contact";

const app = document.querySelector("#app");

buildPage();

function buildPage() {
  about();
  navContact();
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
