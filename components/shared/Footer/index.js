import Link from 'next/link';
import React from 'react';
import { MaxWidthContainer } from '../../../styles/shared';
import * as S from './style';

const links = [
    {
        path: '/',
        text: 'Home',
    },
    {
        path: '/founders-circle',
        text: 'Founders Circle',
    },
    {
        path: '/in-kind-donations',
        text: 'In-Kind Donations',
    },
];

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <S.StyledFooter id='footer'>
                <MaxWidthContainer>
                    <S.Logo src='/assets/pet.jpg' />
                    <S.Logo src='/assets/pet2.jpg' />
                    <S.Logo src='/assets/pet3.jpg' />
                    <S.FlexContainer>
                        <S.LinkContainer>
                            <S.StyledLink>
                                <a href='mailto:theingrams@thecastle603.com'>
                                    info@gmail.com
                                </a>
                            </S.StyledLink>
                            <S.StyledLink>
                                <a href='tel:+60123456789'>+60123456789</a>
                            </S.StyledLink>
                            <S.StyledLink>
                            <a href='tel:+60123456789'>+60123456789</a>
                            </S.StyledLink>
                        </S.LinkContainer>
                    </S.FlexContainer>
                    <S.SocialMediaLinks>
                        <li>
                            <a
                                href=''
                                target='_blank'
                                rel='noreferrer'
                            >
                                <S.Instagram />
                            </a>
                        </li>
                        <li>
                            <a
                                href=''
                                target='_blank'
                                rel='noreferrer'
                            >
                                <S.LinkedIn />
                            </a>
                        </li>
                        <li>
                            <a
                                href=''
                                target='_blank'
                                rel='noreferrer'
                            >
                                <S.Twitter />
                            </a>
                        </li>
                        <li>
                            <a
                                href=''
                                target='_blank'
                                rel='noreferrer'
                            >
                                <S.Facebook />
                            </a>
                        </li>
                    </S.SocialMediaLinks>
                </MaxWidthContainer>
            </S.StyledFooter>
            <S.Copyright>
                Copyright is all rights reserved. Creative Commons is some rights reserved
            </S.Copyright>
        </>
    );
};

export default Footer;
