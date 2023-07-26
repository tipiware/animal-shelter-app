import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import * as S from './style';

const MobileNav = ({ withHeroImage }) => {
    const [open, setOpen] = useState(false);
    const { pathname } = useRouter();

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    const onLinkClick = (clickedPath) => {
        if (clickedPath === pathname) {
            setOpen(false);
        }
    };

    if (open) {
        return (
            <S.OpenNav>
                <S.InnerContainer>
                    <Link legacyBehavior href='/'>
                        <a onClick={() => onLinkClick('/')}>
                            <S.Logo src='/assets/word.png' />
                        </a>
                    </Link>
                    <S.MenuButton onClick={() => setOpen(false)}>
                        <S.Close />
                    </S.MenuButton>
                </S.InnerContainer>
                <S.LinkContainer>
                    <Link legacyBehavior href='/'>
                        <a onClick={() => onLinkClick('/')}>Home</a>
                    </Link>
                    <Link legacyBehavior href='/mission'>
                        <a onClick={() => onLinkClick('/mission')}>
                            Mission
                        </a>
                    </Link>
                    <Link legacyBehavior href='/support'>
                        <a onClick={() => onLinkClick('/support')}>
                            Support
                        </a>
                    </Link>
                    <Link legacyBehavior href='/about'>
                        <a onClick={() => onLinkClick('/support')}>
                            About us
                        </a>
                    </Link>
                </S.LinkContainer>
                <S.DonateLink>
                    <Link legacyBehavior href='/donate'>
                        <a onClick={() => onLinkClick('/donate')}>Donate Now</a>
                    </Link>
                </S.DonateLink>
            </S.OpenNav>
        );
    }

    return (
        <S.ClosedNav>
            {withHeroImage ? (
                <Link legacyBehavior href='/'>
                    <a>
                        <S.Logo src='/assets/word.png' />
                    </a>
                </Link>
            ) : (
                <Link legacyBehavior href='/'>
                    <a>
                        <S.Logo src='/assets/word.png' />
                    </a>
                </Link>
            )}
            <S.MenuButton onClick={() => setOpen(true)}>
                <S.Burger $dark={!withHeroImage} />
            </S.MenuButton>
        </S.ClosedNav>
    );
};

export default MobileNav;
