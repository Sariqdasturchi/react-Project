import CarouselApp from './Elements/carousel';
import Navbar from './navbar';
import './style/home.css';
import card from './imgs/card.png';
import CardsItem from './Elements/cards-item';

const HomeSection = ({data}) => {
    console.log(data);
    return (
        <>
            <Navbar />
            <section className='home_section'>
                <div className="container">
                    <CarouselApp />
                </div>
                <CardsItem />
            </section>
        </>
    )
}
export default HomeSection;