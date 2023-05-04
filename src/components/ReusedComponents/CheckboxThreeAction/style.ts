import styled from 'styled-components';

export const CheckboxContainer = styled.div<{
    isChecked: boolean | undefined;
}>`
    margin-bottom: 3px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.colors.mainPrimary()};
    background-color: ${({ isChecked }) => {
        if (isChecked === undefined) {
            return 'white';
        } else if (isChecked === true) {
            return '#E0BEA2';
        } else {
            return '#d56464';
        }
    }};
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
