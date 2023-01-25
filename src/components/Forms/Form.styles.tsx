import styled from 'styled-components';

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin-top: 10px;
    z-index: auto;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Input = styled.input`
    width: 100%;
    height: 42px;
    padding: 0px 10px;
    margin-bottom: 1em;
    border-radius: 5px;
    border: 1px solid rgb(204, 227, 200);
    border-bottom: 1.4px solid transparent;
    outline: none;
    background-color: rgba(204, 227, 200, 0.598);
    transition: all 200ms ease-in-out;
    font-size: 12px;
    &::placeholder {
        color: #2b8872;
    }
    &:not(:last-of-type) {
        border-bottom: 1.5px solid rgba(119, 244, 161, 0.4);
    }
    &:focus {
        border-bottom: 2px solid rgb(241, 196, 15);
        outline: none;
        color: #2b8872;
    }
    &:active {
        border-bottom: 2px solid rgb(241, 196, 15);
        outline: none;
        color: #2b8872;
        background-color: #cce3c8;
    }
`;

export const MutedLink = styled.p`
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
`;

export const BoldLink = styled.a`
    margin: 0 8px;
    font-size: 12px;
    color: rgb(239, 138, 98);
    font-weight: 500;
    text-decoration: none;
`;

