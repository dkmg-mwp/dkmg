import { useNavigate } from 'react-router-dom';
import { RiLoginCircleLine, RiLogoutCircleLine } from 'react-icons/ri';
import { useLogin } from '../../routes/Login/Login.context';
import { removeToken } from '../../api/LocalStorage/token-api';
import { MediumButton } from '../styles/Button.styles';
import { useState } from 'react';
import Prompt from '../Prompt/Prompt';

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
                        <RiLoginCircleLine />
                        Log In
                    </MediumButton>
                ) : (
                    <MediumButton bgColor='#ef8a62' onClick={handleClick}>
                        <RiLogoutCircleLine />
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
