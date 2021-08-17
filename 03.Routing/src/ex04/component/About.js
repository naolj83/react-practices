import React, { Fragment } from 'react';
import styles from '../assets/scss/component/About.scss';
import SiteLayout from '../layout/SiteLayout';

export default function About() {
    return(
        <Fragment>
            <SiteLayout>
                <div className={styles.About}>
                    <h2>About</h2>
                </div>
            </SiteLayout>
        </Fragment>
    );
}