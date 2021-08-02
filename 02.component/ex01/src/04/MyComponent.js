import { PropTypes } from 'prop-types';
import React, { Fragment } from 'react';

export default function MyComponent({ props01 }) {
    return (
        <Fragment>
            <h2>Property Validation</h2>
            <span>props01: { props01 ? props01 : '---not set---' }</span>
        </Fragment>
    );
}

MyComponent.propTypes = {
    // [Built-in propTypes Validation: primitives]
    props01: PropTypes.string
}