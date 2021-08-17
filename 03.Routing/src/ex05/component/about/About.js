import React, { Fragment } from 'react';
import { Route } from 'react-router';
import SiteLayout from '../../layout/SiteLayout';
import Navigation from '../about/Navigation';
import Me from '../about/Me';
import Location from '../about/Location';

export default function About() {
    return(
        <Fragment>
            <SiteLayout>
                <Route component={Navigation} />
                <Route path={'/about/me'} component={Me} />
                <Route path={'/about/location'} component={Location} />
            </SiteLayout>
        </Fragment>
    );
}