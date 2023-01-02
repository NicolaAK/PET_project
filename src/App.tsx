import React from 'react';
// theme
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import Pages from './pages';
import GlobalStyle from './globalStyles/GlobalStyle';

// ----------------------------------------------------------------------

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
            <Pages />
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
