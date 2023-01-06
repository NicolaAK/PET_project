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
    headTitle: string;
    depictTitle: string;
    cardIcon: ReactNode;
    background: string;
};
const SpecialCard: FC<Props> = ({ headTitle, depictTitle, cardIcon, background }) => (
    <CardContainer bg={background}>
        <CardContent>
            <CardTitle>
                <CardHeadTitle>{headTitle}</CardHeadTitle>
                <CardDescribeTitle>{depictTitle}</CardDescribeTitle>
            </CardTitle>
            <CardImage>{cardIcon}</CardImage>
        </CardContent>
    </CardContainer>
);

export default SpecialCard;
