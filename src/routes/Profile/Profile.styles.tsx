import styled from 'styled-components';

export const Container = styled.section`
    min-width: 100vw;
    min-height: 100vh;
    top: 0px;
    background: #cce3c8;
    padding-top: 50px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1``;

export const GuestContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    background: #eff2ee;
    width: 100%;
    margin-bottom: 20px;
    padding: 20px 20px;
    box-shadow: 9px 15px 10px -1px rgba(92, 130, 122, 0.28);
    backdrop-filter: blur(2px);
    border-radius: 15px;
    height: auto;
`;

export const Form = styled.form``;

export const InputSection = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
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
    width: 100%;
`;

export const ListSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;
export const Subtitle = styled.h4``;

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
export const Checkbox = styled.input`
    accent-color: orange;
    border-radius: 0.15em;
    background-color: #fff;
    color: currentColor;
    border: 0.15em solid currentColor;
`;
export const Label = styled.label``;

export const Guests = styled.div`
    display: grid;
    gap: 1.5rem;
    margin: 1rem 1rem;
    grid-auto-flow: dense;
`;
