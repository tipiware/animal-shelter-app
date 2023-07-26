import React from 'react';
import useViewportWidth from '../../../hooks/useViewportWidth';
import { MaxWidthContainer } from '../../../styles/shared';
import * as S from './style';

const Services = () => {
    const width = useViewportWidth();

    if (!width) {
        return null;
    }

    if (width < 600) {
        return (
            <S.MobileServicesContainer>
                {services.map((s) => (
                    <S.MobileService key={s.text}>{s.text}</S.MobileService>
                ))}
            </S.MobileServicesContainer>
        );
    }

    return (
        <MaxWidthContainer>
            <S.DesktopServicesContainer>
                {services.map((s) => (
                    <S.DesktopService key={s.text}>
                        <img src={s.src} alt={`Service: ${s.text} `} />
                        <figcaption>{s.text}</figcaption>
                    </S.DesktopService>
                ))}
            </S.DesktopServicesContainer>
        </MaxWidthContainer>
    );
};

const services = [
    {
        text: 'We rescue abandoned pet from street, etc',
        src: '/assets/work/rescue.jpg',
    },
    {
        text: 'We provide treatment to sick animals ',
        src: '/assets/work/veterinary.jpg',
    },
    {
        text: 'We have pet for people to adopt',
        src: '/assets/work/adoption.jpg',
    },
    {
        text: 'We provide shelther to abondoned animal',
        src: '/assets/work/shelther.jpg',
    },
];

export default Services;
