import styled from 'styled-components';

export const ListSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;
export const ListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const IncludeTag = styled.p`
    display: flex;
    padding: 10px;
    justify-content: stretch;
    gap: 1em;
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
export const Label = styled.label``;
