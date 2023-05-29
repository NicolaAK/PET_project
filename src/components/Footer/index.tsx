import React from 'react';
import Telegram from '@assets/icons/telegram.svg';
import Instagram from '@assets/icons/instagram.svg';
import { useMediaHook } from '@theme/breakpoints';
import FooterDesktop from '@components/Footer/Desktop';
import FooterMobile from '@components/Footer/Mobile';

const information = [
    {
        title: 'КОМПАНИЯ',
        abouts: ['О нас', 'Контакты'],
    },
    {
        title: 'ПОЛЕЗНОЕ',
        abouts: ['Оплата и доставка', 'Условия возврата', 'Бонусная система'],
    },
    {
        title: 'ПОКУПАТЕЛЮ',
        abouts: ['Избранное', 'Публичная оферта', 'Политика конфиденциальности'],
    },
    {
        title: 'КОНТАКТЫ',
        abouts: ['+7 913 557 15 79', 'kolyankalachev@mail.ru'],
        icons: [<Instagram />, <Telegram />],
    },
];

const Footer = () => {
    const { isSm } = useMediaHook();
    return isSm ? <FooterMobile information={information} /> : <FooterDesktop information={information} />;
};

export default Footer;
