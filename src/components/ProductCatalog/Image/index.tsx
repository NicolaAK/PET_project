import React, { useState } from 'react';
import SliderImage from '@components/ProductCatalog/Image/SliderImage';
import {
    Container,
    ImageBig,
    ImageMain,
    ImageOther,
    ImageOtherContainer,
    ImageSmall,
    ModalWindow,
    SliderContainer,
    Exit,
    ExitContainer,
    ModalBackground,
} from './style';

interface IImage {
    images: string[];
}
const ImageProduct = ({ images }: IImage) => {
    const [mainImage, setMainImage] = useState(images[0]);
    const [isOpenImage, setIsOpenImage] = useState(false);
    const toggleOpenImageFullScreen = () => setIsOpenImage(!isOpenImage);
    return (
        <Container>
            <ImageOther>
                {images.map((image) => (
                    <ImageOtherContainer>
                        <ImageSmall key={Math.random()} src={image} onClick={() => setMainImage(image)} />
                    </ImageOtherContainer>
                ))}
            </ImageOther>
            <ImageMain>
                <ImageBig src={mainImage} onClick={toggleOpenImageFullScreen} />
            </ImageMain>
            {isOpenImage && (
                <ModalWindow>
                    <ExitContainer onClick={toggleOpenImageFullScreen}>
                        <Exit>X</Exit>
                    </ExitContainer>
                    <SliderContainer>
                        <SliderImage
                            images={images}
                            toggleOpenImageFullScreen={toggleOpenImageFullScreen}
                            initialSlide={images.indexOf(mainImage)}
                        />
                    </SliderContainer>
                    <ModalBackground onClick={toggleOpenImageFullScreen} />
                </ModalWindow>
            )}
        </Container>
    );
};

export default ImageProduct;
