import styled from 'styled-components';

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
export const Text = styled.button`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')}
    transition: ${({ theme }) => theme.decorations.transition};
    padding-bottom: 20px;
    text-align: start;
    :hover {
        color: ${({ theme }) => theme.colors.mainPrimary()};
    }
`;
