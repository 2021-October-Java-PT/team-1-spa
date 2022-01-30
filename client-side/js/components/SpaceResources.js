export default function SpaceResources(wilsonObject) {
    
    return `

    <img src= ${wilsonObject.collection.items[1].links[0].href}></img>
    <h1>${wilsonObject.collection.items[0].data[0].title}</h1>
    <h2>${wilsonObject.collection.items[0].data[0].description}</h2>   
    
        
    `;
}


