import banner from "../../images/space-banner.png";

export default function SpaceResources(spaceResource) {
    console.log('SPACE RESOURCE', spaceResource);
    let i = Math.floor(Math.random() * 10);
    console.log(i);
    return `
    <div class="b-sci">
        <img src="${banner}" class="sci-banner"></img>
    </div>
    <div class="container-fluid sci-art-pg">
        <img src="${spaceResource.collection.items[i].links[0].href}"></img>
        <h3 class="sa-pg">${spaceResource.collection.items[i].data[0].description}</h2>
        <button class="returnScience btn btn-info">Return to Science Topics</button>
    </div>
    `;
}