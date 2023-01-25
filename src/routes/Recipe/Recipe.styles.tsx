import { RiGroupFill, RiTimeFill } from 'react-icons/ri';
import styled from 'styled-components';
export const Container = styled.div`
    min-width: 100vw;
    /* height: 100vh; */
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

export const InfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 4rem;
    align-items: center;
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
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 0.3rem;
`;

export const Ingredient = styled.li``;

export const Instructions = styled.ol`
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Step = styled.li``;
