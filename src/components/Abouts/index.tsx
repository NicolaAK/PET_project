import React from 'react';
import Breadcrumbs from '@components/ReusedComponents/Breadcrumbs';
import Subscription from '@components/Main/Subscription';
import InstIcon from '@assets/icons/InstaBig.svg';
import TelegaIcon from '@assets/icons/TelegaBig.svg';
import { Heading, Content, Container, Contacts, Title, Text, Icons } from './style';

const contacts = [
    { title: 'По телефону', texts: ['+7 913 557 15 79', '+7 902 910 33 84'] },
    { title: 'По почте', texts: ['kolyankalachev@mail.ru', 'kolyankalachev@gmail.com'] },
    { title: 'Наш офис', texts: ['г. Красноярск, улица Батумская, 18'] },
];

const Abouts = () => (
    <Container>
        <Breadcrumbs />
        <Heading>Связаться с нами</Heading>
        <Content>
            <Contacts>
                <Title>В социальных сетях</Title>
                <Icons>
                    <InstIcon />
                    <TelegaIcon />
                </Icons>
            </Contacts>
            {contacts.map((contact) => (
                <Contacts key={contact.title}>
                    <Title>{contact.title}</Title>
                    {contact.texts.map((text) => (
                        <Text key={text}>{text}</Text>
                    ))}
                </Contacts>
            ))}
        </Content>
        <Subscription />
    </Container>
);

export default Abouts;
