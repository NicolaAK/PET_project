import React, { useState } from 'react';
import MinusIcon from '@assets/icons/minus.svg';
import PlusIcon from '@assets/icons/plus.svg';
import { Plus, Count, Minus, Content, Container } from './style';

interface ICount {
    value: number;
}
const TotalCount = ({ value }: ICount) => {
    const [count, setCount] = useState(value);
    const toggleDecreaseProduct = () => {
        setCount(count - 1);
    };
    const toggleAddProduct = () => {
        setCount(count + 1);
    };
    return (
        <Container>
            <Content>
                <Minus onClick={toggleDecreaseProduct}>
                    <MinusIcon />
                </Minus>
                <Count>{count}</Count>
                <Plus onClick={toggleAddProduct}>
                    <PlusIcon />
                </Plus>
            </Content>
        </Container>
    );
};

export default TotalCount;
