import Head from 'next/head';
import React from 'react';

const HeadComponent = (props) => (
    <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
    </Head>
);

export default HeadComponent;