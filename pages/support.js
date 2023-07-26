import Head from 'next/head';
import React from 'react';
import Support from '../components/in-kind-donations-page/support';

const SupportPage = () => {
    return (
        <>
            <Head>
                <title>Our work</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>
            <Support />
        </>
    );
};

export default SupportPage;
