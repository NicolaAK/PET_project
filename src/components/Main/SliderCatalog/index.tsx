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
} from '@components/Main/SliderCatalog/style';
import sliderCoat from '@assets/foto/sliderCoat.png';
import sliderJackets from '@assets/foto/sliderJackets.png';
import sliderFur from '@assets/foto/sliderFur.png';
import sliderParks from '@assets/foto/sliderParks.png';
import { ArrowControl } from '@components/Main/SliderCatalog/component/ArrowControl';
import { useMediaHook } from '@theme/breakpoints';

const sliderItems = [
    { name: 'Пальто', photo: sliderCoat },
    { name: 'Куртки', photo: sliderJackets },
    { name: 'Шубы', photo: sliderFur },
    { name: 'Парки', photo: sliderParks },
    { name: 'Пальто', photo: sliderCoat },
    { name: 'Куртки', photo: sliderJackets },
    { name: 'Шубы', photo: sliderFur },
    { name: 'Парки', photo: sliderParks },
];

const SliderBox = () => {
    const { isSm, isMd } = useMediaHook();

    const getSlidesToShow = () => {
        if (isSm) {
            return 2;
        } else if (isMd) {
            return 3;
        }
        return 4;
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: getSlidesToShow(),
        slidesToScroll: 1,
        nextArrow: <ArrowControl isLeft={false} />,
        prevArrow: <ArrowControl isLeft />,
    };

    return (
        <SliderContainer>
            <Slider {...settings}>
                {sliderItems.map((sliderItem) => (
                    <SliderWrap key={sliderItem.name}>
                        <SliderPhoto>
                            <img src={sliderItem.photo} alt="photoSlider" />
                            <SliderBottomBox>
                                <SliderText>{sliderItem.name}</SliderText>
                            </SliderBottomBox>
                        </SliderPhoto>
                    </SliderWrap>
                ))}
            </Slider>
        </SliderContainer>
    );
};

export default SliderBox;
