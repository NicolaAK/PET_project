import React from 'react';
import SpecialCard from '@components/Main/SpecialCards/SpecialCard/SpecialCard';
import Card1 from '@assets/images/Card1.png';
import Card2 from '@assets/images/Card2.png';

const CardInfo = [
    {
        HeadTitle: 'Оформите карту «Северяночка»',
        DepictTitle: 'И получайте бонусы при покупке в магазинах и на сайте',
        CardIcon: <Card1 />,
    },
    {
        HeadTitle: 'Покупайте акционные товары',
        DepictTitle: 'И получайте вдвое больше бонусов',
        CardIcon: <Card2 />,
    },
];
const SpecialCards = () => (
    <>
        {CardInfo.map((card) => (
            <SpecialCard
                key={card.HeadTitle}
                HeadTitle={card.HeadTitle}
                DepictTitle={card.DepictTitle}
                CardIcon={card.CardIcon}
            />
        ))}
    </>
);
export default SpecialCards;
