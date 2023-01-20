import { useLogin } from '../../routes/Login/Login.context';
import {
    NavbarContainer,
    Footer,
    NavLinks,
    HomeIcon,
    SearchIcon,
    UserIcon,
} from './Navbar.styles';

const Navbar = () => {
    const { token } = useLogin();
    return (
        <Footer>
            <NavbarContainer>
                <NavLinks to='/'>
                    <HomeIcon></HomeIcon>
                </NavLinks>
                <NavLinks to='/search'>
                    <SearchIcon></SearchIcon>
                </NavLinks>
                {token ? (
                    <NavLinks to='/profile'>
                        <UserIcon></UserIcon>
                    </NavLinks>
                ) : (
                    <NavLinks to='/login'>
                        <UserIcon></UserIcon>
                    </NavLinks>
                )}
            </NavbarContainer>
        </Footer>
    );
};

export default Navbar;
