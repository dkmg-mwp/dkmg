import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #e8f6e385;
    width: 200px;
    margin-bottom: 20px;
    box-shadow: 9px 15px 10px -1px rgba(92, 130, 122, 0.28);
    backdrop-filter: blur(2px);
    border-radius: 15px;
    justify-content: space-between;
    gap: 10px;
    height: auto;
`;

export const CardImage = styled.img`
    width: 200px;
    height: 150px;
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
