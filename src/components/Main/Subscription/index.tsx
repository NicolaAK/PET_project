import { Button } from '@components/Button';
import React from 'react';
import {
    Item,
    SubscriptionContent,
    SubscriptionContainer,
    Text,
    ButtonBox,
} from '@components/Main/Subscription/styled';
import Input from '@components/Input';
const Subscription = () => (
    <SubscriptionContainer>
        <SubscriptionContent>
            <Item>Узнайте первым о новинках</Item>
            <Input />
            <ButtonBox>
                <Button color="primary" width={600}>
                    ОТПРАВИТЬ
                </Button>
            </ButtonBox>
            <Text>
                Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с
                условиями конфиденциальности.
            </Text>
        </SubscriptionContent>
    </SubscriptionContainer>
);

export default Subscription;
