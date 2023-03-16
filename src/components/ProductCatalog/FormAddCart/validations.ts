import * as yup from 'yup';

export enum ADD_PRODUCT_TO_CART_FIELDS {
    SIZE = 'size',
}

export const addProductToCart = yup.object().shape({
    [ADD_PRODUCT_TO_CART_FIELDS.SIZE]: yup.number().required('Укажите размер'),
});
