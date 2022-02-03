//import apiHelpers from "../api-helpers/apiHelpers.js";

import sciBox from "../../images/sci-box.png";

export default function SpaceResource(){
    return`
    <div class="api-topics">
        <ul>     
            <li class="btn btn-info"><img src="${sciBox}" class="space__activityWomen">
                <input type="hidden" id="spaceId" value="Mystery Women"></li>
            <li class="btn btn-info"><img src="${sciBox}" class="space__activityMen">
                <input type="hidden" id="spaceId" value="Mystery Men"></li>
            <li class="btn btn-info"><img src="${sciBox}" class="space__activityPlanets">
                <input type="hidden" id="spaceId" value="Mystery Planets"></li>
            <li class="btn btn-info"><img src="${sciBox}" class="space__activityNasaMisc">
                <input type="hidden" id="spaceId" value="Mystery Nasa Misc"></li>
    </div>    
   `;  
}
