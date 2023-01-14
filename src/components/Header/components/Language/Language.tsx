import React from 'react';
import Arrow from '@assets/icons/arrow.svg';
import { LanguageTitle, LanguageContainer, LanguageContent } from '@components/Header/components/Language/styled';

const Language = () => (
    <LanguageContainer>
        <LanguageContent>
            <LanguageTitle>RU</LanguageTitle>
            <Arrow />
        </LanguageContent>
    </LanguageContainer>
);

export default Language;
