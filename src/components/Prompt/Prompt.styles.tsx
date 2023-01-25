import { RiLogoutCircleLine } from 'react-icons/ri';
import styled from 'styled-components';

export const PromptContainer = styled.div`
    top: 20rem;
    position: relative;
    display: flex;
    width: 100%;
    border-radius: 26px 26px 0 0;
    padding: 1rem;
`;

export const Logo = styled.img`
    width: 53px;
    height: 53px;
    object-fit: cover;
`;

export const ButtonInstance = styled.button`
    display: flex;
`;
export const SmallerContainer = styled.div``;

export const Card = styled.div`
    background-color: #eff2ee;
    border-radius: 15px;
    flex-direction: column;
    display: flex;
    gap: 1rem;
    padding: 1rem;

`;

export const Icon = styled(RiLogoutCircleLine)`
    font-size: 24px;
`;
export const Group = styled.div`
    width: 39px;
    height: 39px;
    object-fit: cover;
    margin-bottom: 19px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 2rem;
`;
