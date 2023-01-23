import { Button } from '@components/Button';
import React, { useState } from 'react';
import {
    Item,
    SubscriptionContent,
    SubscriptionContainer,
    Text,
    ButtonBox,
} from '@components/Main/Subscription/styled';
import Input from '@components/Input';
const Subscription = () => {
    const [state, setState] = useState('');
    return (
        <SubscriptionContainer>
            <SubscriptionContent>
                <Item>Узнайте первым о новинках</Item>
                <Input value={state} onChange={setState} />
                <ButtonBox>
                    <Button color="primary" width={600}>
                        ОТПРАВИТЬ
                    </Button>
                </ButtonBox>
                <Text>
                    Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а)
                    с условиями конфиденциальности.
                </Text>
            </SubscriptionContent>
        </SubscriptionContainer>
    );
};

export default Subscription;
