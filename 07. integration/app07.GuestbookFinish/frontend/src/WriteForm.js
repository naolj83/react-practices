import React, {useRef} from 'react';
import styles from './assets/scss/WriteForm.scss';

export default function WriteForm({notifyMessage}) {
    const refForm = useRef(null);

    const handleSubmit = function (e) {
        e.preventDefault();
        try {
            const newMessage = Array    // Array.from은 객체로 만들어줌
                .from(e.target, (input) => {
                    // simple validatation of empty string
                    if (input.value === '') {
                        throw `validation ${input.placeholder} is empty ''`;    // 비었으면 에러로 던지는게 편함
                    }
                    return {n: input.name, v: input.value};
                })
                .filter(({n}) => n !== '')
                .reduce((res, {n, v}) => {
                    res[n] = v;
                    return res;
                }, {});

            refForm.current.reset();    // writefrom 다시 쓸 수 있게 빈 칸으로 만들어줌
            notifyMessage.add(newMessage);
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <form
            ref={refForm}
            onSubmit={handleSubmit}
            className={styles.WriteForm}>
            <input
                type={'text'}
                name={'name'}
                placeholder={'이름'}
                autoComplete={' off'}/>
            <input
                type={'password'}
                name={'password'}
                placeholder={'비밀번호'}
                autoComplete={'off'}/>
            <textarea
                name={'message'}
                placeholder={'메세지(내용)'}/>
            <input
                type={'submit'}
                value={'보내기'}
                autoComplete={'off'}/>
        </form>
    );
}