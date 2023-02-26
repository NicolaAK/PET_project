import * as yup from 'yup';

export enum ADD_PRODUCT_TO_CART_FIELDS {
    SIZE = 'size',
    COLOR = 'color',
}

export const addProductToCart = yup.object().shape({
    [ADD_PRODUCT_TO_CART_FIELDS.SIZE]: yup.number().required('Укажите размер'),
    [ADD_PRODUCT_TO_CART_FIELDS.COLOR]: yup.string().required('Укажите цвет').nullable(),
});
