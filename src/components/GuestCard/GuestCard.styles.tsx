import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    width: 100%;
    gap: 10px;
    padding: 20px 20px;
    margin-bottom: 20px;
    border-radius: 15px;
    box-shadow: 9px 15px 10px -1px rgba(92, 130, 122, 0.28);
    background: #eff2ee;
    backdrop-filter: blur(2px);
`;

export const CardWrapper = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 5.3rem;
`;

export const CardColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const CardImage = styled.img`
    max-width: 75px;
    border-radius: 15px;
    object-fit: cover;
`;

export const CardColumnRight = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    gap: 50px;
`;

export const ArrowDown = styled(RiArrowDownSLine)``;
export const ArrowUp = styled(RiArrowUpSLine)``;