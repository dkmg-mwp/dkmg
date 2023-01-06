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
                    <RiHome5Fill style={{ height: '24px', width: '24px' }} />
                </NavLink>
                <NavLink
                    to='/search'
                    style={({ isActive }) => ({
                        color: isActive ? '#EF8A62' : '#2B8872',
                    })}
                >
                    <RiSearchLine style={{ height: '24px', width: '24px' }} />
                </NavLink>
            </NavbarContainer>
        </Footer>
    );
};

export default Navbar;
