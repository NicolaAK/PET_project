import React, { FC } from 'react';
import {
    CompanyContainer,
    CompanyTitle,
    // ContainerIcons,
    ContainerText,
    FooterContainer,
    FooterContent,
    // Icon,
    Text,
} from './style';

interface IInformation {
    company: Information[];
}

interface Information {
    title: string;
    abouts: string[];
    icons?: React.ReactNode[];
}
interface IProps {
    information: IInformation[];
}
const FooterDesktop: FC<IInformation> = ({ information }) => (
    <FooterContainer>
        <FooterContent>
            {information.map((about) => (
                <CompanyContainer>
                    <CompanyTitle>{about.company.title}</CompanyTitle>
                    <ContainerText>
                        {about.company.abouts.map((i) => (
                            <Text key={i}>{i}</Text>
                        ))}
                    </ContainerText>
                </CompanyContainer>
            ))}
            {/* <CompanyContainer> */}
            {/*    <CompanyTitle>{useful.title}</CompanyTitle> */}
            {/*    <ContainerText> */}
            {/*        {useful.abouts.map((about) => ( */}
            {/*            <Text key={about}>{about}</Text> */}
            {/*        ))} */}
            {/*    </ContainerText> */}
            {/* </CompanyContainer> */}
            {/* <CompanyContainer> */}
            {/*    <CompanyTitle>{shopper.title}</CompanyTitle> */}
            {/*    <ContainerText> */}
            {/*        {shopper.abouts.map((about) => ( */}
            {/*            <Text key={about}>{about}</Text> */}
            {/*        ))} */}
            {/*    </ContainerText> */}
            {/* </CompanyContainer> */}
            {/* <CompanyContainer> */}
            {/*    <CompanyTitle>{contacts.title}</CompanyTitle> */}
            {/*    <ContainerIcons> */}
            {/*        {contacts.icons.map((icon) => ( */}
            {/*            <Icon key={Number(icon)}>{icon}</Icon> */}
            {/*        ))} */}
            {/*    </ContainerIcons> */}
            {/*    <ContainerText> */}
            {/*        {contacts.abouts.map((about) => ( */}
            {/*            <Text key={about}>{about}</Text> */}
            {/*        ))} */}
            {/*    </ContainerText> */}
            {/* </CompanyContainer> */}
        </FooterContent>
    </FooterContainer>
);

export default FooterDesktop;
