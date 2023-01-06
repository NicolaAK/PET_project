import React, { FC, ReactNode } from 'react';
import { AboutCompanyWrapper } from './style';

type Props = {
    icon: ReactNode;
};

const SocialMedia: FC<Props> = ({ icon }) => <AboutCompanyWrapper>{icon}</AboutCompanyWrapper>;

export default SocialMedia;
