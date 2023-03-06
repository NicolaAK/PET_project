import * as yup from 'yup';

export enum ADD_ORDER_REGISTRATION_CART {
    NAME = 'name',
    SURNAME = 'surname',
    EMAIL = 'email',
    PHONE = 'phone',
    CITY = 'city',
    POSTOFFICE = 'postOffice',
    DELIVERY = 'delivery',
    PAYMENT = 'payment',
}
const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
export const orderRegistration = yup.object().shape({
    [ADD_ORDER_REGISTRATION_CART.NAME]: yup.string().required('Укажите имя'),
    [ADD_ORDER_REGISTRATION_CART.SURNAME]: yup.string().required('Укажите фамилию'),
    [ADD_ORDER_REGISTRATION_CART.EMAIL]: yup.string().required('Укажите почту').email('Некорректная электронная почта'),
    [ADD_ORDER_REGISTRATION_CART.PHONE]: yup
        .string()
        .required('Укажите номер телефона')
        .matches(phoneRegExp, 'Номер телефона указан не правильно'),
    [ADD_ORDER_REGISTRATION_CART.CITY]: yup.string().required('Укажите город'),
    [ADD_ORDER_REGISTRATION_CART.POSTOFFICE]: yup.string().required('Укажите отделение почты'),
    [ADD_ORDER_REGISTRATION_CART.DELIVERY]: yup.string().required('Укажите способ доставки'),
    [ADD_ORDER_REGISTRATION_CART.PAYMENT]: yup.string().required('Укажите способ оплаты'),
});
