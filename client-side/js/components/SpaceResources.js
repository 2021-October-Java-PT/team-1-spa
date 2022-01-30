export default function SpaceResources(apolloObject) {
    
    // console.log('APOLLO OBJECT DATA', apolloObject);
    return `
    <h1>Get ready to BLAST OFF and take an exciting adventure!</h1>
    <img src= ${apolloObject.collection.items[1].links[0].href}></img>
    <h1>${apolloObject.collection.items[1].data[0].title}</h1>
    <h2>${apolloObject.collection.items[1].data[0].description}</h2>   
        
        
    `;
}


