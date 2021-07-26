import React, { Fragment } from 'react';
import Header from './Header';
import Content from './Content';

export default function(){
    return (
        <Fragment>
            <Header name='App03' />
            <Content />
        </Fragment>
    );
}





// <Fragment>
// <Header name='Application03' heigth='10' />
// <Content />
// </Fragment>

// =>
// React.createElement(Fragment, null, 
//     React.createElement(Header, {name: "Application03", heigth: "10"}), 
//     React.createElement(Content, null));