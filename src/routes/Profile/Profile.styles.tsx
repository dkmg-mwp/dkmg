import styled from 'styled-components';

export const GuestContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    width: 100%;
    gap: 10px;
    padding: 20px 20px;
    border-radius: 15px;
    box-shadow: 9px 15px 10px -1px rgba(92, 130, 122, 0.28);
    background: #eff2ee;
    backdrop-filter: blur(2px);
`;

export const InputSection = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
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
    }
    width: 100%;
`;

export const ListSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    list-style-type: none;
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const Checkbox = styled.input`
    border-radius: 0.15em;
    border: 0.15em solid currentColor;
    color: currentColor;
    accent-color: orange;
    background-color: #fff;
`;

export const Label = styled.label``;

export const Container = styled.section`
    min-width: 100vw;
    min-height: 100vh;
    padding-top: 50px;
    top: 0px;
    background: #cce3c8;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 40px 10px 40px;
`;

export const GuestCreateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 20px;
    gap: 40px;
`;

export const AllGuest = styled.div`
    display: grid;
    padding-bottom: 75px;
    gap: 1.5rem;
    margin: 1rem 1rem;
    grid-auto-flow: dense;
`;
