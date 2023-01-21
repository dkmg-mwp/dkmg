import { useLogin } from '../../routes/Login/Login.context';
import * as Styled from './Header.styles';
import * as StyledButton from './../Buttons/Button.styles';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../../api/LocalStorage/token-api';
import { RiLoginCircleLine, RiLogoutCircleLine } from 'react-icons/ri';

const Header = () => {
    const { token, setToken } = useLogin();
    const navigate = useNavigate();

    const handleLogo = () => {
        navigate('/');
    };

    const handleLogIn = () => {
        navigate('/login');
    };

    const handleLogOut = () => {
        removeToken();
        setToken(null);
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
                    <StyledButton.MediumButton
                        bgColor='#2b8872'
                        onClick={handleLogIn}
                    >
                        <RiLoginCircleLine />
                        Log In
                    </StyledButton.MediumButton>
                ) : (
                    <StyledButton.MediumButton
                        bgColor='#ef8a62'
                        onClick={handleLogOut}
                    >
                        <RiLogoutCircleLine />
                        Log Out
                    </StyledButton.MediumButton>
                )}
            </Styled.HeaderWrapper>
        </Styled.HeaderContainer>
    );
};

export default Header;
