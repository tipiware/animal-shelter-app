import React from 'react';
import { Paragraph } from '../../../styles/shared';
import InfoSection from '../../shared/InfoSection';
import Levels from './Levels';

const DonationsCircle = () => {
    return (
        <>
            <InfoSection title='Mission'>
                <Paragraph>
                Animal shelters are buildings or areas devoted to the temporary care and shelter of homeless or unwanted animals. Nearly every city in the United States has at least one animal shelter. Shelters require numerous employees and volunteers, and must follow various state and local laws and regulations.
                </Paragraph>
                <Paragraph>
                Uncontrolled breeding and irresponsible pet owners have resulted in a serious pet overpopulation problem, and drastic measures are needed to curb the ever-increasing number of stray homeless dogs and cats. Shelters are necessary to deal with the repercussions of pet overpopulation. And although they do not treat or stop the problem of unwanted pets, they do help to decrease the spread of disease as well as the risk of injuries such as bites or scratches from these stray animals, living on the edge of survival.
                </Paragraph>
                <Paragraph>
                Since many shelters function as non-profit entities, they rely on donations and gifts, as well as adoption fees, to function. Any donation, whether food, newspapers or even your time, would be greatly appreciated. Contact your local animal shelter if you would like to make a donation or volunteer.
                </Paragraph>
            </InfoSection>
            <Levels />
        </>
    );
};

export default DonationsCircle;
