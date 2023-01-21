import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    top: 0px;
`;

export const BoxContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
    padding-top: 40px;
`;

export const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 5em 1.8em;
`;

export const BackDrop = styled(motion.div)`
    width: 100%;
    height: 350px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(20deg);
    top: -190px;
    left: -140px;
    background: rgb(204, 227, 200);
    background: linear-gradient(
        90deg,
        rgba(183, 245, 198, 1) 0%,
        rgba(204, 227, 200) 100%
    );
    @media screen and (min-width: 700px) {
        display: none;
    }
`;
export const BackDropTransition = styled(motion.div)`
    width: 100%;
    z-index: 1100;
    height: 350px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(20deg);
    top: -190px;
    left: -140px;
    background: rgb(239, 138, 98);
    background: linear-gradient(90deg, #ef8a62 0%, rgba(239, 138, 98) 100%);
    @media screen and (min-width: 700px) {
        display: none;
    }
`;

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

// export const HeaderText = styled.h1`
//     z-index: 10;
//     margin: 0;
// `;

// export const SmallText = styled.h5`
//     z-index: 30;
//     margin: 0;
//     margin-top: 7px;
// `;

export const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
`;
