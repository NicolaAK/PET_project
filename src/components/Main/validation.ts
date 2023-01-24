import * as yup from 'yup';

export enum SUBSCRIBE_FORM_FIELDS {
    EMAIL = 'email',
}

export const subscribeNewsSchema = yup.object().shape({
    [SUBSCRIBE_FORM_FIELDS.EMAIL]: yup
        .string()
        .required('Укажите электронную почту')
        .email('Некорректная электронная почта'),
});
