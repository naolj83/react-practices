import React from 'react';
import './assets/css/App.css';
// css 모듈로 뽑아 쓰지 않음 -> Normal css

export default function App() {
        return (
            <div id='App'>
                <h1 className={ 'Header' }>{'Normal CSS (css-loader options{ modules: true })'}</h1>
            </div>
        );
}

