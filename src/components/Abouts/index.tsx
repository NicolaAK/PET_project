import React from 'react';
import Breadcrumbs from '@components/ReusedComponents/Breadcrumbs';
import { generateGithubPagesRoutes } from '@utils/helpers';
import Subscription from '@components/Main/Subscription';
import InstIcon from '@assets/icons/InstaBig.svg';
import TelegaIcon from '@assets/icons/TelegaBig.svg';
import { Heading, Content, Container, Contacts, Title, Text, Icon } from './style';

const URL = [
    { link: 'Главная', path: generateGithubPagesRoutes('') },
    { link: 'Контакты', path: '' },
];

const Abouts = () => (
    <Container>
        <Breadcrumbs URL={URL} />
        <Heading>Связаться с нами</Heading>
        <Content>
            <Contacts>
                <Title>В социальных сетях</Title>
                <Icon>
                    <InstIcon />
                    <TelegaIcon />
                </Icon>
            </Contacts>
            <Contacts>
                <Title>По телефону</Title>
                <Text>+7 913 557 15 79</Text>
                <Text>+7 902 910 33 84</Text>
            </Contacts>
            <Contacts>
                <Title>По почте</Title>
                <Text>kolyankalachev@mail.ru</Text>
            </Contacts>
            <Contacts>
                <Title>Наш офис</Title>
                <Text>г. Красноярск, улица Батумская, 18</Text>
            </Contacts>
        </Content>
        <Subscription />
    </Container>
);

export default Abouts;
