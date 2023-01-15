import React, { FC } from 'react';
import { AboutCompanyWrapper, AboutCompanyTitle } from '@components/Header/components/styled';

type Props = {
    label: string;
};
const AboutCompany: FC<Props> = ({ label }) => (
    <AboutCompanyWrapper>
        <AboutCompanyTitle>{label}</AboutCompanyTitle>
    </AboutCompanyWrapper>
);

export default AboutCompany;
