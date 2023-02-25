import React from 'react';
import {
    CompanyContainer,
    CompanyTitle,
    FooterContainer,
    FooterContent,
    ContainerText,
    Text,
    Icon,
    ContainerIcons,
} from '@components/Footer/style';
import Telegram from '@assets/icons/telegram.svg';
import Instagram from '@assets/icons/instagram.svg';

const aboutCompany = [
    {
        abouts: 'О нас',
    },
    {
        abouts: 'Контакты',
    },
];
const aboutUseful = [
    {
        abouts: 'Оплата и доставка',
    },
    {
        abouts: 'Условия возврата',
    },
    {
        abouts: 'Бонусная система',
    },
];

const aboutShopper = [
    {
        abouts: 'Избранное',
    },
    {
        abouts: 'Публичная оферта',
    },
    {
        abouts: 'Политика конфиденциальности',
    },
];
const aboutContacts = [
    {
        abouts: '+38(073) 096 36 44',
    },
    {
        abouts: 'info@yanki.com',
    },
];
const iconsContacts = [
    {
        id: 1,
        icons: <Instagram />,
    },
    {
        id: 2,
        icons: <Telegram />,
    },
];
const Footer = () => (
    <FooterContainer>
        <FooterContent>
            <CompanyContainer>
                <CompanyTitle>КОМПАНИЯ</CompanyTitle>
                <ContainerText>
                    {aboutCompany.map((adout) => (
                        <Text key={adout.abouts}>{adout.abouts}</Text>
                    ))}
                </ContainerText>
            </CompanyContainer>
            <CompanyContainer>
                <CompanyTitle>ПОЛЕЗНОЕ</CompanyTitle>
                <ContainerText>
                    {aboutUseful.map((adout) => (
                        <Text key={adout.abouts}>{adout.abouts}</Text>
                    ))}
                </ContainerText>
            </CompanyContainer>
            <CompanyContainer>
                <CompanyTitle>ПОКУПАТЕЛЮ</CompanyTitle>
                <ContainerText>
                    {aboutShopper.map((adout) => (
                        <Text key={adout.abouts}>{adout.abouts}</Text>
                    ))}
                </ContainerText>
            </CompanyContainer>
            <CompanyContainer>
                <CompanyTitle>КОНТАКТЫ</CompanyTitle>
                <ContainerIcons>
                    {iconsContacts.map((icon) => (
                        <Icon key={icon.id}>{icon.icons}</Icon>
                    ))}
                </ContainerIcons>
                <ContainerText>
                    {aboutContacts.map((adout) => (
                        <Text key={adout.abouts}>{adout.abouts}</Text>
                    ))}
                </ContainerText>
            </CompanyContainer>
        </FooterContent>
    </FooterContainer>
);

export default Footer;
