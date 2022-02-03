import techBoxImg from "../../images/tech-box.png";

export default function ProgrammingResources(programmingResources) {
    return `
    <div class="api-page-container">
    <div class="api-title">
        <h1>Let's Learn to Code!</h1>
    </div>
    <div class="api-topics">
    <ul class="ulTopic">
            ${programmingResources.map(programmingResource => {
            return `
                <li class="programming-resource__list ulList btn btn-info">MYSTERY TOPIC
                    <input type="hidden" id="programmingLanguageId" value="${programmingResource.id}">
                </li>
            `;
        }).join("")}
        </ul>
        <button>Shuffle</button>
        </div>               
    <div class="pr-form-body col-xs-1 center-block">
        <div class="pr-form-cont">
            <div class="brand-logo"></div>
                <form class="add-programming-resource inputs">
                    <label>Enter name of Programming Resource</label>
                    <input type="text" class="input-width add-programming-resource__name" placeholder="Enter Name of Programming Resource">
                    <input type="text" class="input-width add-programming-resource__description" placeholder="Enter Description of Programming Resource">
                    <input type="text" class="input-width add-programming-resource__website__url" placeholder="Enter URL of Programming Resource">
                    <input type="text" class="input-width add-programming-resource__website__logoLink" placeholder="Enter URL of the logo of Programming Resource">
                    <button type="submit" class="add-programming-resource__submit" onclick="ProgrammingResources(programmingResources)">SUBMIT</button>
                </form>
            </div>
        </div>
    </div>
`;
}