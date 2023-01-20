import { useLogin } from '../../routes/Login/Login.context';
import * as Styled from './Header.styles';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../../api/LocalStorage/token-api';

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
            {!token ? (
                <button onClick={handleLogIn}>LogIn</button>
            ) : (
                <button onClick={handleLogOut}>LogOut</button>
            )}
        </Styled.HeaderContainer>
    );
};

export default Header;
