import artBox from "../../images/art-box.png";

export default function ArtResources() {
  return `
    <div class="api-topics">
        <ul>     
            <li class="btn btn-info"><img src="${artBox}" class="artMask">
                <input type="hidden" id="artId" value=""></li>
            <li class="btn btn-info"><img src="${artBox}" class="artMusic">
                <input type="hidden" id="artId" value=""></li>
           
    </div>    
   `;
}
