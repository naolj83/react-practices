import React, { useEffect, useState } from 'react';
import GuestbookForm from './GuestbookForm';
import GuestbookList from './GuestbookList';
import styles from './assets/scss/Guestbook.scss';
import update from 'react-addons-update';

export default function Guestbook() {
    const [list, setList] = useState([]);
    
    useEffect(async () => {
        try {
            const response = await fetch('/api', {
                method: 'get',
                mode: 'same-origin',
                header: {'Content-Type': 'application/json' },
                body: null
            });

            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);    
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);    
            }

            setList(json.data);

        } catch(err){
            console.err(err);
        }       
    }, []);

    const notify = {
        add: async function(name, password, message){
            try {
                const url = '/api/add';
                const item = {
                    no: null,
                    name: name,
                    password: password,
                    message: message,
                    done: false
                }

                const response = await fetch(url, {
                    method:'post',
                    mode: 'same-origin',
                    headers:{'Content-Type': 'application/json'},
                    body: JSON.stringify(item)
                });
    
                if(!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
    
                const json = await response.json();
                if(json.result !== 'success'){
                    throw new Error(`${json.result} ${json.message}`);
                }
                
                const newItem = [json.data].concat(item);

                setList(newItem);

                console.log(json.data);

            } catch(err){
                console.error(err);
            }
        }
    };


    return (
        <div className={styles.Guestbook}>
            <h1>방명록</h1>
            <GuestbookForm  notify={ notify } />
            <GuestbookList lists={list} notify={ notify } />
        </div>
    );
}