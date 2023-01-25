import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { RiHome5Fill, RiSearchLine, RiUserFill } from 'react-icons/ri';

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
`;

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
    height: 74px;
    min-width: 280px;
    padding: 20px 32px;
    bottom: 22px;
    border: 1px solid #dde5e9;
    border-radius: 20px;
    z-index: 5;
    box-shadow: 0px 26px 17px rgba(128, 174, 152, 0.87);
    backdrop-filter: blur(10.5px);
    background: #e3ebe2;
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

export const UserIcon = styled(RiUserFill)`
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
