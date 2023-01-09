import styled from 'styled-components';

export const SearchBarContainer = styled.div`
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

export const SearchBarInput = styled.input`
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
