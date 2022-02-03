export default function BrainBreaks() {
    return `
    <div class="api-page-container">
    <div class="api-title">
        <h1>Let's Take a Break!</h1>
    </div>
    <div class="api-topics">
        <ul>     
            <li class="brain-breaks__activity btn btn-info topic-list">education
                <input type="hidden" id="breakId" value="education"></li>
            <li class="brain-breaks__activity btn btn-info topic-list">recreational
                <input type="hidden" id="breakId" value="recreational"></li>
            <li class="brain-breaks__activity btn btn-info topic-list">social
                <input type="hidden" id="breakId" value="social"></li>
            <li class="brain-breaks__activity btn btn-info topic-list">diy
                <input type="hidden" id="breakId" value="diy"></li>
            <li class="brain-breaks__activity btn btn-info topic-list">charity
                <input type="hidden" id="breakId" value="charity"></li>
            <li class="brain-breaks__activity btn btn-info topic-list">cooking
                <input type="hidden" id="breakId" value="cooking"></li>
            <li class="brain-breaks__activity btn btn-info topic-list">relaxation
                <input type="hidden" id="breakId" value="relaxation"></li>
            <li class="brain-breaks__activity btn btn-info topic-list">music
                <input type="hidden" id="breakId" value="music"></li>
            <li class="brain-breaks__activity btn btn-info topic-list">busywork
                <input type="hidden" id="breakId" value="busywork"></li>
        </ul>
        <h2>Number of participants:</h2>
        <ul>
            <li class="brain-breaks__participants btn btn-info topic-list">1
                <input type="hidden" id="breakId" value="1"></li>
            <li class="brain-breaks__participants btn btn-info topic-list">2
                <input type="hidden" id="breakId" value="2"></li>
            <li class="brain-breaks__participants btn btn-info topic-list">3
                <input type="hidden" id="breakId" value="3"></li>
        </ul>
    </div>    
    </div>`;
  }

//Boredom API https://www.boredapi.com/documentation


