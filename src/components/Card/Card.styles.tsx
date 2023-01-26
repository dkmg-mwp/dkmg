import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    width: 100%;
    padding: 20px;
    margin-bottom: 20px;
    gap: 10px;
    border-radius: 15px;
    background: #eff2ee;
    box-shadow: 9px 15px 10px -1px rgba(92, 130, 122, 0.28);
    backdrop-filter: blur(2px);
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 2rem;
`;

export const CardColumnLeft = styled.div``;

export const CardImage = styled.img`
    max-width: 150px;
    height: 130px;
    border-radius: 15px;
    object-fit: cover;
`;

export const CardColumnRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 50px;
`;

export const ArrowDown = styled(RiArrowDownSLine)``;
export const ArrowUp = styled(RiArrowUpSLine)``;
