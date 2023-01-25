import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    top: 0;
    z-index: 2;
    position: absolute;
    background-color: transparent;
`;

export const HeaderWrapper = styled.div``;

export const Logo = styled.img``;

export const Prompt = styled.div`
    position: fixed;
    height: 100vh;
    bottom: 0px;
    backdrop-filter: blur(8px);
`;
