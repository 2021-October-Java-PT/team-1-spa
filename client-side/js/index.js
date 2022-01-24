// console.log('Client Side is wired up!');

import About from "./components/About";

const app = document.querySelector("#app");

buildPage();

function buildPage() {
  about();
}

function about() {
  const aboutElem = document.querySelector(".navbar-about");
  aboutElem.addEventListener("click", () => {
    // console.log("button clicked");
    app.innerHTML = About();
  });
}
