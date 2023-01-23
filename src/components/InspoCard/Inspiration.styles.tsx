import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #e8f6e385;
    width: 200px;
    margin-bottom: 20px;
    box-shadow: 9px 15px 10px -1px rgba(92, 130, 122, 0.28);
    backdrop-filter: blur(2px);
    border-radius: 15px;
    height: auto;
`;
export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
`;
export const CardColumnTop = styled.div`
  
`;
export const CardImage = styled.img`
    max-width: 100%;
    object-fit: cover;
    border-radius:  15px 15px 0px 0px;
`;

export const CardColumnBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.5rem;
    padding: 0.1rem 1rem 1rem 1rem;
`;
