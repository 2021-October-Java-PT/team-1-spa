export default function ProgrammingResources(programmingResources) {
    return `
    <div class="api-page-container">
    <div class="api-title">
        <h1>Let's Learn to Code!</h1>
    </div>
    <div class="api-topics">
        <ul>
            ${programmingResources.map(programmingResource => {
            return `
                <li class="programming-resource__list btn btn-info">${programmingResource.name}
                    <input type="hidden" id="programmingLanguageId" value="${programmingResource.id}">
                </li>
            `;
        }).join("")}
        </ul>
    </div>
    <div class="pr-form-body col-xs-1 center-block">
        <div class="pr-form-cont">
        <div class="brand-logo"></div>
        <form class="add-programming-resource inputs">
        <label>Enter name of Programming Resource</label>
              <input type="name" class="add-programming-resource__name" placeholder="Ex. Free Code Camp" />
              <label>Enter Description</label>
              <input type="Description" class="add-programming-resource__description" placeholder="description" />
              <label>Enter url</label>
              <input type="url" class="add-programming-resource__website__url" placeholder="www.example.com" />
              <label>Enter logo url</label>
              <input type="url" class="add-programming-resource__website__logoLink" placeholder="www.example.com" />
              <button class="btn btn-info" type="submit">SUBMIT</button>
        </form>
    
    </div>
</div>
`;
}