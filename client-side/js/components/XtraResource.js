import apiHelpers from "../api-helpers/apiHelpers.js";

export default function XtraResource(xtraResource) {
    const videoSection = `
    <video width="320" height="240" controls>
    <source src="${xtraResource.url}" type="video/mp4">
    Your browser does not support the video tag.
    </video>`;

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