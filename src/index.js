import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//These are imports for React-MDL
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

//These are imports for React-Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//This is the import for React Router
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    //react router uses this BrowserRouter component to make my app aware of navigation
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
