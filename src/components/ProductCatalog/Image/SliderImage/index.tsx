import React from 'react';
import { ArrowControl } from '@components/ProductCatalog/Image/SliderImage/component/ArrowControl';
import Slider from 'react-slick';
import { SliderContainer, SliderPhoto, SliderWrap } from './style';

interface IImages {
    images: any;
}

const SliderImage = ({ images }: IImages) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowControl isLeft={false} />,
        prevArrow: <ArrowControl isLeft />,
    };
    return (
        <SliderContainer>
            <Slider {...settings}>
                {images.map((image: any) => (
                    <SliderWrap key={image}>
                        <SliderPhoto>
                            <img src={image} alt="photoSlider" />
                        </SliderPhoto>
                    </SliderWrap>
                ))}
            </Slider>
        </SliderContainer>
    );
};

export default SliderImage;
