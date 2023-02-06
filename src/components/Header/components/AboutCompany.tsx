import React, { FC } from 'react';
import { AboutCompanyWrapper, AboutCompanyTitle, LinkText } from '@components/Header/components/styled';

type Props = {
    label: string;
    link: string;
};
const AboutCompany: FC<Props> = ({ label, link }) => (
    <AboutCompanyWrapper>
        <AboutCompanyTitle>
            <LinkText to={link}>{label}</LinkText>
        </AboutCompanyTitle>
    </AboutCompanyWrapper>
);

export default AboutCompany;
