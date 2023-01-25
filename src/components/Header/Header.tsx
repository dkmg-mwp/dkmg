import { useNavigate } from 'react-router-dom';
import { RiLoginCircleLine, RiLogoutCircleLine } from 'react-icons/ri';
import { useLogin } from '../../routes/Login/Login.context';
import { removeToken } from '../../api/LocalStorage/token-api';
import { MediumButton } from '../styles/Button.styles';
import * as Styled from './Header.styles';

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
                    <MediumButton bgColor='#2b8872' onClick={handleLogIn}>
                        <RiLoginCircleLine />
                        Log In
                    </MediumButton>
                ) : (
                    <MediumButton bgColor='#ef8a62' onClick={handleLogOut}>
                        <RiLogoutCircleLine />
                        Log Out
                    </MediumButton>
                )}
            </Styled.HeaderWrapper>
        </Styled.HeaderContainer>
    );
};

export default Header;
