import * as yup from 'yup';

export enum ADD_ORDER_PROFILE {
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
    [ADD_ORDER_PROFILE.NAME]: yup.string().required('Укажите имя'),
    [ADD_ORDER_PROFILE.SURNAME]: yup.string().required('Укажите фамилию'),
    [ADD_ORDER_PROFILE.EMAIL]: yup.string().required('Укажите почту').email('Некорректная электронная почта'),
    [ADD_ORDER_PROFILE.PHONE]: yup
        .string()
        .required('Укажите номер телефона')
        .matches(phoneRegExp, 'Номер телефона указан не правильно'),
    [ADD_ORDER_PROFILE.CITY]: yup.string().required('Укажите город'),
    [ADD_ORDER_PROFILE.POSTOFFICE]: yup.string().required('Укажите отделение почты'),
    [ADD_ORDER_PROFILE.DELIVERY]: yup.string().required('Укажите способ доставки'),
    [ADD_ORDER_PROFILE.PAYMENT]: yup.string().required('Укажите способ оплаты'),
});
