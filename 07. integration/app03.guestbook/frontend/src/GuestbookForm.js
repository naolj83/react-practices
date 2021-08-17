import React, { useState } from 'react';
import styles from './assets/scss/GuestbookForm.scss';

export default function GuestbookForm() {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState();

 
        return (
            <form className={styles.Guestbook__Form} action="/api/add" method="post">
                <input type="text" name="name" id="name" placeholder="이름" value={ name } onChange={ () => setName() } /><br/>
                <input type="password" name="password" id="password" placeholder="비밀번호" value={ password } onChange={ () => setPassword() } /><br/>
                <textarea id="message" name="message" placeholder="내용을 입력해 주세요." value={ message } onChange={ () => setMessage() }></textarea><br/>
                <input type="submit" value="보내기" />
            </form>
        );
}
