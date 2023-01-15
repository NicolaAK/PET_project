import React, { ReactNode, FC } from 'react';
import { AboutCompanyWrapper } from '@components/Header/components/styled';

type Props = {
    icon: ReactNode;
};
const SocialMedia: FC<Props> = ({ icon }) => <AboutCompanyWrapper>{icon}</AboutCompanyWrapper>;

export default SocialMedia;
