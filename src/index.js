import React from "react";
import ReadDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from "./contexts/ContextProvider";

ReadDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('root')
);