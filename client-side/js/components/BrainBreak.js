export default function BrainBreak(brainBreak) {
    return `
    <div class="container-fluid api-button text-center">  
    <h1>Activity: ${brainBreak.activity}</h1>
    <h1>Type: ${brainBreak.type}</h1>
    <h1>Number of participants: ${brainBreak.participants}</h1>
    <h1>Price: ${brainBreak.price}</h1>
    <h1><a href=${brainBreak.link}>${brainBreak.link}</a></h1>
    <button class="returnBreaks">Return to Brain Breaks</button>
    </div>`;
  }




