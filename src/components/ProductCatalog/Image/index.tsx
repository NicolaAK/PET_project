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
} from './style';

interface IImage {
    images: any;
}
const ImageProduct = ({ images }: IImage) => {
    const [mainImage, setMainImage] = useState(images[0]);
    const [isOpenImage, setIsOpenImage] = useState(false);
    console.log(isOpenImage);
    const toggleOpenImageFullScreen = () => setIsOpenImage(!isOpenImage);
    return (
        <Container>
            <ImageOther>
                {images.map((image: string | undefined) => (
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
                        <SliderImage images={images} />
                    </SliderContainer>
                </ModalWindow>
            )}
        </Container>
    );
};

export default ImageProduct;
