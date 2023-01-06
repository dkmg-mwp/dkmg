import styled from 'styled-components';

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
`

export const NavbarContainer = styled.nav`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 20px 32px;
    position: absolute;
    min-width: 280px;
    height: 74px;
    bottom: 22px; 
    background: #e3ebe2;
    border: 1px solid #dde5e9;
    box-shadow: 0px 16px 17px rgba(128, 174, 152, 0.37);
    backdrop-filter: blur(10.5px);
    border-radius: 20px;
    z-index: 5;
`;
