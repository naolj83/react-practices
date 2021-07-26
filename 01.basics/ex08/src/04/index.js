import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(
    // <App/> 
    React.createElement(App, null),
    document.getElementById('root'));
