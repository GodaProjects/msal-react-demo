import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";

import App from './App';

// My changes
import {PublicClientApplication} from '@azure/msal-browser'

const pca = new PublicClientApplication({
    auth: {
        clientId: '2b53c05e-ea15-4229-951e-8e968bf28b9d',
        authority: 'https://login.microsoftonline.com/05a9b8a4-ccef-4246-9ff6-234ef22c349c/oauth2/v2.0/authorize',
        redirectUri: '/' 
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App msalInstance={pca}/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
