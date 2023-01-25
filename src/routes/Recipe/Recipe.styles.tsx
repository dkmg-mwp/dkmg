import styled from 'styled-components';

export const Modal = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    z-index: 9999;
    background: #cce3c8;
    padding: 2rem;
    /* background-color: rgba(0, 0, 0, 0.5); semi-transparent black */
`;

export const Image = styled.img`
    width: 300px;
    height: 200px;
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
`;
export const Time = styled.p``;
export const Servings = styled.p``;

export const Ingredients = styled.article``;

export const Ingredient = styled.div``;

export const Instructions = styled.article``;

export const Step = styled.div``;
