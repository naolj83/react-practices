import React, { Fragment } from 'react';
import styles from '../assets/scss/component/Gallery.scss';
import SiteLayout from '../layout/SiteLayout';

export default function Main() {
    return(
        <Fragment>
            <SiteLayout>
                <div className={styles.Gallery}>
                    <h2>Gallery</h2>
                </div>
            </SiteLayout>
        </Fragment>
    );
}