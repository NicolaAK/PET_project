import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface IProps {
    activeClassName: string;
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
    &.${(props) => props.activeClassName} {
        font-weight: bold;
    }
`;
