import React, { FC } from 'react';
import { IFooter } from '@components/Footer/Desktop';
import InfoBox from '@components/Footer/Mobile/MobileInfoBox';
import { Container, Content } from './style';

const FooterMobile: FC<IFooter> = ({ information }) => (
    <Container>
        <Content>
            {information.map((info) => (
                <InfoBox key={info.title} title={info.title} abouts={info.abouts} icons={info.icons} />
            ))}
        </Content>
    </Container>
);

export default FooterMobile;
