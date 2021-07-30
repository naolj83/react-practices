import React from 'react';
import GuestbookForm from './GuestbookForm';
import GuestbookList from './GuestbookList';
import lists from './assets/json/data.json';
import styles from './assets/scss/Guestbook.scss';

export default function Guestbook() {
    return (
        <div className={styles.Guestbook}>
            <h1>방명록</h1>
            <GuestbookForm />
            <GuestbookList lists = {lists}/>
        </div>
    );
}