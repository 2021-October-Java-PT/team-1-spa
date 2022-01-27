export default function ProgrammingResources(programmingResources) {
    return `
        <h1>Let's Learn to Code!</h1>
        <ul>
            ${programmingResources.map(programmingResource => {
            return `
                <li>${programmingResource.name}
                    <input type="hidden" id="programmingLanguageId" value="${programmingResource.id}">
                </li>
            `;
        }).join("")}
        </ul>
        `;
}