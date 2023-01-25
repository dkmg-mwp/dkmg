import styled from 'styled-components';

export const Container = styled.section`
    min-width: 100vw;
    min-height: 100vh;
    top: 0px;
    background: #cce3c8;
    padding-top: 50px;
   
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
    padding: 20px 0px 20px 20px;
`;

export const Slider = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 2rem;
`;


export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
`;

export const CardContainer = styled.div<{ zIndex?: number }>`
    z-index: ${(props) => (props.zIndex ? -190 : 180)};
    display: flex;
    flex-direction: column;
    background: #e8f6e385;
    width: 200px;
    margin-bottom: 20px;
    box-shadow: 9px 15px 10px -1px rgba(92, 130, 122, 0.28);
    backdrop-filter: blur(2px);
    border-radius: 15px;
    justify-content: space-between;
    gap: 10px;
    height: auto;
`;

export const CardImage = styled.img`
    width: 200px;
    height: 150px;
    object-fit: cover;
    border-radius: 15px 15px 0px 0px;
`;
export const CardColumnTop = styled.div`
    max-width: 100%;
    padding: 0.1rem 1rem;
`;

export const CardColumnBottom = styled.div`
    display: flex;
    justify-content: start;
    align-items: stretch;
    width: 100%;
    padding: 0rem 0rem 1rem 1rem;
`;

