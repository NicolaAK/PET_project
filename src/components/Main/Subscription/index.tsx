import { Button } from '@components/ReusedComponents/Button/index';
import React from 'react';
import { Item, SubscriptionContent, SubscriptionContainer, Text, ButtonBox } from '@components/Main/Subscription/style';
import { useForm, FormProvider } from 'react-hook-form';
import RHFInput from '@components/RHF/RHFInput';
import { SUBSCRIBE_FORM_FIELDS, subscribeNewsSchema } from '@components/Main/validation';
import { yupResolver } from '@hookform/resolvers/yup';

interface ISubscribeForm {
    [SUBSCRIBE_FORM_FIELDS.EMAIL]: string;
}

const Subscription = () => {
    const methods = useForm<ISubscribeForm>({
        resolver: yupResolver(subscribeNewsSchema),
    });

    const {
        formState: { isSubmitting },
        handleSubmit,
    } = methods;

    const onSubmit = async (formValues: ISubscribeForm) => {
        // eslint-disable-next-line no-console
        console.log(formValues);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <SubscriptionContainer>
                    <SubscriptionContent>
                        <Item>Узнайте первым о новинках</Item>
                        <RHFInput
                            name={SUBSCRIBE_FORM_FIELDS.EMAIL}
                            width={600}
                            type="email "
                            placeholder="Ваш e-mail*"
                        />
                        <ButtonBox>
                            <Button isLoading={isSubmitting} color="primary" width={600}>
                                ОТПРАВИТЬ
                            </Button>
                        </ButtonBox>
                        <Text>
                            Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и
                            ознакомлен(а) с условиями конфиденциальности.
                        </Text>
                    </SubscriptionContent>
                </SubscriptionContainer>
            </form>
        </FormProvider>
    );
};

export default Subscription;
