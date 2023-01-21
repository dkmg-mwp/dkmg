import styled from 'styled-components';

export const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    top: 0px;
    padding-top: 50px;
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
`;

export const InnerContainer = styled.div`
    margin-top: 20px;
    padding: 24px 10px;
    min-height: 600px;
    background: #cce3c8;
    border-radius: 26px 26px 0px 0px;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 100px);
    justify-content: center;
`;

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    padding: 0px 20px;
    gap: 10px;
`;

export const SearchResult = styled.div`
    display: grid;
    gap: 1.5rem;
    margin: 1rem 1rem;
    padding-bottom: 75px;
`;
