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

