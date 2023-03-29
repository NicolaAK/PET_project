import * as yup from 'yup';

export enum ADD_REGISTRATION {
    EMAIL = 'email',
    PASSWORD = 'password',
}
export const registrationCheck = yup.object().shape({
    [ADD_REGISTRATION.EMAIL]: yup.string().email('Некорректная электронная почта'),
    [ADD_REGISTRATION.PASSWORD]: yup.string(),
});
