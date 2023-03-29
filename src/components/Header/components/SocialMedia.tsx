import React, { ReactNode, FC } from 'react';
import { Icon } from '@components/Header/components/style';

type Props = {
    icon: ReactNode;
    link: string;
};
const SocialMedia: FC<Props> = ({ icon, link }) => <Icon to={link}>{icon}</Icon>;

export default SocialMedia;
