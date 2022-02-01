export default function ProgrammingResource(programmingResource) {
    return `
    <div class="api-page-2">
            <h1>${programmingResource.name}</h1>
            <h2>${programmingResource.description}</h2>
            <h3>${programmingResource.educationWebsiteUrl}</h3>
            <img src="${programmingResource.logoImage}"><br>
            <button class="returnResources btn btn-info">Return to All Resources</button>
    </div>
    `;
}