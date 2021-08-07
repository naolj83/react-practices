import React from 'react';
import './assets/scss/Numbers.scss';

export default function Number({ clock }) {
    return (
        <div className={ 'numbers' }>
            <p>{ clock }</p>
            <p className="placeholder"></p>
        </div>
    );
}
