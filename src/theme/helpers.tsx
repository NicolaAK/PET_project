import { kebabCase, mapKeys, mapValues } from 'lodash';
import typography, { TTypography, TTypographyItem } from './typography';
import { pipe } from '../utils/helpers';

const typographyPixelKeys = ['fontSize', 'lineHeight'];

const pixelizeValues = (values: TTypographyItem) =>
    mapValues(values, (v, k) => (typographyPixelKeys.includes(k) ? `${v}px` : v?.toString()));

const camelToKebabKeys = (obj: Object) => mapKeys(obj, (v, k) => kebabCase(k));
// getTypography helpers end =========

const getTypography = (typographyType: keyof TTypography) =>
    pipe(typography[typographyType], pixelizeValues, camelToKebabKeys);

export default {
    getTypography,
};
