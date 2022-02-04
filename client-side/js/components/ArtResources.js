import artBox from "../../images/art-box.png";

export default function ArtResources() {
  return `
    <div class="api-topics">
        <ul>     
            <li class="btn btn-info topic-list"><img src="${artBox}" class="artMask topic-tile">
                <input type="hidden" id="artId" value=""></li>
            <li class="btn btn-info topic-list"><img src="${artBox}" class="artMusic topic-tile">
                <input type="hidden" id="artId" value=""></li>
            <li class="btn btn-info topic-list"><img src="${artBox}" class="artArch topic-tile">
                <input type="hidden" id="artId" value=""></li>
            <li class="btn btn-info topic-list"><img src="${artBox}" class="artStat topic-tile">
                <input type="hidden" id="artId" value=""></li>
        </ul>
           
    </div>    
   `;
}
