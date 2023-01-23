import styled from 'styled-components';

export const Container = styled.section`
    min-width: 100vw;
    min-height: 100vh;
    top: 0px;
    background: #cce3c8;
    padding-top: 50px;
`;
export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 40px 10px 40px;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const InnerContainer = styled.div`
    padding: 20px 40px;
    min-height: 600px;
    background: #cce3c8;
    border-radius: 26px 26px 0px 0px;

`;

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
