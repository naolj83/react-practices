import React from 'react';
import GuestbookForm from './GuestbookForm';
import GuestbookList from './GuestbookList';
import lists from './data.json';

export default function Guestbook() {
    return (
        <div className='Guestbook'>
            <h1>방명록</h1>
            <GuestbookForm />
            <GuestbookList lists = {lists}/>
        </div>
    );
}