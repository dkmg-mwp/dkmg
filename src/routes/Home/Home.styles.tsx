import styled from 'styled-components';

export const Container = styled.section`
    min-width: 100vw;
    min-height: 100vh;
    padding-top: 50px;
    padding-bottom: 75px;
    top: 0px;
    background: #cce3c8;
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px 40px 20px 20px;
`;

export const SliderSection = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0px 20px 20px;
    position: relative;
`;

export const Slider = styled.div`
    display: flex;
    gap: 2rem;
    overflow-x: auto;
`;
