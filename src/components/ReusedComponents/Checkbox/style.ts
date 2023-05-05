import styled from 'styled-components';

export const CheckboxContainer = styled.div<{
    isChecked?: boolean;
}>`
    margin-bottom: 2px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.colors.mainPrimary()};
    background-color: ${({ isChecked }) => (isChecked === true ? '#E0BEA2' : '#fff')};
    transition: background-color 0.3s ease;
    cursor: pointer;
`;
export const Container = styled.button`
    ${({ theme }) => theme.mixins.flexCenterCenter}
`;
export const Text = styled.a`
    margin-left: 10px;
    transition: ${({ theme }) => theme.decorations.transition};
    &:hover {
        color: ${({ theme }) => theme.colors.buttonPrimaryClick()};
    }
`;
