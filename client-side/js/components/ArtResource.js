export default function ArtResources(artResource) {
  let a = Math.floor(Math.random() * 6);
  console.log(a);

  return `
    <div>
                  
                  <h1> Department </h1>
                  <h2 id="pieceTitle">${artResource.department}<h2>
                
                      <img src="${artResource.primaryImageSmall}" id="pieceImg" >
                      
                  <h2>${artResource.objectName}</h2>
                  <h4> Title: ${artResource.title}</h4>
    
                   <h2>What is this art's Medium?</h2>
                   <h4>Pss! What is it made out of?</h4>
                   <p>${artResource.medium}</p>
    
                  <h2>What culture is this from?</h2>
                   <p>${artResource.culture}</p>
                  
                  
                   <h2>When was the art made?</h2>
                   <p>${artResource.objectDate}</p>

                   <h2>Other Details</h2>
                   <p>Dimensions: ${artResource.dimensions}</p>
    
                   <h2>Learn more at the Met Museum website!</h2>
                   <a href="${artResource.objectURL}">${artResource.objectURL}</a>

                   <button class="returnArt btn btn-info">Return</button>
    </div>
    `;
}