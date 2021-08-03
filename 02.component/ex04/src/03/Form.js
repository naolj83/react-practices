import React, { useRef, useState } from 'react';
import './assets/Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';



export default function Form() {
    function onSubmit(e) {
        e.preventDefault();
        console.log(e.target.email.value, ":", e.target.password.value);
    }

    return (
        <form 
            id="loginForm" 
            name="loginForm" 
            method="post" 
            action="/do/not/post"
            onSubmit={ onSubmit }>
            <label htmlFor="email">이메일</label>
            <input 
                id="email" 
                name="email" 
                type="text" />

            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" />

            <input type="submit" value="로그인" />
        </form>
    );
}