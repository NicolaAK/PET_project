import React, { FC } from 'react';
import { LinkText, Container, Content, Line, Catalog } from './style';

interface ICompany {
    label: string;
    link: string;
}
interface ITitles {
    title: string;
    link: string;
}
interface IProps {
    hamburgerTitles: ITitles[];
    aboutCompany: ICompany[];
}
const MobileMenu: FC<IProps> = ({ hamburgerTitles, aboutCompany }) => (
    <Container>
        <Content>
            <Line />
            {aboutCompany.map((item) => (
                <Catalog key={item.label}>
                    <LinkText to={item.link}>{item.label}</LinkText>
                    <Line />
                </Catalog>
            ))}
            {hamburgerTitles.map((item) => (
                <Catalog key={item.title}>
                    <LinkText to={item.link}>{item.title}</LinkText>
                    <Line />
                </Catalog>
            ))}
        </Content>
    </Container>
);

export default MobileMenu;
