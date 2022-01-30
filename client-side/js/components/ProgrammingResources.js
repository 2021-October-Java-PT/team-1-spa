export default function ProgrammingResources(programmingResources) {
    return `
        <h1>Let's Learn to Code!</h1>
        <ul>
            ${programmingResources.map(programmingResource => {
            return `
                <li class="programming-resource__list">${programmingResource.name}
                    <input type="hidden" id="programmingLanguageId" value="${programmingResource.id}">
                </li>
            `;
        }).join("")}
        </ul><br><br>

        <form class="add-programming-resource">
        <input type="text" class="add-programming-resource__name" placeholder="Enter Name of Programming Resource">
        <input type="text" class="add-programming-resource__description" placeholder="Enter Description of Programming Resource">
        <input type="text" class="add-programming-resource__website__url" placeholder="Enter URL of Programming Resource">
        <input type="text" class="add-programming-resource__website__logoLink" placeholder="Enter URL of the logo of Programming Resource">
        <button class="add-programming-resource__submit">Submit</button>
    </form>
        `;
}