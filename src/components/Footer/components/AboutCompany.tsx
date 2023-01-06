import React, { FC } from 'react';
import { AboutCompanyTitle, AboutCompanyWrapper } from './style';

type Props = {
    label: string;
};

const AboutCompany: FC<Props> = ({ label }) => (
    <AboutCompanyWrapper>
        <AboutCompanyTitle>{label}</AboutCompanyTitle>
    </AboutCompanyWrapper>
);

export default AboutCompany;
