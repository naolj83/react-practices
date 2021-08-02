import React from 'react';
import GuestbookItem from './GuestbookItem';
import styles from './assets/scss/GuestbookList.scss';
import PropTypes from 'prop-types';


export default function GuestbookList({lists}) {
        return (
            <ul className={styles.Guestbook__List}>
            {lists.map(list => <GuestbookItem
                                    key={list.no}
                                    name={list.name}
                                    message={list.message}
                                    regDate={list.regDate}/>)}
            </ul>
        );
}

GuestbookList.propTypes = {
    lists: PropTypes.arrayOf(PropTypes.object).isRequired
}
