import React from 'react';
import MinusIcon from '@assets/icons/minus.svg';
import PlusIcon from '@assets/icons/plus.svg';
import { Plus, Count, Minus, Content, Container } from './style';

interface ICount {
    value: number;
    onChange: (value: number) => void;
}
const TotalCount = ({ value, onChange }: ICount) => {
    const toggleDecreaseProduct = () => {
        if (value > 1) {
            onChange(value - 1);
        }
    };
    const toggleIncreaseProduct = () => {
        onChange(value + 1);
    };

    return (
        <Container>
            <Content>
                <Minus onClick={toggleDecreaseProduct}>
                    <MinusIcon />
                </Minus>
                <Count>{value}</Count>
                <Plus onClick={toggleIncreaseProduct}>
                    <PlusIcon />
                </Plus>
            </Content>
        </Container>
    );
};

export default TotalCount;
