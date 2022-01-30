export default function BrainBreaks() {
    return `
    <div class="container-fluid api-button text-center">  
    <h1>Let's take a break!</h1>
    <h1>
    <h2>Activity Type:</h2>
        <ul>     
            <li class="brain-breaks__activity">education
                <input type="hidden" id="breakId" value="education"></li>
            <li class="brain-breaks__activity">recreational
                <input type="hidden" id="breakId" value="recreational"></li>
            <li class="brain-breaks__activity">social
                <input type="hidden" id="breakId" value="social"></li>
            <li class="brain-breaks__activity">diy
                <input type="hidden" id="breakId" value="diy"></li>
            <li class="brain-breaks__activity">charity
                <input type="hidden" id="breakId" value="charity"></li>
            <li class="brain-breaks__activity">cooking
                <input type="hidden" id="breakId" value="cooking"></li>
            <li class="brain-breaks__activity">relaxation
                <input type="hidden" id="breakId" value="relaxation"></li>
            <li class="brain-breaks__activity">music
                <input type="hidden" id="breakId" value="music"></li>
            <li class="brain-breaks__activity">busywork
                <input type="hidden" id="breakId" value="busywork"></li>
        </ul>
        <h2>Number of participants:</h2>
        <ul>
            <li class="brain-breaks__participants">1
                <input type="hidden" id="breakId" value="1"></li>
            <li class="brain-breaks__participants">2
                <input type="hidden" id="breakId" value="2"></li>
            <li class="brain-breaks__participants">3
                <input type="hidden" id="breakId" value="3"></li>
        </ul>
    </div>`;
  }

//Boredom API https://www.boredapi.com/documentation


