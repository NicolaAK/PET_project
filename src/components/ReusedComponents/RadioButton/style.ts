import styled from 'styled-components';

export const Text = styled.p`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')};
`;
export const RadioBox = styled.div`
    width: 18px;
    height: 18px;
    border: 1px solid ${({ theme }) => theme.colors.blackPrimary(0.5)};
    border-radius: 50%;
    ${({ theme }) => theme.mixins.flexCenterCenter};
    cursor: pointer;
    margin-right: 10px;
    padding: 4px;

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: ${({ theme }) => theme.colors.mainPrimary()};
        border-radius: 50%;
        cursor: pointer;
        transform: scale(0);
    }
`;
export const Input = styled.input`
  display: none;
  &:checked + ${RadioBox} {
      &::after {
        transform: scale(1);
      }
`;
export const Label = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;
export const ContainerRadio = styled.div``;
