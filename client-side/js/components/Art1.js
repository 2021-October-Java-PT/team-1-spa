export default function Art1(artPiece1) {
  return `
        
        <div class="background">
        <h2 id="lingaTitle">${artPiece1.department}<h2>
        <section class="linga-flex">
        <img src="${artPiece1.primaryImageSmall}" id="lingaImg" >
        <section>
        <h2>${artPiece1.objectDate} Hindu Art Piece</h2>
        <h2>${artPiece1.repository}</h2>
        </section>
        <img src="${artPiece1.additionalImages}" id="lingaImg2" >
        <section>
        </section>
        
        </section>

        <h2 id="lingaPiece">${artPiece1.title}</h2>
        <p id="linga" > 
        <br> This is piece held in the New York Matropoliten Museum called a ${artPiece1.title}. It was founded in the 15th century which was a real long time ago
        in Nepal that is a country in South Asia. This is represative of the pillar of fire that the most powerful god in the Hindu religon, Shiva, came from. 
        According to the <a href="https://www.britannica.com/topic/lingam"> Britannica</a> the Linga is votary or dedication to Shiva.This Linga 
        covering has the four faces of Shiva carved on to it.  <br>
        Now you may be wondering, who is Shiva? Well according to the Hindu faith, Shiva is the most powerful god among the gods in this religion. His orgian 
        story beings long ago when two gods of the Hindu faith, the creator of the universe, Brahma, and the protector of the universe, Vishnu, got 
        into a fight over who was the most powerful god among them. During that fight, a lingma or pillor of fire a peered between them and it was said to
        straight through the earth and into the universe itself. <br>
        When this happened, the gods decided to race to see who could get to the end of the pillar first and that would decide who was the most powerful.
        Vishnu decided to go through the earth whil Brahma went through the unvierse. However either gods got to the end of the lingma. <br>
        Brahma, however, did not want to lose and so when he saw a flower during his journey up the lingam, he picked up and went back down the pillar to
        tell a lie to Vishnu that he had made it to the top of te lingma. This of course upset Vishnu and they were about to fight again when suddenly,
        the Ligma opened up! <br>
        Inside of it was the God, Shiva. He relieved himself to be the most powerful god and punished Brahma for lieing by cursing him to never have anyone
        pray to him again. This tail also marks a special holiday for this religion called Shivratri that celebrate Shiva.
        
        </p>
        </div>
        
      `;
}
