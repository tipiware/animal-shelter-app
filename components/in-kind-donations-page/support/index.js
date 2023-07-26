import React from 'react';
import { Paragraph, StyledLink } from '../../../styles/shared';
import InfoSection from '../../shared/InfoSection';
import Services from '../Services';

const Support = () => {
    return (
        <>
            <InfoSection title='We need your support!'>
                <Paragraph $maxWidth={1000}>
                We hope this message finds you well. At this animal shelter, we are dedicated to providing a safe and loving environment for abandoned, neglected, and homeless animals in our community. However, we cannot do this important work alone. We are reaching out to kind-hearted individuals like you to ask for your support in our mission to improve the lives of these innocent creatures. Your contribution will directly impact the well-being of these animals, providing them with essential care, medical attention, and the chance to find forever homes filled with love and compassion. Whether it's a one-time donation or becoming a regular sponsor, your generosity will make a significant difference in the lives of countless animals in need. We sincerely thank you for considering our cause and for being a voice for those who cannot speak for themselves. Together, we can create a brighter future for these deserving animals. Thank you for your support!                    
                <StyledLink href='/in-kind-donations#footer'>
                     contact us
                </StyledLink>
                </Paragraph>
            </InfoSection>
            <Services />
        </>
    );
};

export default Support;
