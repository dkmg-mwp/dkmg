import styled from 'styled-components';

export const SmallButton = styled.button<{ primary?: boolean }>`
    background: ${(props) => (props.primary ? '#ef8a62' : 'white')};
    color: ${(props) => (props.primary ? 'white' : ' #ef8a62')};
    border: 1px solid #ef8a62;
    border-radius: 6px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.025em;
    height: 37px;
`;

export const AddButton = styled.button`
    border: none;
    background-color: #2b8872;
    text-transform: uppercase;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    letter-spacing: 0.025em;
    border-radius: 20px;
    padding: 10px 15px;
    width: 100%;
`;

export const LogOutButton = styled.button`
    border: none;
    background-color: #ef8a62;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    letter-spacing: 0.025em;
    border-radius: 20px;
    padding: 10px 15px;
    width: 100%;
`;

export const LogInButton = styled.button`
    border: none;
    background-color: #2b8872;
    color: white;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    align-content: center;
    letter-spacing: 0.025em;
    border-radius: 20px;
    padding: 10px 15px;
    width: 100%;
`;

export const SignUpPageButton = styled.button`
    width: 100%;
    padding: 11px 40%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(239, 138, 98);
    background: linear-gradient(
        58deg,
        rgb(239, 138, 98) 20%,
        rgb(239, 138, 98) 100%
    );
    &:hover {
        filter: brightness(1.03);
    }
`;
export const LogInPageButton = styled.button`
    width: 100%;
    padding: 11px 40%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(43, 136, 114);
    background: linear-gradient(
        58deg,
        rgb(43, 136, 114) 20%,
        rgb(43, 136, 114) 100%
    );
    &:hover {
        filter: brightness(1.03);
    }
`;
