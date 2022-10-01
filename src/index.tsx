import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SearchLogger } from './containers/Logger';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './config/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<SearchLogger />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
