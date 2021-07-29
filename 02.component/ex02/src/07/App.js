import React from 'react';
import styles from './assets/scss/App.scss';
// css 모듈로 뽑아 쓰지 않음 -> Normal css

export default function App() {
        return (
            <div className={styles.App}>
                <h1 className={styles.Header}>SASS & SCSS</h1>
            </div>
        );
}

