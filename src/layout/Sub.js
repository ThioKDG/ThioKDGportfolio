import React from 'react';
import Sub1 from '../components/sub/Sub1';
import Sub2 from '../components/sub/Sub2';
import Header from './Header';

import '../components/sub/subStyles/subInner.scss'

function Sub() {
    return (
        <>
            <Header />
            <section className='subContainer'>
            </section>
        </>
    );
}

export default Sub;