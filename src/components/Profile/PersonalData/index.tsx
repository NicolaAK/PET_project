import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import RHFInput from '@components/RHF/RHFInput';
import { Button } from '@components/ReusedComponents/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { ADD_ORDER_PROFILE, profileInfoСheck } from '@components/Profile/PersonalData/validations';
import { Title, GroupOne, GroupTwo, Container } from './style';

const profileInfo = [
    {
        name: 'Елизаветта',
        surname: 'Станиславчук',
        mail: 'ella.s97@gmail.com',
        phone: '8(067)470 20 66',
        address: 'Черновцы',
        house: '№4',
    },
];

const PersonalData = () => {
    const methods = useForm({ resolver: yupResolver(profileInfoСheck) });
    const { handleSubmit } = methods;
    // eslint-disable-next-line
    const onSubmit = (personalData: any) => console.log('PersonalData', personalData);
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {profileInfo.map((info) => (
                    <Container key={info.mail}>
                        <Title>Персональные данные:</Title>
                        <GroupOne>
                            <RHFInput name={ADD_ORDER_PROFILE.NAME} placeholder={info.name || 'Имя'} />
                            <RHFInput name={ADD_ORDER_PROFILE.SURNAME} placeholder={info.surname || 'Фамилия'} />
                            <RHFInput name={ADD_ORDER_PROFILE.EMAIL} placeholder={info.mail || 'E-mail'} />
                            <RHFInput name={ADD_ORDER_PROFILE.PHONE} placeholder={info.phone || 'Телефон'} />
                        </GroupOne>
                        <Title>Адрес доставки:</Title>
                        <GroupTwo>
                            <RHFInput name={ADD_ORDER_PROFILE.ADDRESS} placeholder={info.address || 'Адрес'} />
                            <RHFInput name={ADD_ORDER_PROFILE.HOUSE} placeholder={info.house || 'Номер дома'} />
                        </GroupTwo>
                    </Container>
                ))}

                <Button>ОБНОВИТЬ ИНФОРМАЦИЮ</Button>
            </form>
        </FormProvider>
    );
};

export default PersonalData;
