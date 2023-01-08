import styled from 'styled-components';

export const CardContainer = styled.article`
    margin: 20px;
    display: flex;
    flex-direction: column;
    background: #eff2ee;
    box-shadow: 9px 15px 10px -1px rgba(92, 130, 122, 0.28);
    backdrop-filter: blur(2px);
    border-radius: 15px;
    padding: 10px;
`;
export const CardWrapper = styled.article``;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
export const Left = styled.div`
    padding: 10px;
`;
export const CardImage = styled.img`
    max-width: 120px;
    max-height: 100px;
    object-fit: contain;
    border-radius: 15px;
`;

export const CardRatings = styled.div``;
export const CardTitle = styled.h5``;

export const Right = styled.div`
    padding: 10px;
`;
export const SmallButton = styled.button`
    background: #ef8a62;
    border: 1px solid #ef8a62;
    border-radius: 6px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.025em;
    color: white;
`;

export const CardAccordian = styled.div`
    display: block;
    padding: 5px 10px;
`;
export const CardAccordianBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
export const CardAccordianInfo = styled.p`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
`;
export const IncludeTag = styled.p`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    color: green;
`;
export const ExcludeTag = styled.p`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    color: red;
`;
