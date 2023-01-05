import React from 'react';
import {
    FooterContainer,
    FooterContent,
    AboutsCompany,
    SocialsMedia,
    NumberCompany,
    Number,
} from '@components/Footer/style';
import LogoMini from '@assets/icons/logoMini.svg';
import AboutCompany from '@components/Footer/components/AboutCompany';
import SocialMedia from '@components/Footer/components/SocialMedia';
import VK from '@assets/icons/vk.svg';
import FB from '@assets/icons/facebook.svg';
import OK from '@assets/icons/ok.svg';
import INST from '@assets/icons/inst.svg';
import Call from '@assets/icons/call.svg';

const aboutCompany = [
    { label: 'О компании' },
    { label: 'Контакты' },
    { label: 'Вакансии' },
    { label: 'Статьи' },
    { label: 'Политика обработки персональных данных' },
];

const iconsSocial = [
    {
        icon: <INST />,
    },
    {
        icon: <VK />,
    },
    {
        icon: <FB />,
    },
    {
        icon: <OK />,
    },
];

const Footer = () => (
    <FooterContainer>
        <FooterContent>
            <LogoMini />
            <AboutsCompany>
                {aboutCompany.map((about) => (
                    <AboutCompany key={about.label} label={about.label} />
                ))}
            </AboutsCompany>
            <SocialsMedia>
                {iconsSocial.map((about) => (
                    <SocialMedia icon={about.icon} />
                ))}
            </SocialsMedia>
            <NumberCompany>
                <Call />
                <Number>8 800 777 33 33</Number>
            </NumberCompany>
        </FooterContent>
    </FooterContainer>
);

export default Footer;
