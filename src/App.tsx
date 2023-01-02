import React from 'react';
// theme
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Pages from './pages';
import GlobalStyle from './globalStyles/GlobalStyle';

// ----------------------------------------------------------------------

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Pages />
    </ThemeProvider>
);

export default App;
