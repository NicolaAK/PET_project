import React from 'react';
import ArrowRightSlider from '@assets/icons/arrowRightSlider.svg';
import ArrowLeftSlider from '@assets/icons/arrowLeftSlider.svg';
import { ArrowContainerLeft, ArrowContainerRight, ArrowBox } from './styled';

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
                <Arrow />
            </ArrowBox>
        </Wrapper>
    );
};
