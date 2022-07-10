import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from './common/theme';
import { store } from './common/store';
import ScrollToTop from './components/UI/organisms/ScrollTop';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ScrollToTop/>
                <App />
            </ThemeProvider>
        </Provider>
    </BrowserRouter>
);

