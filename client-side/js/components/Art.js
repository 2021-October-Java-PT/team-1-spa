export default function Art(metObject) {
  return `
             <div class="background">

             <h1> Department </h1>
              <h2 id="lingaTitle">${metObject.department}<h2>
                   <section class="linga-flex">
                   <img src="${metObject.primaryImageSmall}" id="lingaImg" >
                   <section>
              <h2>${metObject.objectName}</h2>
              <h4> Title: ${metObject.title}</h4>

              <h2>What is this art's Medium?</h2>
              <h4>Pss! What is it made out of?</h4>
              <p>${metObject.medium}</p>

              <h2>What culture is this from?</h2>
              <p>${metObject.culture}</p>
              
              <h2>Other Details</h2>
              <p>Dimensions: ${metObject.dimensions}</p>
              
              <h2>When was the art made?</h2>
              <p>${metObject.objectDate}</p>

              <h2>Learn More At the Met Museum Website</h2>
              <h4>Copy and past in url box, please!</h4>
              <a href="${metObject.objectURL}">${metObject.objectURL}</a>

              </div>

              
              

              
             
          
           `;
}
