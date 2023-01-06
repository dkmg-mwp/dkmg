import styled from 'styled-components';

export const CardContainer = styled.article`
    border: black 1px solid;
    margin: 10px;
    display: flex;
`;
export const CardWrapper = styled.article`
    display: grid;
    grid-column: 1 / 3;
    padding: 10px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
export const Left = styled.div`
    padding: 10px;
`;
export const CardImage = styled.img`
    max-width: 120px;
`;

export const CardRatings = styled.div``;
export const CardTitle = styled.h3``;

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
`;

export const CardAccordian = styled.div`
    display: flex;
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
