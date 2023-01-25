import styled from 'styled-components';

export const LoadingContainer = styled.div`
    position: fixed;
    min-width: 100vw;
    min-height: 100vh;
    z-index: 1000;
    inset: 0 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
`;
