import Art1 from '../components/Art1';

export default function Art2(artPiece2) {

    return `
    <div>
        <h2>${artPiece2.department}</h2>
        <img src="${artPiece2.primaryImageSmall}" id="lingaImg" >
        <h2>${artPiece2.objectDate}</h2>
        <h2>${artPiece2.objectBeginDate}-${artPiece2.objectEndDate}</h2>

        <h2>${artPiece2.title}</h2>
        <p>
        This Mask is was once made for the mother of the african king of Benin, ObaEsigie. Her name was
        Idia. This mask was made of ivory which is pure white. White in the country of Benin is seen as
         symble of purity that is connected to the sea god Olokun who is apart of the Upriba religion. 
        </p>

        <button type="button">${Art1.js}</button>
        
        
    </div>
    `
}