import styled, { keyframes } from 'styled-components';

export const LoadingContainer = styled.div`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
    z-index: 1000;
    inset: 0 0 0 0;
    background-color: #CCE3C8;
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

