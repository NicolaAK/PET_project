import React, { useState } from 'react';
import Breadcrumbs from '@components/ReusedComponents/Breadcrumbs';
import { generateGithubPagesRoutes } from '@utils/helpers';
import History from '@components/Profile/History';
import PersonalData from '@components/Profile/PersonalData';
import { Content, Container, Tab, ButtonGroup, Line } from './style';

const URL = [
    { link: 'Главная', path: generateGithubPagesRoutes('') },
    { link: 'Личный кабинет', path: '' },
];
const types = [
    { id: 1, label: 'История заказов' },
    { id: 2, label: 'Личные данные' },
];

const Profile = () => {
    const [active, setActive] = useState(types[0].id);

    return (
        <Container>
            <Breadcrumbs URL={URL} />
            <Content>
                <Line />
                <ButtonGroup>
                    {types.map((type) => (
                        <Tab key={type.id} active={active === type.id} onClick={() => setActive(type.id)}>
                            {type.label}
                        </Tab>
                    ))}
                    <Tab>Выйти</Tab>
                </ButtonGroup>
                <Line />
                {active === 1 ? <History /> : <PersonalData />}
            </Content>
        </Container>
    );
};

export default Profile;
