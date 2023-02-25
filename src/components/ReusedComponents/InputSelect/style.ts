import styled from 'styled-components';

interface IAnimation {
    isOpenSelect: boolean;
}
export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')}
    color: ${({ theme }) => theme.colors.blackPrimary(0.8)};
`;

export const Header = styled.div`
    ${({ theme }) => theme.mixins.flexCenterSpaceBetween};
    border: 1px solid ${({ theme }) => theme.colors.blackPrimary(0.5)};
    padding: 16px 0px 15px 19px;
    transition: ${({ theme }) => theme.decorations.transition};
    :hover {
        box-shadow: ${({ theme }) => theme.decorations.boxShadow.base};
    }
`;

export const ListContainer = styled.div`
    box-shadow: ${({ theme }) => theme.decorations.boxShadow.base};
    background: ${({ theme }) => theme.colors.white()};
`;

export const List = styled.ul`
    padding-left: 19px;
    border: 0.5px solid ${({ theme }) => theme.colors.blackPrimary(0.3)};
    box-sizing: border-box;
    &:first-child {
        padding-top: 10px;
    }
`;

export const ListItem = styled.li`
    list-style: none;
    margin-bottom: 10px;
`;
export const ArrowContainer = styled.div<IAnimation>`
    margin-right: 22px;
    transition: all 0.3s linear;
    rotate: ${({ isOpenSelect }) => (isOpenSelect ? '-90deg' : '90deg')};
`;
