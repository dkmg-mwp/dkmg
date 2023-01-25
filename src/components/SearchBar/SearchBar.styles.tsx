import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 64px;
    padding: 20px 32px;
    border: 1px solid #dde5e9;
    border-radius: 40px;
    backdrop-filter: blur(10.5px);
    box-shadow: 0px 16px 17px rgba(128, 174, 152, 0.23);
    background: rgba(255, 255, 255, 0.63);
`;

export const SearchBarInput = styled.input`
    border-style: none;
    text-decoration: none;
    background-color: transparent;
    color: #2b8872;
    font-family: Mulish;
    &:focus {
        outline: none;
        color: #2b8872;
    }
`;
