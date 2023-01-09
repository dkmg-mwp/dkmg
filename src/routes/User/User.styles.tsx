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

export const Title = styled.h1``;

export const InputSection = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 32px;
    background: rgba(255, 255, 255, 0.63);
    border: 1px solid #dde5e9;
    box-shadow: 0px 16px 17px rgba(128, 174, 152, 0.23);
    backdrop-filter: blur(10.5px);
    border-radius: 40px;
`;

export const Input = styled.input`
    text-decoration: none;
    border-style: none;
    background-color: transparent;
    &:focus {
        outline: none;
        /* box-shadow: 0px 0px 2px red; */
    }
`;
