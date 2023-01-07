import {
    NavbarContainer,
    Footer,
    NavLinks,
    HomeIcon,
    SearchIcon,
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
            </NavbarContainer>
        </Footer>
    );
};

export default Navbar;
