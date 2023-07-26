import { CgClose } from 'react-icons/cg';
import { RiMenu4Fill } from 'react-icons/ri';
import styled from 'styled-components';
import { cookieFont, mulishFont, uppercase } from '../../../styles/shared';

export const ClosedNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
`;

export const OpenNav = styled.nav`
    display: block;
    padding: 1rem 1.5rem 2rem;
    background: var(--purple-1);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
`;

export const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    width: 103px;
    height: 30px;
`;

export const MenuButton = styled.button``;

export const Burger = styled(RiMenu4Fill)`
    color: ${(props) => (props.$dark ? 'var(--purple-4)' : 'var(--white)')};
    font-size: 3rem;
`;

export const Close = styled(CgClose)`
    font-size: 3rem;
    color: var(--purple-4);
`;

export const LinkContainer = styled.section`
    ${cookieFont}
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    font-size: 2.5rem;
`;

export const DonateLink = styled.div`
    margin-top: 4rem;

    a {
        ${uppercase}
        ${mulishFont};
        background: var(--purple-4);
        color: var(--white);
        border-radius: 99px;
        padding: 0.75rem 1.125rem;
    }
`;
