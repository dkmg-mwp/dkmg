import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #eff2ee;
    width: 100%;
    margin-bottom: 20px;
    padding: 15px 15px;
    box-shadow: 9px 15px 10px -1px rgba(92, 130, 122, 0.28);
    backdrop-filter: blur(2px);
    border-radius: 15px;
    height: auto;
`;
export const CardWrapper = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
`;
export const CardColumnLeft = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;
export const CardImage = styled.img`
    max-width: 100%;
    object-fit: cover;
    border-radius: 15px;
`;

export const CardColumnRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1rem;
`;
