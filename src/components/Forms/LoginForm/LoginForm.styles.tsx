import styled from 'styled-components';

export const BoxContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MutedLink = styled.p`
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
    margin-bottom: 10px;
`;

export const BoldLink = styled.a`
    font-size: 12px;
    color: rgb(239, 138, 98);
    font-weight: 500;
    text-decoration: none;
    margin: 0 8px;
`;

export const Input = styled.input`
    width: 100%;
    height: 42px;
    outline: none;
    border: 1px solid rgb(204, 227, 200);
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;
    background-color: rgba(204, 227, 200, 0.598);
    transition: all 200ms ease-in-out;
    font-size: 12px;
    margin-bottom: 1em;
    border-radius: 5px;

    &::placeholder {
        color: #2b8872;
    }
    &:not(:last-of-type) {
        border-bottom: 1.5px solid rgba(119, 244, 161, 0.4);
    }
    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(241, 196, 15);
        color: #2b8872;
    }
    &:active {
        outline: none;
        border-bottom: 2px solid rgb(241, 196, 15);
        color: #2b8872;
        background-color: #cce3c8;
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 11px 40%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(239, 138, 98);
    background: linear-gradient(
        58deg,
        rgb(239, 138, 98) 20%,
        rgb(239, 138, 98) 100%
    );
    &:hover {
        filter: brightness(1.03);
    }
`;
