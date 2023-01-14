export type TTypographyItem = {
    fontSize: number;
    lineHeight: number;
    fontWeight?: number;
    textTransform?: string;
};

export type TTypography = {
    dFooterXS: TTypographyItem;
    dFooterSw: TTypographyItem;
    dFooterM: TTypographyItem;

    dTextXS: TTypographyItem;
    dTextXSw: TTypographyItem;
    dTextS: TTypographyItem;
    dTextSw: TTypographyItem;
    dTextM: TTypographyItem;
    dTextL: TTypographyItem;
    dTextXL: TTypographyItem;

    dTextBoldS: TTypographyItem;

    dHeaderXS: TTypographyItem;
    dHeaderS: TTypographyItem;
    dHeaderM: TTypographyItem;
    dHeaderL: TTypographyItem;
};

const typography: TTypography = {
    // desktop
    // footer
    dFooterXS: {
        fontSize: 12,
        lineHeight: 14,
    },
    dFooterSw: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: 275,
    },
    dFooterM: {
        fontSize: 20,
        lineHeight: 23,
    },
    // text
    dTextXS: {
        fontSize: 14,
        lineHeight: 16,
    },
    dTextXSw: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: 275,
    },
    dTextS: {
        fontSize: 16,
        lineHeight: 19,
    },
    dTextSw: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: 275,
    },
    dTextM: {
        fontSize: 16,
        lineHeight: 20,
    },
    dTextL: {
        fontSize: 20,
        lineHeight: 23,
    },
    dTextXL: {
        fontSize: 36,
        lineHeight: 42,
    },
    // bold
    dTextBoldS: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: 700,
    },

    // header
    dHeaderXS: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: 300,
    },
    dHeaderS: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 300,
    },
    dHeaderM: {
        fontSize: 46,
        lineHeight: 54,
        fontWeight: 300,
    },
    dHeaderL: {
        fontSize: 54,
        lineHeight: 44,
        fontWeight: 400,
    },
};

export default typography;
