import React from 'react';
import GuestbookItem from './GuestbookItem';
import lists from './data.json';

export default function GuestbookList() {
        return (
            <ul className="Guestbook__List">
            {lists.map(list => <GuestbookItem
                                    key={list.no}
                                    name={list.name}
                                    message={list.message}
                                    regDate={list.regDate}/>)}
            </ul>
        );
}
