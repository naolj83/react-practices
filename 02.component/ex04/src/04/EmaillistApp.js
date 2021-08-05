import React, { useState } from 'react';
import SearchBar from './Searchbar';
import Emaillist from './Emaillist';
import data from './assets/json/data.json';

export default function EmaillistApp() {
    const [emails] = useState(data);

    return (
        <div className={ 'EmaillistApp' }>
            <SearchBar />
            <Emaillist emails={ emails }/>
        </div>
    );
}