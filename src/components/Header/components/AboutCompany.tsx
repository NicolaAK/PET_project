import React, { FC } from 'react';
import { AboutCompanyWrapper, AboutCompanyTitle, LinkText } from '@components/Header/components/style';

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
