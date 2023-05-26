import React from 'react';
import { generateRoute } from '@utils/helpers';
import { LinkText } from './style';
import { ROUTES } from '../../routes/constants';

const MobileMenu = () => <LinkText to={generateRoute(ROUTES.CATALOG)}>магазин</LinkText>;

export default MobileMenu;
