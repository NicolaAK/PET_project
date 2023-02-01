import React, { FC } from 'react';
import { AboutCompanyWrapper, AboutCompanyTitle } from '@components/Header/components/styled';
import { Link } from 'react-router-dom';

type Props = {
    label: string;
    link: string;
};
const AboutCompany: FC<Props> = ({ label, link }) => (
    <AboutCompanyWrapper>
        <AboutCompanyTitle>
            <Link to={link}>{label}</Link>
        </AboutCompanyTitle>
    </AboutCompanyWrapper>
);

export default AboutCompany;
