import sciBox from "../../images/sci-box.png";

export default function SpaceResource() {
    return `
    <div class="api-page-container">
    <div class="api-title">
    <h1>1, 2, 3 Blast Off!</h1>
    </div>
    <div class="api-topics">
        <ul>     
            <li class="btn btn-info topic-list"><img src="${sciBox}" class="space__activityWomen topic-tile">
                <input type="hidden" id="spaceId" value="Mystery Women"></li>
            <li class="btn btn-info topic-list"><img src="${sciBox}" class="space__activityMen topic-tile">
                <input type="hidden" id="spaceId" value="Mystery Men"></li>
            <li class="btn btn-info topic-list"><img src="${sciBox}" class="space__activityPlanets topic-tile">
                <input type="hidden" id="spaceId" value="Mystery Planets"></li>
            <li class="btn btn-info topic-list"><img src="${sciBox}" class="space__activityNasaMisc topic-tile">
                <input type="hidden" id="spaceId" value="Mystery Nasa Misc"></li>
    </div>    
   `;
}