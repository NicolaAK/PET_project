import styled from 'styled-components';

export const InputContainer = styled.div``;
export const InputContent = styled.input`
    border: 0.5px solid ${({ theme }) => theme.colors.blackPrimary()};
    width: 600px;
    height: 50px;
    text-align: center;
`;
