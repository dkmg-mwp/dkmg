import styled from 'styled-components';

export const Container = styled.section`
    position: relative;
    min-width: 100vw;
    min-height: 100vh;
    top: 0px;
    background: #cce3c8;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    position: relative;
    width: 280px;
    height: 142px;
    top: 75px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    display: flex;
    align-items: center;
    letter-spacing: 0.005em;
    color: #2b8876;
`;

export const SearchBarSection = styled.section`
    box-sizing: border-box;
    width: 280px;
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 32px;
    position: relative;
    top: 132px;
    left: 0px;
    background: rgba(255, 255, 255, 0.63);
    border: 1px solid #dde5e9;
    box-shadow: 0px 16px 17px rgba(128, 174, 152, 0.23);
    backdrop-filter: blur(10.5px);
    border-radius: 40px;
`;
