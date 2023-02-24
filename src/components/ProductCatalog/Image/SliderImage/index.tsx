import React from 'react';
import { ArrowControl } from '@components/ProductCatalog/Image/SliderImage/component/ArrowControl';
import Slider from 'react-slick';
import { SliderContainer, SliderPhoto, SliderWrap, Image } from './style';

interface IImages {
    images: string[];
    toggleOpenImageFullScreen: () => void;
    initialSlide: number;
}

const SliderImage = ({ images, toggleOpenImageFullScreen, initialSlide }: IImages) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowControl isLeft={false} />,
        prevArrow: <ArrowControl isLeft />,
        initialSlide,
    };

    return (
        <SliderContainer>
            <Slider {...settings}>
                {images.map((image: any) => (
                    <SliderWrap key={image} onClick={toggleOpenImageFullScreen}>
                        <SliderPhoto>
                            <Image onClick={(e) => e.stopPropagation()}>
                                <img src={image} alt="photoSlider" />
                            </Image>
                        </SliderPhoto>
                    </SliderWrap>
                ))}
            </Slider>
            )
        </SliderContainer>
    );
};

export default SliderImage;
