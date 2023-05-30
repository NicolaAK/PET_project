import React, { FC } from 'react';
import {
    CompanyContainer,
    CompanyTitle,
    ContainerIcons,
    ContainerText,
    FooterContainer,
    FooterContent,
    Icon,
    Text,
} from './style';

interface IProps {
    title: string;
    abouts: string[];
    icons?: React.ReactNode[];
}
export interface IFooter {
    information: IProps[];
}
const FooterDesktop: FC<IFooter> = ({ information }) => (
    <FooterContainer>
        <FooterContent>
            {information.map((info) => (
                <CompanyContainer key={info.title}>
                    <CompanyTitle key={info.title}>{info.title}</CompanyTitle>
                    <ContainerIcons>
                        {info.icons?.map((icons) => (
                            <Icon key={Math.random()}>{icons}</Icon>
                        ))}
                    </ContainerIcons>
                    <ContainerText>
                        {info.abouts.map((text) => (
                            <Text key={text}>{text}</Text>
                        ))}
                    </ContainerText>
                </CompanyContainer>
            ))}
        </FooterContent>
    </FooterContainer>
);

export default FooterDesktop;
