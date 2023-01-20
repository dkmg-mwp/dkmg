import styled from 'styled-components';

export const SmallButton = styled.button<{ primary?: boolean }>`
    background: ${(props) => (props.primary ? '#ef8a62' : 'white')};
    color: ${(props) => (props.primary ? 'white' : ' #ef8a62')};
    border: 1px solid #ef8a62;
    border-radius: 6px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.025em;
    height: 37px;
`;

export const AddButton = styled.button`
    border: none;
    background-color: #2b8872;
    text-transform: uppercase;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    letter-spacing: 0.025em;
    border-radius: 20px;
    padding: 10px 15px;
    width: 100%;
`;
