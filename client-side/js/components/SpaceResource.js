export default function SpaceResource(spaceResource) {
    return `
  
    <h1>Mary Jackson:</h1>
    <img src= ${spaceResource.collection.items[58].href}></img>
    <h2>${spaceResource.collection.items[58].data[0].description}</h2> 
    <img src =${spaceResource.collection.items[23].href}</img>
    <button class="returnScience">Return to Science</button>
   
    </div>
    `;
    
}
