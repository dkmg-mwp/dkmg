import styled from 'styled-components';

export const ListSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
`;
export const ListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const AllergyTag = styled.div<{ include?: boolean }>`
    color: ${(props) => (props.include ? 'green' : 'red')};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;
export const Label = styled.label``;

export const Checkbox = styled.input`
    accent-color: orange;
    border-radius: 0.15em;
    background-color: #fff;
    color: currentColor;
    border: 0.15em solid currentColor;
`;
