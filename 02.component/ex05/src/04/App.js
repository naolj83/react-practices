import React, { useState } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [showClock, setShowClock] = useState(true); 

    return (
        <div className='clock-display'>
            <h2>Clock</h2>
            {
                showClock ?
                    <Clock callback={() => setShowClock(!showClock)} /> : null
            }
        </div>
    );
}