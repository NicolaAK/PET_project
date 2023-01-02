import styled from 'styled-components';

type Props = {
    icon: boolean;
};

export const InputWrapper = styled.div<Props>`
    position: relative;
    border-radius: ${({ theme }) => theme.decorations.borderRadius.base}px;
    background-color: ${({ theme }) => theme.colors.mainSurface()};
    border: 1px solid ${({ theme }) => theme.colors.mainSecondary()};
    overflow: hidden;
    ${({ theme }) => theme.helpers.getTypography('dTextS')};

    input {
        padding: 8px 16px;
        padding-right: ${({ icon }) => (icon ? '36px' : '16px')};
        width: 100%;
    }
`;

export const IconWrapper = styled.div`
    position: absolute;
    right: 8px;
    top: 8px;
    pointer-events: none;
`;
