import React from 'react';

export default function() {
    const date = new Date();

    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return (
        <div>
            {('0' + (hour > 12 ? hour-12 : hour)).slice(-2)} 
            : 
            {('0' + minutes).slice(-2)} 
            : 
            {('0' + seconds).slice(-2)}
            {hour > 12 ? 'PM' : 'AM'}
        </div>
    )
}

// createElement('div', null, '09', ':', '19', ':', '18', 'AM')
// 파라미터로 들어가다 보니까 파싱할 때 공백 무시