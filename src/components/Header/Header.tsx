import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../routes/Login/Login.context';
import { removeToken } from '../../api/LocalStorage/token-api';
import Prompt from '../Prompt/Prompt';
import { MediumButton } from '../styles/Button.styles';
import * as Styled from './Header.styles';

const Header = () => {
    const { token, setToken } = useLogin();

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleLogo = () => {
        navigate('/');
    };

    const handleLogIn = () => {
        navigate('/login');
    };

    const handleLogOut = () => {
        setOpen(false);
        removeToken();
        setToken(null);
    };

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    return (
        <Styled.HeaderContainer>
            <Styled.HeaderWrapper>
                <Styled.Logo
                    src='https://i.ibb.co/q9MVrBb/MainLogo.png'
                    alt='MainLogo'
                    height='50px'
                    onClick={handleLogo}
                />
            </Styled.HeaderWrapper>
            <Styled.HeaderWrapper>
                {!token ? (
                    <MediumButton bgColor='#2b8872' onClick={handleLogIn}>
                        <Styled.LogInIcon />
                        Log In
                    </MediumButton>
                ) : (
                    <MediumButton bgColor='#ef8a62' onClick={handleClick}>
                        <Styled.LogOutIcon />
                        Log Out
                    </MediumButton>
                )}
            </Styled.HeaderWrapper>

            {open && (
                <Styled.Prompt>
                    <Prompt
                        handleClick={handleClick}
                        handleLogOut={handleLogOut}
                    />
                </Styled.Prompt>
            )}
        </Styled.HeaderContainer>
    );
};

export default Header;
