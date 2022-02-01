export default function Mukai(mukai){
    return `
    <div class="container-fluid api-button text-center">  
    <h1>Chiaki Mukai:</h1>
    <img src =${mukai.collection.items[1].links[0].href}></img>
    <p>Chiaki Mukai (向井 千秋, Mukai Chiaki, born May 6, 1952) is a Japanese physician and JAXA astronaut.[2] She was the first Japanese woman in space, the first Japanese citizen to have two spaceflights, and the first Asian woman in space.[1] Both were Space Shuttle missions; her first was STS-65 aboard Space Shuttle Columbia in July 1994, 
    which was a Spacelab mission. Her second spaceflight was STS-95 aboard Space Shuttle Discovery in 1998. In total she has spent 23 days in space.
    Mukai was selected to be an astronaut by Japanese national space agency NASDA (now called JAXA) in 1985. Prior to this, she was an assistant professor in the Department of Cardiovascular Surgery at Keio University, the oldest university in Japan. In 2015, she became Vice President of the Tokyo University of Science.[3] In addition, she became JAXA Technical Counselor.
    </p>
    <a href="https://en.wikipedia.org/wiki/Chiaki_Mukai">Click here to learn more!</a>
    <button class="returnScience">Return to Science</button>
    </div>`;
}