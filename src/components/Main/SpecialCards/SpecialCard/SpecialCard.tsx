import React, { FC, ReactNode } from 'react';
import {
    CardContent,
    CardTitle,
    CardDescribeTitle,
    CardHeadTitle,
    CardImage,
    CardContainer,
} from '@components/Main/SpecialCards/SpecialCard/styles';

type Props = {
    HeadTitle: string;
    DepictTitle: string;
    CardIcon: ReactNode;
};
const SpecialCard: FC<Props> = ({ HeadTitle, DepictTitle, CardIcon }) => (
    <CardContainer>
        <CardContent>
            <CardTitle>
                <CardHeadTitle>{HeadTitle}</CardHeadTitle>
                <CardDescribeTitle>{DepictTitle}</CardDescribeTitle>
            </CardTitle>
            <CardImage>{CardIcon}</CardImage>
        </CardContent>
    </CardContainer>
);

export default SpecialCard;
