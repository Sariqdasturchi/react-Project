import Cards from "../cards";
import card from '../imgs/card.png';
import card2 from '../imgs/card2.png';
import card3 from '../imgs/card3.png';
import card4 from '../imgs/card4.png';
import card5 from '../imgs/card5.png';
import card6 from '../imgs/card6.png';
import card7 from '../imgs/card7.png';
import card8 from '../imgs/card8.png';

const CardsItem = () => {
    const data = [
        {title: 'Smartfonlar', img: `${card}`},
        {title: 'Kompyuterlar va notebooklar', img: `${card2}`},
        {title: 'Televizorlar', img: `${card3}`},
        {title: 'Aqlli soatlar', img: `${card4}`},
        {title: 'Quloqchinlar', img: `${card5}`},
        {title: 'Konditsioner', img: `${card6}`},
        {title: 'Sovutkichlar', img: `${card7}`},
        {title: 'Kir yuvish mashinalari', img: `${card8}`},
    ]
    return(
        <>
            <div className="cardsItem">
               <Cards data={data} />
            </div>
        </>
    )
}

export default CardsItem;