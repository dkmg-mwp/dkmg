import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: auto;
    width: 200px;
    gap: 10px;
    margin-bottom: 20px;
    border-radius: 15px;
    box-shadow: 9px 15px 10px -1px rgba(92, 130, 122, 0.28);
    background: #e8f6e385;
    backdrop-filter: blur(2px);
`;

export const CardImage = styled.img`
    height: 150px;
    width: 200px;
    object-fit: cover;
    border-radius: 15px 15px 0px 0px;
`;

export const CardColumnTop = styled.div`
    max-width: 100%;
    padding: 0.1rem 1rem;
`;

export const CardColumnBottom = styled.div`
    display: flex;
    justify-content: start;
    align-items: stretch;
    width: 100%;
    padding: 0rem 0rem 1rem 1rem;
`;
