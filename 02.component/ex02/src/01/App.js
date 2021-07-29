import React from 'react';

export default function App() {
    const h1Styles = {
        width: 200,
        heigth: 50,
        padding: 5,
        color: '#FF8080',
        backgroundColor: '#FFFFE0'
    };
        return (
            <div id='App'>
                <h1 style={ h1Styles }>Inline Styling</h1>
            </div>
        );
}

