import styled from 'styled-components';

export const Container = styled.section`
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`;

export const Input = styled.input`
    text-decoration: none;
    border-style: none;
    background-color: transparent;
    color: #2b8872;
    font-family: Mulish;
    &:focus {
        outline: none;
        color: #2b8872;
        /* box-shadow: 0px 0px 2px red; */
    }
`;
