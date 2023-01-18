import * as Styled from './Header.styles';

const Header = () => {
    return (
        <Styled.HeaderContainer>
            <Styled.HeaderWrapper>
                <Styled.Logo
                    src='https://i.ibb.co/q9MVrBb/MainLogo.png'
                    alt='MainLogo'
                    height='50px'
                />
            </Styled.HeaderWrapper>
        </Styled.HeaderContainer>
    );
};

export default Header;
