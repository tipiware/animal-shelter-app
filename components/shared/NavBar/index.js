import Link from 'next/link';
import React from 'react';
import useViewportWidth from '../../../hooks/useViewportWidth';
import MobileNav from '../MobileNav';
import * as S from './style';

const NavBar = ({ withHeroImage }) => {
    const width = useViewportWidth();

    if (width && width < 825) {
        return <MobileNav withHeroImage={withHeroImage} />;
    }

    return (
        <S.Nav>
            <S.InnerContainer>
                {withHeroImage ? (
                    <Link legacyBehavior href='/'>
                            <S.Logo src='/assets/word.png' />
                    </Link>
                ) : (
                    <Link legacyBehavior href='/'>
                            <S.Logo src='/assets/word.png' />
                    </Link>
                )}
                <S.LinkContainer>
                    <S.RegularLinks $dark={!withHeroImage}>
                        <Link legacyBehavior href='/'>
                            Home
                        </Link>
                        <Link legacyBehavior href='/mission'>
                            mission
                        </Link>
                        <Link legacyBehavior href='/support'>
                            Support
                        </Link>
                        <Link legacyBehavior href='/about'>
                            About us
                        </Link>
                    </S.RegularLinks>
                    <S.DonateLink>
                        <Link legacyBehavior href='/donate'>
                        Donate Now
                        </Link>
                    </S.DonateLink>
                </S.LinkContainer>
            </S.InnerContainer>
        </S.Nav>
    );
};

export default NavBar;
