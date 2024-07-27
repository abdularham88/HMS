import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Login from './Login';
import './Index.css'
import Navigation from './Navigation'
import Register from './Register';
import Forgot from './Forgot';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
             <App/> 
    </React.StrictMode>
);
