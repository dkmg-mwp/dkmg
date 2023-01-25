import styled from 'styled-components';

export const HeaderContainer = styled.header`
    top: 0;
    z-index: 2;
    position: absolute;
    background-color: transparent;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
`;

export const HeaderWrapper = styled.div``;
export const Logo = styled.img``;

export const Prompt = styled.div`
    position: fixed;
    backdrop-filter: blur(8px);
    bottom: 0px;

    height: 100vh;
`;
