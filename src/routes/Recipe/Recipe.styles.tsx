import {
    RiCheckboxBlankCircleLine,
    RiGroupFill,
    RiTimeFill,
} from 'react-icons/ri';
import styled from 'styled-components';

export const Container = styled.div`
    min-width: 100vw;
    padding-top: 50px;
    background: #fefefe;
`;

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 1rem;
    padding: 2rem;
    margin-top: 20px;
    padding-bottom: 150px;
    border-radius: 26px 26px 0px 0px;
    background: #cce3c8;
`;

export const Image = styled.img`
    height: 200px;
    width: 100%;
    border-radius: 10px;
`;

export const Recipe = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
`;

export const FirstSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    border-radius: 10px;
    background-color: #eff2ee;
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;
    padding-bottom: 1rem;
`;

export const Time = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const TimeIcon = styled(RiTimeFill)`
    font-size: 24px;
    color: #ef8a62;
`;

export const Servings = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const ServingIcon = styled(RiGroupFill)`
    font-size: 24px;
    color: #ef8a62;
`;

export const Ingredients = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 1rem;
    margin-bottom: 0.3rem;
`;
export const BulletIcon = styled(RiCheckboxBlankCircleLine)``;

export const Ingredient = styled.li`
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;
`;

export const Amount = styled.h6<{ color?: string; weight?: number }>`
    color: ${(props) => (props.color === '#2b8872' ? '#2b8872' : '#ef8a62')};
    font-weight: ${(props) => (props.weight === 800 ? 800 : 600)};
    display: flex;
    align-items: center;
`;

export const Instructions = styled.ol`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: 1rem;
`;

export const Step = styled.li``;
