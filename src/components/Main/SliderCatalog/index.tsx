import React from 'react';
import Slider from 'react-slick';
import '../../../globalStyles/sliderStyles/slick.css';
import '../../../globalStyles/sliderStyles/slick-theme.css';
import { SliderWrap, SliderPhoto, SliderText, SliderContainer } from '@components/Main/SliderCatalog/styled';
import sliderCoat from '@assets/foto/sliderCoat.png';
import sliderJackets from '@assets/foto/sliderJackets.png';
import sliderFur from '@assets/foto/sliderFur.png';
import sliderParks from '@assets/foto/sliderParks.png';
import SampleNextArrow from '@components/Main/SliderCatalog/components/SampleNextArrow';
import SamplePrevArrow from '@components/Main/SliderCatalog/components/SamplePrevArrow';

interface ISettings {
    dots: boolean;
    infinite: boolean;
    slidesToShow: number;
    slidesToScroll: number;
    speed: number;
    nextArrow: any;
    prevArrow: any;
}

const sliderItem = [
    { category: 'Пальто', photo: <img src={sliderCoat} alt="photoSlider" /> },
    { category: 'Куртки', photo: <img src={sliderJackets} alt="photoSlider" /> },
    { category: 'Шубы', photo: <img src={sliderFur} alt="photoSlider" /> },
    { category: 'Парки', photo: <img src={sliderParks} alt="photoSlider" /> },
    { category: 'Пальто', photo: <img src={sliderCoat} alt="photoSlider" /> },
    { category: 'Куртки', photo: <img src={sliderJackets} alt="photoSlider" /> },
    { category: 'Шубы', photo: <img src={sliderFur} alt="photoSlider" /> },
    { category: 'Парки', photo: <img src={sliderParks} alt="photoSlider" /> },
];
const SliderBox = () => {
    const settings: ISettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <SliderContainer>
            <Slider {...settings}>
                {sliderItem.map((i) => (
                    <SliderWrap key={i.category}>
                        <SliderPhoto>{i.photo}</SliderPhoto>
                        <SliderText>{i.category}</SliderText>
                    </SliderWrap>
                ))}
            </Slider>
        </SliderContainer>
    );
};

export default SliderBox;
