import React from 'react';
// theme
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@store';
import theme from './theme';
import Pages from './pages';
import GlobalStyle from './globalStyles/GlobalStyle';

// ----------------------------------------------------------------------

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
                <Pages />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
);

export default App;
