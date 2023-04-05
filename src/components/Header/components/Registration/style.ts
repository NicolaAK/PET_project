import styled from 'styled-components';

export const ModalBackground = styled.div`
    background-color: ${({ theme }) => theme.colors.blackPrimary(0.75)};
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 3;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    width: 100%;
    min-height: 100vh;
    z-index: 4;
`;
export const ModalWindow = styled.div`
    width: 600px;
    height: 382px;
    background-color: white;
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const Title = styled.p`
    ${({ theme }) => theme.helpers.getTypography('dText20')};
    text-align: center;
    margin-bottom: 10px;
`;
