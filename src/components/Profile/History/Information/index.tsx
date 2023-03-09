import React, { FC } from 'react';
import { Container, Group, Title, Text } from './style';
export interface IPersonalData {
    surname: string;
    mail: string;
    phone: string;
    delivery: string;
    payment: string;
}

const Information: FC<IPersonalData> = ({ mail, payment, delivery, surname, phone }) => (
    <Container>
        <Group>
            <Title>
                Имя Фамилия: <Text>{surname}</Text>
            </Title>
            <Title>
                E-mail: <Text>{mail}</Text>
            </Title>
            <Title>
                Номер телефона: <Text>{phone}</Text>
            </Title>
        </Group>
        <Group>
            <Title>
                Способ доставки: <Text>{delivery}</Text>
            </Title>
            <Title>
                Способ оплаты: <Text>{payment}</Text>
            </Title>
        </Group>
    </Container>
);

export default Information;
