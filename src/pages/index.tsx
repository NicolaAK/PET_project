import React from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { PagesContainer } from './styles';
import Routes from '../routes';

const Pages = () => (
    <PagesContainer>
        <Header />
        <Routes />
        <Footer />
    </PagesContainer>
);

export default Pages;
