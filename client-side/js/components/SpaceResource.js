//import apiHelpers from "../api-helpers/apiHelpers.js";

export default function SpaceResource(spaceResource){
    return`
    <h1>Test</h1>
   `;  

  return `
   <h1>Mary Jackson:</h1>
    <img src= ${spaceResource.collection.items[40].links[0].href}></img>
    <h2>${spaceResource.collection.items[58].data[0].description}</h2> 
    <a href="https://en.wikipedia.org/wiki/Mary_Jackson_(engineer)">Click here to learn more!</a>
    <button class="returnScience">Return to Science</button>
   
    `;  
}
