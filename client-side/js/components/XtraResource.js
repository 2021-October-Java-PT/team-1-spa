import apiHelpers from "../api-helpers/apiHelpers.js";

export default function XtraResource(xtraResource) {
    const videoSection = `
    <div class="video-div">
    <iframe id="videoLink" width="500" src=""></iframe>
    </div>`;

    const imageSection = `
    <a id="NASAImg" href="" target="-blank">
    <div class="image-div">
    <img id="image_of_the_day" src="${xtraResource.url}" alt="image-by-nasa">
    </div>
    </a></div>`;

    return `
    <div class="container-fluid sci-art-pg">
    <h1>NASA Picture of the Day:</h1>
    <h2>Date: ${xtraResource.date}</h2>
    <h3>Title: ${xtraResource.title}</h3>
    <p>${xtraResource.explanation}</p>
    <a href="${xtraResource.url}</a>
    <div id="media-section">
        ${xtraResource.media_type === "video" ? videoSection : imageSection}
    </div>
    </div>
`;
}