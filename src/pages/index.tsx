import React from 'react';
import { PagesContainer } from './styles';
import Header from '../components/Header';
import Routes from '../routes';
import Footer from '../components/Footer';

const Pages = () => (
    <PagesContainer>
        <Header />
        <Routes />
        <Footer />
    </PagesContainer>
);

export default Pages;
