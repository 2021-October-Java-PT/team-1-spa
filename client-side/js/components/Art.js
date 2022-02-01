export default function Art(metObject) {
  return `
             <div class="background">
              <h2 id="lingaTitle">${metObject.department}<h2>
                   <section class="linga-flex">
                   <img src="${metObject.primaryImageSmall}" id="lingaImg" >
                   <section>
             <h2>${metObject.objectDate} Hindu Art Piece</h2>
             <h2>${metObject.repository}</h2>
                   </section>
                  
                  <section>
                  <img src="${metObject.additionalImages}" id="lingaImg2" >
                  </section>

                  </section>
     
             <h2 id="lingaPiece">${metObject.title}</h2>
            <p id="linga" > 
             <br> This is a piece held in the New York Metropolitan Museum called a ${metObject.title}. It was founded in the 15th century which was a 
                  really long time ago in Nepal, a country in South Asia. This is covers what is called a Ligam which is a pillar that Shiva came from. This is representative of the pillar of fire that the most powerful god in the
                  Hindu religion, Shiva, came from. According to the <a href="https://www.britannica.com/topic/lingam"> Britannica</a> the Linga is votary 
                  or dedication to Shiva.This Linga covering has the four faces of Shiva carved onto it.<br>
                   Now you may be wondering, who is Shiva? Well according to the Hindu faith, Shiva is the most powerful god among the gods in this religion. As explained in the YoutTube video below this article, Shiva’s origin 
                   story beings long ago when two gods of the Hindu faith, the creator of the universe, Brahma, and the protector of the universe, Vishnu, got 
                  into a fight over who was the most powerful god among them. During that fight, a lingam or pillar of fire appeared between them and it was said that it went
                  straight through the earth and into the universe itself. <br>
                  When this happened, the gods decided to race to see who could get to the end of the pillar first and that would decide who was the most powerful.
                   Vishnu decided to go through the earth while Brahma went through the universe. However, neither god got to the end of the lingam. <br>
                  Brahma, however, did not want to lose and so when he saw a flower during his journey up the lingam, he picked it up and went back down the pillar to
                  tell a lie to Vishnu that he had made it to the top of the lingam. This of course upset Vishnu and they were about to fight again when suddenly,
                  the Lingam opened up! <br>
                   Inside of it was Shiva. He revealed himself to be the most powerful god and punished Brahma for lying by cursing him to never have anyone
                  pray to him ever again. This tale also marks a special holiday for this religion called Shivratri which celebrates Shiva coming into the world. 
      
             </p>
                  </div>
                 <div>
                  <h2>Image of different Lingams</h2>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Shiv_lingam_Tripundra.jpg/330px-Shiv_lingam_Tripundra.jpg" alt="lingam1">
                  </div>

                  <div>
                   <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Shiva_linga_inside_Pandra_Shivalaya_-Pashupatinath_Temple-1892.jpg" alt="lingam2" id="lingam2">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Kailash-shiva-linga.jpg" alt="lingam3" id="lingam3">

                  </div>

                  <div>
                   <h2> Images of Shiva </h2>
      
                  <img src="https://cdn.pixabay.com/photo/2018/02/05/12/43/deity-3132133_960_720.jpg" alt="imageOfShiva">
                  <img src="https://pngimg.com/uploads/shiva/shiva_PNG56.png" alt="shiva">
                  <img src="https://cdn.pixabay.com/photo/2019/03/10/08/58/lord-4045702_960_720.jpg" alt="shivaImage">

                  </div>
                  
                  
                  <div>
                   <h2> The Story of Shiva and the Lingam pillar</h2>
                   <iframe wifth="600" heigfht="400" src="https://www.youtube.com/embed/uAekRdg7LkE"> </iframe>
                   </div>
           `;
}
