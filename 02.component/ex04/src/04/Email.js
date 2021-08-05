import React from 'react';

export default function Eamil({ firstName, lastName, email }) {
    return (
        <li>
            { `${ firstName }${ lastName }` }
            <br/>
            { email }
        </li>
    )
}