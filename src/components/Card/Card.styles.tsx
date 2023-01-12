import styled from 'styled-components';

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #eff2ee;
    box-shadow: 9px 15px 10px -1px rgba(92, 130, 122, 0.28);
    backdrop-filter: blur(2px);
    border-radius: 15px;
`;

export const CardImage = styled.img`
    max-width: 150px;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
`;

export const CardColumn = styled.div`
    padding: 15px 10px;
    display: grid;
    gap: 10px;
`;
export const CardRatings = styled.div``;
export const CardTitle = styled.h5``;



export const CardSection = styled.div`
    
`