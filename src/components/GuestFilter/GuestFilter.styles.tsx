import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    background: #eff2ee;
    box-shadow: 9px 15px 10px -1px rgba(92, 130, 122, 0.28);
    backdrop-filter: blur(2px);
    border-radius: 15px;
    padding: 5px;
    margin: 5px;
`;


export const Checkbox = styled.input`
    accent-color: orange;
    border-radius: 0.15em;
    background-color: #fff;
    color: currentColor;
    border: 0.15em solid currentColor;
`;