import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    margin: 30px 0 70px 0;
`;
export const ContainerShoppingList = styled.div``;
export const YourOrder = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText20')};
    margin-bottom: 30px;
`;
export const ShoppingList = styled.div`
    ${({ theme }) => theme.mixins.flexCenterSpaceBetween};
`;
export const GroupOne = styled.div`
    width: 250px;
    ${({ theme }) => theme.mixins.flexStart};
    column-gap: 10px;
`;
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 29px;
`;
export const Image = styled(Link)`
    overflow: hidden;
    ${({ theme }) => theme.mixins.flexStartCenter};
    width: 95px;
    height: 110px;
`;
export const Photo = styled.img`
    height: auto;
    width: 100%;
    margin-top: -15px;
    transition: 0.7s;
    :hover {
        transform: scale(1.045);
    }
`;
export const Article = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText14')};
    color: ${({ theme }) => theme.colors.mainPrimary()};
`;
export const Name = styled(Link)`
    text-decoration: none;
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')};
    transition: ${({ theme }) => theme.decorations.transition};
    :hover {
        color: ${({ theme }) => theme.colors.mainPrimary()};
    }
`;
export const Color = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid ${({ theme }) => theme.colors.blackPrimary(0.5)};
    border-radius: 30px;
    ${({ theme }) => theme.mixins.flexCenterCenter};
`;
export const ColorLine = styled.div``;
export const Select = styled.div`
    width: 98px;
`;
export const Counter = styled.div``;
export const GroupTwo = styled.div`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    column-gap: 31px;
`;
export const Price = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dTextBold16')};
`;
export const Icon = styled.button`
    transition: ${({ theme }) => theme.decorations.transition};
    &:hover {
        scale: 110%;
        filter: invert(0.42) sepia(1);
    }
`;
export const Line = styled.div`
    height: 1px;
    background-color: ${({ theme }) => theme.colors.blackPrimary(0.5)};
    margin: 10px 0 10px 0;
`;
export const Total = styled.div`
    margin-top: 30px;
    ${({ theme }) => theme.mixins.flexEndEnd};
    column-gap: 10px;
`;
export const Text = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')};
`;
export const Money = styled.a`
    ${({ theme }) => theme.helpers.getTypography('dTextBold16')};
`;
