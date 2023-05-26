export type TTypographyItem = {
    fontSize: number;
    lineHeight: number;
    fontWeight?: number;
    textTransform?: string;
};

export type TTypography = {
    dFooter12: TTypographyItem;
    dFooter14: TTypographyItem;
    dFooter16w: TTypographyItem;
    dFooter18: TTypographyItem;
    dFooter20: TTypographyItem;

    dText12: TTypographyItem;
    dText14: TTypographyItem;
    dText14w: TTypographyItem;
    dText16lh19: TTypographyItem;
    dText16w: TTypographyItem;
    dText16lh20: TTypographyItem;
    dText20: TTypographyItem;
    dText24: TTypographyItem;
    dText36: TTypographyItem;

    dTextBold16: TTypographyItem;
    dTextBold20: TTypographyItem;

    dHeader14: TTypographyItem;
    dHeader16: TTypographyItem;
    dHeader18: TTypographyItem;
    dHeader32: TTypographyItem;
    dHeader40: TTypographyItem;
    dHeader46: TTypographyItem;
    dHeader54: TTypographyItem;
};

const typography: TTypography = {
    // desktop
    // footer
    dFooter12: {
        fontSize: 12,
        lineHeight: 14,
    },
    dFooter14: {
        fontSize: 14,
        lineHeight: 14,
    },
    dFooter16w: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: 275,
    },
    dFooter18: {
        fontSize: 18,
        lineHeight: 21,
    },
    dFooter20: {
        fontSize: 20,
        lineHeight: 23,
    },
    // text
    dText12: {
        fontSize: 12,
        lineHeight: 16,
    },
    dText14: {
        fontSize: 14,
        lineHeight: 16,
    },
    dText14w: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: 275,
    },
    dText16lh19: {
        fontSize: 16,
        lineHeight: 19,
    },
    dText16w: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: 275,
    },
    dText16lh20: {
        fontSize: 16,
        lineHeight: 20,
    },
    dText20: {
        fontSize: 20,
        lineHeight: 23,
    },
    dText24: {
        fontSize: 24,
        lineHeight: 28,
    },
    dText36: {
        fontSize: 36,
        lineHeight: 42,
    },
    // bold
    dTextBold16: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: 700,
    },
    dTextBold20: {
        fontSize: 20,
        lineHeight: 19,
        fontWeight: 700,
    },
    // header
    dHeader14: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: 300,
    },
    dHeader16: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: 300,
    },
    dHeader18: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 300,
    },
    dHeader32: {
        fontSize: 32,
        lineHeight: 37,
        fontWeight: 300,
    },
    dHeader40: {
        fontSize: 40,
        lineHeight: 37,
        fontWeight: 300,
    },
    dHeader46: {
        fontSize: 46,
        lineHeight: 54,
    },
    dHeader54: {
        fontSize: 54,
        lineHeight: 44,
        fontWeight: 400,
    },
};

export default typography;
