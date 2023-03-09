import * as yup from 'yup';

export enum ADD_ORDER_PROFILE {
    NAME = 'name',
    SURNAME = 'surname',
    EMAIL = 'email',
    PHONE = 'phone',
    ADDRESS = 'address',
    HOUSE = 'house',
}
const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
export const profileInfoСheck = yup.object().shape({
    [ADD_ORDER_PROFILE.NAME]: yup.string(),
    [ADD_ORDER_PROFILE.SURNAME]: yup.string(),
    [ADD_ORDER_PROFILE.EMAIL]: yup.string().email('Некорректная электронная почта'),
    [ADD_ORDER_PROFILE.PHONE]: yup.string().matches(phoneRegExp, 'Номер телефона указан не правильно'),
    [ADD_ORDER_PROFILE.ADDRESS]: yup.string(),
    [ADD_ORDER_PROFILE.HOUSE]: yup.string(),
});
