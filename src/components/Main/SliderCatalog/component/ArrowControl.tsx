import React from 'react';
import {
    ArrowContainerLeft,
    ArrowContainerRight,
    ArrowBox,
    ArrowIcon,
} from '@components/Main/SliderCatalog/component/style';
import ArrowRightSlider from '@assets/icons/arrowRightSlider.svg';
import ArrowLeftSlider from '@assets/icons/arrowLeftSlider.svg';

type Props = {
    onClick?: () => void;
    isLeft: boolean;
};
export const ArrowControl = ({ onClick, isLeft }: Props) => {
    const Wrapper = isLeft ? ArrowContainerLeft : ArrowContainerRight;
    const Arrow: string = isLeft ? ArrowLeftSlider : ArrowRightSlider;
    return (
        <Wrapper onClick={onClick}>
            <ArrowBox>
                <ArrowIcon>
                    <Arrow />
                </ArrowIcon>
            </ArrowBox>
        </Wrapper>
    );
};
