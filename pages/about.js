import Head from 'next/head';
import React from 'react';
import AboutCircle from '../components/about-circle-page/AboutCircle';

const AboutCirclePage = () => {
    return (
        <>
            <Head>
                <title>Our Mission</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>
            <AboutCircle />
        </>
    );
};

export default AboutCirclePage;
