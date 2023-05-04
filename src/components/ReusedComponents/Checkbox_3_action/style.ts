import styled from 'styled-components';

export const CheckboxContainer = styled.button<{
    isChecked: boolean | undefined;
}>`
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: 2px solid grey;
    background-color: ${({ isChecked }) => {
        if (isChecked === undefined) {
            return 'white';
        } else if (isChecked === true) {
            return 'green';
        } else {
            return 'grey';
        }
    }};
    transition: background-color 0.3s ease;
    cursor: pointer;
`;
