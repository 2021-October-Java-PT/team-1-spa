import apiHelpers from "../api-helpers/apiHelpers.js";

export default function XtraResource(xtraResource) {

    const mediaSection = document.getElementById("media-section");

    if (xtraResource.media_type == "video") {
        const videoSection = `
        <div class="video-div">
        <iframe id="videoLink" width="500" src=""></iframe>
        </div>`;
        console.log(mediaSection);
        mediaSection.innerHTML = videoSection;
        document.getElementById("videoLink").src = xtraResource.url;
        console.log(mediaSection);
        
    } else {
        const imageSection = `
        <a id="NASAImg" href="" target="-blank">
        <div class="image-div">
        <img id="image_of_the_day" src="${xtraResource.url}" alt="image-by-nasa">
        </div>
        </a></div>`;
        mediaSection.innerHTML = imageSection;
        console.log(mediaSection);
        document.getElementById("NASAImg").href = xtraResource.hdurl;
        document.getElementById("image_of_the_day").src = xtraResource.url;
    }

    apiHelpers.getRequest("https://api.nasa.gov/planetary/apod?api_key=eWhcVkX9a7jqZ58hERTeYYEoHEdjjXN5gea5XwRC", (xtraResource) => {
        displayVideo(xtraResource);
    })

    return `
    <h1>NASA Picture of the Day:</h1>
    <h2>Date: ${xtraResource.date}</h2>
    <h3>Title: ${xtraResource.title}</h3>
    <p>${xtraResource.explanation}</p>
    <a href="${xtraResource.url}</a>
    <div id="media-section">
    </div>
       
    `;
}
