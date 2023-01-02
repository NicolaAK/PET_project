import React, { FC, ReactNode } from 'react';
import { ButtonMenuTitle, ButtonMenuWrapper } from './styles';

type Props = {
    label: string;
    icon: ReactNode;
};

const ButtonMenu: FC<Props> = ({ label, icon }) => {
    console.log('sdfsdf');
    return (
        <ButtonMenuWrapper>
            {icon}
            <ButtonMenuTitle>{label}</ButtonMenuTitle>
        </ButtonMenuWrapper>
    );
};

export default ButtonMenu;
