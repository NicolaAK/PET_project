import React from 'react';
import Slider from 'react-slick';
import '../../../globalStyles/sliderStyles/slick.css';
import '../../../globalStyles/sliderStyles/slick-theme.css';
import {
    SliderWrap,
    SliderPhoto,
    SliderText,
    SliderContainer,
    SliderBottonBox,
    ArrowContainerRight,
    ArrowBox,
    ArrowContainerLeft,
} from '@components/Main/SliderCatalog/styled';
import sliderCoat from '@assets/foto/sliderCoat.png';
import sliderJackets from '@assets/foto/sliderJackets.png';
import sliderFur from '@assets/foto/sliderFur.png';
import sliderParks from '@assets/foto/sliderParks.png';
import ArrowRightSlider from '@assets/icons/arrowRightSlider.svg';
import ArrowLeftSlider from '@assets/icons/arrowLeftSlider.svg';

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
type Props = {
    onClick?: () => void;
};
const SamplePrevArrow = ({ onClick }: Props) => (
    <ArrowContainerLeft onClick={onClick}>
        <ArrowBox>
            <ArrowLeftSlider />
        </ArrowBox>
    </ArrowContainerLeft>
);
const SampleNextArrow = ({ onClick }: Props) => (
    <ArrowContainerRight onClick={onClick}>
        <ArrowBox>
            <ArrowRightSlider />
        </ArrowBox>
    </ArrowContainerRight>
);
const SliderBox = () => {
    const settings = {
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
                        <SliderBottonBox>
                            <SliderText>{i.category}</SliderText>
                        </SliderBottonBox>
                    </SliderWrap>
                ))}
            </Slider>
        </SliderContainer>
    );
};

export default SliderBox;
