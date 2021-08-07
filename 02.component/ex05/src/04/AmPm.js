import React from 'react';
import './assets/scss/AmPm.scss';

export default function AmPm({ session }) {
    return (
        <div className="AmPm">
            <div>
                <p className={ session === 'am' ? 'on' : 'off' }>am</p>
            </div>
            <div>
                <p className={ session === 'pm' ? 'on' : 'off' }>pm</p>
            </div>
        </div>
    );
}

