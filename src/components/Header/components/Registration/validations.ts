import * as yup from 'yup';

export enum ADD_REGISTRATION {
    EMAIL = 'email',
    PASSWORD = 'password',
}
export const registrationCheck = yup.object().shape({
    [ADD_REGISTRATION.EMAIL]: yup.string().required('Укажите почту'),
    [ADD_REGISTRATION.PASSWORD]: yup.string().required('Укажите пароль'),
});
