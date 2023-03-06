import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 70px;
`;
export const Content = styled.div``;
export const HeadTitle = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText20')};
    margin-bottom: 30px;
`;
export const Subtitle = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')};
    margin-bottom: 20px;
`;
export const GridPersonalData = styled.div`
    display: grid;
    grid-auto-columns: auto;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px 20px;
    grid-template-areas:
        '. .'
        '. .';
    margin-bottom: 20px;
`;
export const GridAddress = styled.div`
    display: grid;
    grid-auto-columns: auto;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 20px 20px;
    grid-template-areas: '. .';
    margin-bottom: 20px;
`;
export const ContentDelivery = styled.div`
    display: grid;
    grid-auto-columns: auto;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 39px 1fr 25px;
    gap: 0px 20px;
    grid-template-areas:
        '. .'
        '. .'
        '. .';
`;
export const ContainerDelivery = styled.div`
    margin-bottom: 20px;
`;
export const ContainerPayment = styled.div`
    margin-bottom: 20px;
`;
export const ContentPayment = styled.div`
    display: grid;
    grid-auto-columns: auto;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 25px;
    gap: 0px 20px;
    grid-template-areas:
        '. .'
        '. .';
`;
export const Conditions = styled.div`
    margin-top: 15px;
    ${({ theme }) => theme.helpers.getTypography('dText14')};
    text-align: center;
`;
