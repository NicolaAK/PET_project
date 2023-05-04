import styled from 'styled-components';

export const FilterContainer = styled.div`
    grid-area: Filter;
    ${({ theme }) => theme.mixins.flexCenter}
    column-gap: 34px;
`;
export const ButtonContainer = styled.div`
    width: 150px;
    scale: 0.8;
`;
export const Checkbox = styled.input`
    position: relative;
    width: 18px;
    height: 18px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #cacece;
    border-radius: 3px;
    outline: none;
    transition: all 0.2s ease-in-out;

    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 2px;
        left: 2px;
        width: 10px;
        height: 10px;
        background-color: #2d2d2d;
        border-radius: 2px;
        transform: scale(0);
        transition: all 0.2s ease-in-out;
    }

    &:checked::before {
        transform: scale(1);
    }
`;
export const LabelCheckbox = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
`;
