import styled from 'styled-components';
export const Container = styled.div`
    position: relative;
    display: inline-block;
    margin-bottom: 15px;
`;
export const Content = styled.div``;
export const Photo = styled.div`
    display: inline-block;
    overflow: hidden;
    height: 360px;
`;
export const Image = styled.img`
    width: 100%;
    transition: 0.7s;
    :hover {
        transform: scale(1.03);
    }
`;
export const Favourites = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    background: #e0bea2;
    border-radius: 0px 0px 0px 20px;
    z-index: 2;
`;
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding-top: 10px;
`;
export const NameProduct = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')}
`;
export const Price = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dTextBold16')}
`;
export const Size = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')}
`;
export const Colors = styled.div``;
export const Icon = styled.div`
    padding: 12.75px 12px 13.39px 13px;
`;
