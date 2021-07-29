import React from 'react';
import styles from './assets/css/GuestbookForm.css';

export default function GuestbookForm() {
        return (
            <form className={styles.Guestbook__Form}>
                <input type="text" id="input-name" placeholder="이름" /><br/>
                <input type="password" id="input-password" placeholder="비밀번호" /><br/>
                <textarea id="tx-content" placeholder="내용을 입력해 주세요."></textarea><br/>
                <input type="submit" value="보내기" />
            </form>
        );
}
