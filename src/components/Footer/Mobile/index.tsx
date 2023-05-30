import React, { FC } from 'react';
import { IFooter } from '@components/Footer/Desktop';
import InfoBox from '@components/Footer/Mobile/MobileInfoBox';
import { Container, Content, Contacts, Item, Icons, Icon, Text } from './style';

const FooterMobile: FC<IFooter> = ({ information }) => (
    <Container>
        <Content>
            {information.slice(0, 3).map((info) => (
                <InfoBox key={info.title} title={info.title} abouts={info.abouts} />
            ))}
            {information.slice(-1).map((info) => (
                <Contacts key={info.title}>
                    <Item>{info.title}</Item>
                    <Icons>
                        {info.icons?.map((icon) => (
                            <Icon key={Math.random()}>{icon}</Icon>
                        ))}
                    </Icons>
                    {info.abouts.map((text) => (
                        <Text key={text}>{text}</Text>
                    ))}
                </Contacts>
            ))}
        </Content>
    </Container>
);

export default FooterMobile;
