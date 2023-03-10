import styled from 'styled-components';

export const Container = styled.div`
    min-width: 100vw;
    padding-top: 50px;
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 20px 20px 20px;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 130px);
    justify-content: center;
`;

export const InnerContainer = styled.div`
    padding: 24px 10px 253px 10px;
    margin-top: 10.5px;
    border-radius: 26px 26px 0px 0px;
    background: #cce3c8;
`;

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 20px;
    gap: 40px;
`;

export const SearchResult = styled.div`
    display: grid;
    gap: 1.5rem;
`;
