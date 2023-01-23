import { useLogin } from '../../routes/Login/Login.context';
import * as Styled from './Navbar.styles';

const Navbar = () => {
    const { token } = useLogin();
    return (
        <Styled.Footer>
            <Styled.NavbarContainer>
                <Styled.NavLinks to='/'>
                    <Styled.HomeIcon />
                </Styled.NavLinks>
                <Styled.NavLinks to='/search'>
                    <Styled.SearchIcon />
                </Styled.NavLinks>
                {token ? (
                    <Styled.NavLinks to='/profile'>
                        <Styled.UserIcon />
                    </Styled.NavLinks>
                ) : (
                    <Styled.NavLinks to='/login'>
                        <Styled.UserIcon />
                    </Styled.NavLinks>
                )}
            </Styled.NavbarContainer>
        </Styled.Footer>
    );
};

export default Navbar;
