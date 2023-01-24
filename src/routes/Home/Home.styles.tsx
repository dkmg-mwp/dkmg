import styled from 'styled-components';

export const Container = styled.section`
    min-width: 100vw;
    min-height: 100vh;
    top: 0px;
    background: #cce3c8;
    padding-top: 50px;
    overflow-x: clip;
`;
export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px 0px 10px 20px;
    flex-direction: column;
`;

export const SliderSection = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: 20px 40px;
`;

export const Slider = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-margin: 0px;
    white-space: nowrap;
    gap: 2rem;
`;
export const SliderItem = styled.div`
    display: inline-block;
    padding: 2px;
    cursor: pointer;
    :hover {
    }
`;
