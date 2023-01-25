import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    background: #eff2ee;
    width: 100%;
    margin-bottom: 20px;
    padding: 20px;
    box-shadow: 9px 15px 10px -1px rgba(92, 130, 122, 0.28);
    backdrop-filter: blur(2px);
    border-radius: 15px;
    height: auto;
`;
export const CardWrapper = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 2rem;
`;
export const CardColumnLeft = styled.div`
`;
export const CardImage = styled.img`
   max-width: 150px;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
`;

export const CardColumnRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: flex-end;
`;
