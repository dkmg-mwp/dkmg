import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #eff2ee;
    box-shadow: 9px 15px 10px -1px rgba(92, 130, 122, 0.28);
    backdrop-filter: blur(2px);
    border-radius: 15px;
    gap: 2px;
    padding: 15px 10px;
    margin: 15px 5px;
`;

export const OptionText = styled.span`
    font-size: 14px;
    color: rgb(239, 138, 98);
    font-weight: 800;
    text-decoration: none;
    
`;
export const ContentContainer = styled.div`

`;
export const Checkbox = styled.input`
    border-radius: 0.15em;
    border: 0.15em solid currentColor;
    color: currentColor;
    accent-color: orange;
    background-color: #fff;
`;
