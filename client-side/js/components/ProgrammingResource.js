export default function ProgrammingResource(programmingResource) {
    return `
    <div class="api-page-2">
            <h1>${programmingResource.name}</h1>
            <h2>${programmingResource.description}</h2>
            <a href="${programmingResource.url}">${programmingResource.url}</a>
            <img class="prgmResourceImg" src="${programmingResource.logoUrl}"><br>
            <button class="returnResources btn btn-info">Return to Technology</button>
    </div>
    `;
}