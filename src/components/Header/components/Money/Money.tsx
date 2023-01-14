import React from 'react';
import Arrow from '@assets/icons/arrow.svg';
import { MoneyTitle, MoneyContainer, MoneyContent } from '@components/Header/components/Money/styled';

const Money = () => (
    <MoneyContainer>
        <MoneyContent>
            <MoneyTitle>RUB</MoneyTitle>
            <Arrow />
        </MoneyContent>
    </MoneyContainer>
);

export default Money;
