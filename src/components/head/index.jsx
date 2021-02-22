import Head from 'next/head';
import React from 'react';

const HeadComponent = (props) => (
    <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <link rel="preload" href="/fonts/Roboto/Roboto-Regular.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Roboto/Roboto-Light.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/ReggaeOne/ReggaeOne-Regular.ttf" as="font" crossOrigin="" />
    </Head>
);

export default HeadComponent;