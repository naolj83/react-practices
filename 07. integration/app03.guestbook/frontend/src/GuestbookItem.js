import React, { Fragment } from 'react';
import styles from './assets/scss/GuestbookItem.scss';
import PropTypes from 'prop-types';

export default function GuestbookItem({name, message }) {
        return (
                <li className={styles.Guestbook__List__Item}>
                    <strong>{name}</strong>
                    <p>
                { message && message.split('\n').map((line, index) => index > 0 ?
                    <Fragment key={ index }>
                        <br/>
                        { line }
                    </Fragment> : line) }
            </p>

                    <a href=''>삭제</a>
                </li>
        );
}

GuestbookItem.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
}