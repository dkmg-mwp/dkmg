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

export const MediumButton = styled.button<{ bgColor?: string }>`
    border: none;
    background-color: ${(props) =>
        props.bgColor === '#2b8872' ? '#2b8872' : '#ef8a62'};
    color: white;
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    align-content: center;
    letter-spacing: 0.025em;
    border-radius: 20px;
    padding: 10px 15px;
    width: 100%;
`;

export const LargeButton = styled.button<{ bgColor?: string }>`
    background: ${(props) =>
        props.bgColor === '#2b8872' ? '#2b8872' : '#ef8a62'};
    width: 100%;
    padding: 11px 40%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    &:hover {
        filter: brightness(1.03);
    }
`;
