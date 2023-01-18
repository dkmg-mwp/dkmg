import styled from 'styled-components';

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #eff2ee;
    box-shadow: 9px 15px 10px -1px rgba(92, 130, 122, 0.28);
    backdrop-filter: blur(2px);
    border-radius: 15px;
`;

export const InputSection = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`;
export const Input = styled.input`
    text-decoration: none;
    border-style: none;
    background-color: transparent;
    color: #2b8872;
    font-family: Mulish;
    &:focus {
        outline: none;
        color: #2b8872;
        /* box-shadow: 0px 0px 2px red; */
    }
`;
export const Button = styled.button`
    border: none;
    background-color: #2b8872;
    color: white;
`;

export const ListSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
export const Subtitle = styled.h4``;

export const List = styled.ul``;
export const ListItem = styled.li``;
export const Checkbox = styled.input`
    accent-color: orange;
    border-radius: 0.15em;
    background-color: #fff;
    color: currentColor;
    border: 0.15em solid currentColor;
`;
export const Label = styled.label``;
