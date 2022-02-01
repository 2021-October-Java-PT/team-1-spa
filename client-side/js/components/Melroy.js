export default function Melroy(melroy){
    return `
    <div class="container-fluid api-button text-center"> 
    <h1>Pamela Melroy:</h1>
    <img src =${melroy.collection.items[11].links[0].href}></img>
    <h2>${melroy.collection.items[11].data[0].description}</h2
    <p>
    <a href="https://en.wikipedia.org/wiki/Pamela_Melroy">Click here to learn more!</a>
    </p>
    <button class="returnScience">Return to Science</button>
    </div>`;
}