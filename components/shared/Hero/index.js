import { useRouter } from 'next/router';
import React from 'react';
import useViewportWidth from '../../../hooks/useViewportWidth';
import NavBar from '../NavBar';
import * as S from './style';

const Hero = () => {
    const width = useViewportWidth();
    const { pathname } = useRouter();
    const title = getTitle(pathname);

    function getTitle(pathname) {
        switch (pathname) {
            case '/':
                let title = (
                    <>
                        A shelter<br /> for
                        Abandoned Animal
                    </>
                );

                if (width && width < 850) {
                    title =
                        'A shelter for Abandoned Animal';
                }
                return title;
            case '/mission':
                return 'OUR MISSION';
            case '/support':
                return 'SUPPORT US';
            case '/about':
                return 'ABOUT US';
            default:
                return 'Page Not Found';
        }
    }

    return (
        <S.Container>
            <NavBar withHeroImage />
            <S.TitleContainer>
                <S.Title>{title}</S.Title>
                <S.Decoration
                    src='/assets/decoration.svg'
                    alt='Decorative element.'
                />
            </S.TitleContainer>
        </S.Container>
    );
};

export default Hero;
