import styled from 'styled-components';

export const CardAccordion = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const CardAccordionBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
export const CardAccordionInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(1fr);
`;
export const IncludeTag = styled.p`
    display: flex;
    padding: 10px;
    justify-content: stretch;
    align-items: center;
    color: green;
`;
export const ExcludeTag = styled.p`
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    color: red;
`;
