import { RiGroupFill, RiTimeFill } from 'react-icons/ri';
import styled from 'styled-components';
export const Container = styled.div`
    min-width: 100vw;
    padding-top: 50px;
    background: #fefefe;
`;

export const Wrapper = styled.section`
    border-radius: 26px 26px 0px 0px;
    margin-top: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    background: #cce3c8;
    padding: 2rem;
    padding-bottom: 150px;
`;
export const Recipe = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
`;

export const Image = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 10px;
`;
export const FirstSection = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #eff2ee;
    border-radius: 10px;
    gap: 1rem;
    padding: 2rem;
`;
export const InfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 4rem;
    align-items: center;
    padding-bottom: 1rem;
`;
export const Time = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;
export const TimeIcon = styled(RiTimeFill)`
    color: #ef8a62;
    font-size: 24px;
`;
export const Servings = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;
export const ServingIcon = styled(RiGroupFill)`
    color: #ef8a62;
    font-size: 24px;
`;

export const Ingredients = styled.ul`
    display: flex;
    padding-top: 1rem;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.3rem;
`;

export const Ingredient = styled.li`
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;
`;
export const Amount = styled.h6<{ color?: string, weight?: number }>`
    color: ${(props) => (props.color === '#2b8872' ? '#2b8872' : '#ef8a62')};
    font-weight: ${(props) => (props.weight === 800 ? 800 : 600 )};
    display: flex;
    align-items: center;
`;

export const Instructions = styled.ol`
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Step = styled.li``;
