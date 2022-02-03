export default function SpaceResources(spaceResource) {
    console.log('SPACE RESOURCE', spaceResource);
    let i = Math.floor(Math.random() * 10);
    console.log(i);
    return `
    <img src="${spaceResource.collection.items[i].links[0].href}"></img>
    <h2>${spaceResource.collection.items[i].data[0].description}</h2>
    <button class="returnScience btn btn-info">Return</button>
    `;
}
