import React from 'react';
import { Carousel } from 'antd';
import img from '../imgs/baner4.png';
import img2 from '../imgs/baner5.png';
import img3 from '../imgs/baner1.png';
import './carousel.css'

const CarouselApp = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <div className="carousel">
            <Carousel afterChange={onChange}>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
            </Carousel>
        </div>
    );
};
export default CarouselApp;