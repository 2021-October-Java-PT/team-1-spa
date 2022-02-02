export default function SpaceResources(spaceResources) {
    return `
    
    <h1>Girls Rock! Look how many women work in Space!</h1>
    ${spaceResources.collection.items
        .map((spaceResource) => {
        if ((spaceResource.data[0].description.length >= 100) && 
        (spaceResource.data[0].description.length <= 500) &&
        (spaceResource.links[0].href.endsWith(".jpg"))) {
            return `
            ${SpaceResource(spaceResource)}
            `;
        }
        })
        .join('')} 
    `;
}