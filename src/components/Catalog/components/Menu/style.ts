import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface IAnimation {
    isOpenDetails?: boolean;
}
interface IProps {
    activeclassname: string;
}
export const MenuContainer = styled.div`
    grid-area: Menu;
`;
export const MenuContent = styled.div``;

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: start;
`;
export const ContainerSkeleton = styled.div`
    display: flex;
    flex-direction: column;
    align-content: start;
    gap: 20px;
`;
export const Text = styled(NavLink)<IProps>`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')}
    transition: ${({ theme }) => theme.decorations.transition};
    margin-bottom: 20px;
    text-align: start;
    text-decoration: none;
    :hover {
        color: ${({ theme }) => theme.colors.mainPrimary()};
    }
    &.${(props) => props.activeclassname} {
        font-weight: bold;
    }
`;
export const CatalogMobile = styled.div`
    margin-top: 15px;
`;
export const ContainerMobile = styled.button`
    background-color: ${({ theme }) => theme.colors.mainPrimary()};
    height: 40px;
    width: 100%;
    ${({ theme }) => theme.mixins.flexCenterCenter};
    transition: ${({ theme }) => theme.decorations.transition};
    :active {
        background-color: ${({ theme }) => theme.colors.buttonPrimaryClick()};
    }
`;
export const Title = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dHeader18')}
    text-align: center;
    color: ${({ theme }) => theme.colors.white()};
`;
export const ArrowContainer = styled.div<IAnimation>`
    margin: 3px 0 0 10px;
    transition: all 0.3s linear;
    rotate: ${({ isOpenDetails }) => (isOpenDetails ? '-90deg' : '90deg')};
    svg path {
        fill: ${({ theme }) => theme.colors.white()};
    }
`;
export const OpenCategoryList = styled.div<IAnimation>`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    flex-direction: column;
    height: auto;
    max-height: ${({ isOpenDetails }) => (isOpenDetails ? '150px' : '0px')};
    opacity: ${({ isOpenDetails }) => (isOpenDetails ? '1' : '0')};
    overflow: hidden;
    transition: 0.7s ease;
    padding-top: 3px;
`;
export const MobileText = styled(NavLink)`
    text-decoration: none;
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')};
    margin: 7px 0;
`;
export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.blackPrimary(0.5)};
`;
export const MobileCategoryList = styled.div``;
