import React, { ReactNode, FC } from 'react';
import { Icon } from '@components/Header/components/styled';

type Props = {
    icon: ReactNode;
};
const SocialMedia: FC<Props> = ({ icon }) => <Icon>{icon}</Icon>;

export default SocialMedia;
