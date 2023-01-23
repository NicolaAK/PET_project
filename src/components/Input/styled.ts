import styled from 'styled-components';

export const InputContainer = styled.div``;
export const InputContent = styled.input`
    transition: ${({ theme }) => theme.decorations.transition};
    border: 0.5px solid ${({ theme }) => theme.colors.blackPrimary()};
    width: 600px;
    height: 50px;
    text-align: center;
    outline: none;
    &:focus,
    &:hover {
        box-shadow: ${({ theme }) => theme.decorations.boxShadow.base};
        border: 0.5px solid ${({ theme }) => theme.colors.mainPrimary()};
    }
`;
