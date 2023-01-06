import { RiHome5Fill, RiSearchLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { NavbarContainer, Footer } from './Navbar.styles';

const Navbar = () => {
    return (
        <Footer>
            <NavbarContainer>
                <NavLink
                    to='/'
                    style={({ isActive }) => ({
                        color: isActive ? '#EF8A62' : '#2B8872',
                    })}
                >
                    <RiHome5Fill />
                </NavLink>
                <NavLink
                    to='/search'
                    style={({ isActive }) => ({
                        color: isActive ? '#EF8A62' : '#2B8872',
                    })}
                >
                    <RiSearchLine />
                </NavLink>
            </NavbarContainer>
        </Footer>
    );
};

export default Navbar;
