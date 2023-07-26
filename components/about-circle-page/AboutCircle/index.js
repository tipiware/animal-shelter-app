import React from 'react';
import { Paragraph } from '../../../styles/shared';
import InfoSection from '../../shared/InfoSection';

const AboutCircle = () => {
    return (
        <>
            <InfoSection title='Our Open Letter'>
                <Paragraph>Dear Sir/Madam,</Paragraph>
                <Paragraph>
                Welcome to our Animal Shelter website! At our animal shelter, we are on a mission to provide a loving and safe haven for abandoned, abused, and neglected animals. With a deep passion for animal welfare, we strive to be the voice for those who cannot speak for themselves and work tirelessly to make a positive impact on their lives.
                </Paragraph>
                <Paragraph>
                Our shelter also conducts educational outreach programs, engaging with the community to raise awareness about animal welfare, the importance of spaying/neutering, and the benefits of adoption. By fostering a compassionate and informed society, we hope to reduce the number of homeless animals and create a more caring community for all creatures.
                </Paragraph>
                <Paragraph>
                As a non-profit organization, we rely on the generous support of animal lovers like you. Your donations, whether monetary or in the form of supplies, enable us to provide quality care to our residents and continue our vital work in rescuing and rehabilitating animals in need.
                </Paragraph>
                <Paragraph>
                Thank you for visiting our website and for your interest in supporting our cause. Together, we can make a difference in the lives of these beautiful animals and create a brighter future for all living beings. Feel free to explore our website further to learn more about our adoption process, volunteer opportunities, and ways you can help us in our mission.
                </Paragraph>
            </InfoSection>
        </>
    );
};

export default AboutCircle;
