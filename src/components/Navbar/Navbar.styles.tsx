import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { RiHome5Fill, RiSearchLine } from 'react-icons/ri';

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
`;

export const NavbarContainer = styled.nav`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px 32px;
    position: fixed;
    min-width: 280px;
    height: 74px;
    bottom: 22px;
    background: #e3ebe2;
    border: 1px solid #dde5e9;
    box-shadow: 0px 26px 17px rgba(128, 174, 152, 0.87);
    backdrop-filter: blur(10.5px);
    border-radius: 20px;
    z-index: 5;
`;

export const NavLinks = styled(NavLink)`
    color: #2b8872;
    &.active {
        color: #ef8a62;
    }
`;

export const HomeIcon = styled(RiHome5Fill)`
    width: 24px;
    height: 24px;
    &:hover {
        width: 48px;
        height: 48px;
    }
    ${NavLinks}.active & {
        width: 48px;
        height: 48px;
    }
`;

export const SearchIcon = styled(RiSearchLine)`
    width: 24px;
    height: 24px;
    &:hover {
        width: 48px;
        height: 48px;
    }
    ${NavLinks}.active & {
        width: 48px;
        height: 48px;
    }
`;
