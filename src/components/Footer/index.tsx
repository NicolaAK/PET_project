import React from 'react';
import {} from './style';
import Telegram from '@assets/icons/telegram.svg';
import Instagram from '@assets/icons/instagram.svg';
import FooterDesktop from '@components/Footer/FooterDesktop';

const information = [
    {
        company: {
            title: 'КОМПАНИЯ',
            abouts: ['О нас', 'Контакты'],
        },
    },
    {
        company: {
            title: 'КОМПАНИЯ',
            abouts: ['Оплата и доставка', 'Условия возврата', 'Бонусная система'],
        },
    },
    {
        company: {
            title: 'КОМПАНИЯ',
            abouts: ['Избранное', 'Публичная оферта', 'Политика конфиденциальности'],
        },
    },
    {
        contacts: {
            title: 'КОМПАНИЯ',
            abouts: ['+7 913 557 15 79', 'kolyankalachev@mail.ru'],
            icons: [<Instagram />, <Telegram />],
        },
    },
];

const Footer = () => <FooterDesktop information={information} />;

export default Footer;
