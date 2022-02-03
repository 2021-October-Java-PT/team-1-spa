export default function SpaceResources(spaceResource) {
    console.log('SPACE RESOURCE', spaceResource);
    let i = Math.floor(Math.random() * 10);
    console.log(i);
    return `
    <h1>Girls Rock! Look how many women work in Space!</h1>
    <img src="${spaceResource.collection.items[i].links[0].href}"></img>
    <h2>${spaceResource.collection.items[i].data[0].description}</h2>
    `;
}

// ${SpaceResources(spaceResource)}
// <h1>Girls Rock! Look how many women work in Space!</h1>
// ${spaceResource.collection.items.map((spaceResource) => {
//     if ((spaceResource.data[0].description.length >= 100) && 
//     (spaceResource.data[0].description.length <= 500) &&
//     (spaceResource.links[0].href.endsWith(".jpg"))) {
//         return `
//         ${SpaceResource(spaceResource)}
//         `;
//     }
//     })
//     .join('')} 