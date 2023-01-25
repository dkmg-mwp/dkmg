import styled, { keyframes } from 'styled-components';

export const LoadingContainer = styled.div`
    position: fixed;
    min-width: 100vw;
    z-index: 1000;
    inset: 0 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cce3c8;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const Circle = styled.img`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    width: 65px;
    height: 65px;
    border-radius: 50%;
`;
