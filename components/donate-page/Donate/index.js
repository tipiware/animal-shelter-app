import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';
import {
    MaxWidthContainer,
    Paragraph,
    SectionHeader,
} from '../../../styles/shared';
import PayPal from '../PayPal';
import * as S from './style';

const initialOptions = {
    'client-id':'ASd7d570efVT-Pg8pagXL88uI34As7qwWe8TgWukwIET8qfjBu2vX_WiCY6qFRLpsArz9PRoH8Rh3QB_',
    currency: 'USD',
    intent: 'capture',
};

const Donate = () => {
    return (
        <PayPalScriptProvider options={initialOptions}>
            <S.DonateContainer>
                <MaxWidthContainer>
                    <S.ContentContainer>
                        <S.Info>
                            <SectionHeader>Donate to animal shelter</SectionHeader>
                            <Paragraph>
                            As an animal shelter dedicated to providing a safe haven for abandoned and neglected animals, we urgently need your financial support to continue our vital mission. Please consider making a donation today to help us care for these innocent creatures and give them a chance at a better life. Your contribution will make a significant difference in the well-being of our furry residents.
                            </Paragraph>
                        </S.Info>
                        <PayPal />
                    </S.ContentContainer>
                </MaxWidthContainer>
            </S.DonateContainer>
        </PayPalScriptProvider>
    );
};

export default Donate;
