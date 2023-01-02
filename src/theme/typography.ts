export type TTypographyItem = {
    fontSize: number;
    lineHeight: number;
    fontWeight?: number;
    textTransform?: string;
};

export type TTypography = {
    dTextXs: TTypographyItem;
    dTextS: TTypographyItem;
    dTextM: TTypographyItem;
    dTextL: TTypographyItem;
    dTextXL: TTypographyItem;

    dTextBoldXs: TTypographyItem;
    dTextBoldS: TTypographyItem;
    dTextBoldM: TTypographyItem;
    dTextBoldL: TTypographyItem;
    dTextBoldXL: TTypographyItem;

    dHeaderXs: TTypographyItem;
    dHeaderS: TTypographyItem;
    dHeaderM: TTypographyItem;
    dHeaderL: TTypographyItem;
    dHeaderXL: TTypographyItem;
};

const typography: TTypography = {
    // desktop

    // text
    dTextXs: {
        fontSize: 12,
        lineHeight: 18,
    },
    dTextS: {
        fontSize: 16,
        lineHeight: 24,
    },
    dTextM: {
        fontSize: 18,
        lineHeight: 27,
    },
    dTextL: {
        fontSize: 24,
        lineHeight: 36,
    },
    dTextXL: {
        fontSize: 36,
        lineHeight: 54,
    },
    // bold
    dTextBoldXs: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: 700,
    },
    dTextBoldS: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 700,
    },
    dTextBoldM: {
        fontSize: 18,
        lineHeight: 27,
        fontWeight: 700,
    },
    dTextBoldL: {
        fontSize: 24,
        lineHeight: 36,
        fontWeight: 700,
    },
    dTextBoldXL: {
        fontSize: 36,
        lineHeight: 54,
        fontWeight: 700,
    },
    // header
    dHeaderXs: {
        fontSize: 18,
        lineHeight: 27,
        fontWeight: 700,
    },
    dHeaderS: {
        fontSize: 24,
        lineHeight: 36,
        fontWeight: 700,
    },
    dHeaderM: {
        fontSize: 36,
        lineHeight: 54,
        fontWeight: 700,
    },
    dHeaderL: {
        fontSize: 48,
        lineHeight: 72,
        fontWeight: 700,
    },
    dHeaderXL: {
        fontSize: 64,
        lineHeight: 96,
        fontWeight: 700,
    },
};

export default typography;
