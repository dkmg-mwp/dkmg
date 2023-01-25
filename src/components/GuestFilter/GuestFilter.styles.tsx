import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    border-radius: 15px;
    padding: 5px;
    margin: 5px;
    box-shadow: 9px 15px 10px -1px rgba(92, 130, 122, 0.28);
    background: #eff2ee;
    backdrop-filter: blur(2px);
`;

export const Checkbox = styled.input`
    border-radius: 0.15em;
    border: 0.15em solid currentColor;
    color: currentColor;
    accent-color: orange;
    background-color: #fff;
`;
