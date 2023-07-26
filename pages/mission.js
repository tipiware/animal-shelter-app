import Head from 'next/head';
import React from 'react';
import DonationCircle from '../components/donations-circle-page/DonationsCircle';

const DonationsCirclePage = () => {
    return (
        <>
            <Head>
                <title>Our Mission</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>
            <DonationCircle />
        </>
    );
};

export default DonationsCirclePage;
