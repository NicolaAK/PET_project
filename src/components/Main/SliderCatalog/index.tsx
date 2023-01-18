import React from 'react';
import Slider from 'react-slick';
import '../../../globalStyles/sliderStyles/slick.css';
import '../../../globalStyles/sliderStyles/slick-theme.css';
import {
    SliderWrap,
    SliderPhoto,
    SliderText,
    SliderContainer,
    SliderBottomBox,
} from '@components/Main/SliderCatalog/styled';
import sliderCoat from '@assets/foto/sliderCoat.png';
import sliderJackets from '@assets/foto/sliderJackets.png';
import sliderFur from '@assets/foto/sliderFur.png';
import sliderParks from '@assets/foto/sliderParks.png';
import { ArrowControl } from '@components/Main/SliderCatalog/component/ArrowControl';

const sliderItems = [
    { category: 'Пальто', photo: sliderCoat },
    { category: 'Куртки', photo: sliderJackets },
    { category: 'Шубы', photo: sliderFur },
    { category: 'Парки', photo: sliderParks },
    { category: 'Пальто', photo: sliderCoat },
    { category: 'Куртки', photo: sliderJackets },
    { category: 'Шубы', photo: sliderFur },
    { category: 'Парки', photo: sliderParks },
];

const SliderBox = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <ArrowControl isLeft={false} />,
        prevArrow: <ArrowControl isLeft />,
    };
    return (
        <SliderContainer>
            <Slider {...settings}>
                {sliderItems.map((sliderItem) => (
                    <SliderWrap key={sliderItem.category}>
                        <SliderPhoto>
                            <img src={sliderItem.photo} alt="photoSlider" />
                        </SliderPhoto>
                        <SliderBottomBox>
                            <SliderText>{sliderItem.category}</SliderText>
                        </SliderBottomBox>
                    </SliderWrap>
                ))}
            </Slider>
        </SliderContainer>
    );
};

export default SliderBox;
