export default function SpaceResource(spaceResource, nasaIndex){
    return `
            
                <input type='hidden' class='id' id='nasaBoxId${spaceResource.data[0].nasa_id}' value=${spaceResource.data[0].nasa_id} />
                <h2 class='box__title'>${spaceResource.data[0].title}</h2>
                <h3>${spaceResource.data[0].nasa_id}</h3>
                <div class='box__img'><img src=${spaceResource.links[0].href} alt='' /></div>
                <div class='box__desc'>
                    <p class='description'>Description: ${spaceResource.data[0].description}</p>
                </div>
            
    `;  
}
