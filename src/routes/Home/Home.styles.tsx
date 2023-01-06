import styled from 'styled-components';

export const Title = styled.h1`
    position: absolute;
    width: 280px;
    height: 142px;
    left: 20px;
    top: 95px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    /* or 36px */
    display: flex;
    align-items: center;
    letter-spacing: 0.005em;
    color: #2b8876;
`;

export const Container = styled.section`
    position: absolute;
    min-width: 100vw;
    min-height: 667px;
    top: 0px;
    background: #cce3c8;
`;

export const SearchBarSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 32px;
    background: rgba(255, 255, 255, 0.63);
    position: absolute;
    width: 280px;
    left: 20px;
    top: 302px;
    border-radius: 40px;
`;
