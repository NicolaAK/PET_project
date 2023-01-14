import { css } from 'styled-components';
import { TTypography } from './typography';

const start = `
    display: flex;
    align-items: flex-start;
`;

const end = `
    display: flex;
    align-items: flex-end;
`;

const center = `
    display: flex;
    align-items: center;
`;

const mixins = {
    flexStart: css`
        ${start}
    `,
    flexEnd: css`
        ${end}
    `,
    flexCenter: css`
        ${center}
    `,
    flexStartCenter: css`
        ${start};
        justify-content: center;
    `,
    flexCenterCenter: css`
        ${center};
        justify-content: center;
    `,
    flexEndCenter: css`
        ${end};
        justify-content: center;
    `,
    flexCenterSpaceBetween: css`
        ${center};
        justify-content: space-between;
    `,
    mainGrid: css`
        max-width: 1140px;
        width: 100%;
        margin: 0 auto;
    `,
    getTypography: (typographyType: keyof TTypography) => css`
        ${({ theme }) => theme.helpers.getTypography(typographyType)}
    `,
};

export default mixins;
