import React, { useState } from 'react';
import { InputContainer, InputContent } from '@components/Input/styled';

const Input = () => {
    const [state, setState] = useState('');
    return (
        <InputContainer>
            <InputContent
                value={state}
                onChange={(e) => setState(e.target.value)}
                type="text"
                placeholder="Ваш e-mail*"
            />
        </InputContainer>
    );
};
export default Input;
