import {
    NavbarContainer,
    Footer,
    NavLinks,
    HomeIcon,
    SearchIcon,
    UserIcon,
} from './Navbar.styles';

const Navbar = () => {
    return (
        <Footer>
            <NavbarContainer>
                <NavLinks to='/'>
                    <HomeIcon></HomeIcon>
                </NavLinks>
                <NavLinks to='/search'>
                    <SearchIcon></SearchIcon>
                </NavLinks>
                <NavLinks to='/profile'>
                    <UserIcon></UserIcon>
                </NavLinks>
            </NavbarContainer>
        </Footer>
    );
};

export default Navbar;
