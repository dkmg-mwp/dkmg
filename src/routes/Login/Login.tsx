import { useEffect, useState } from 'react';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import SignUpForm from '../../components/Forms/SignUpForm/SignUp';
import { AccountContext, useLogin } from './Login.context';
import {
    BackDrop,
    BoxContainer,
    Container,
    HeaderContainer,
    HeaderText,
    InnerContainer,
    SmallText,
    TopContainer,
} from './Login.styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../Profile/Profile.context';

const backDropVariants = {
    expanded: {
        width: '233%',
        height: '1050px',
        borderRadius: '20%',
        transform: 'rotate(150deg)',
    },
    collapsed: {
        width: '140%',
        height: '400px',
        borderRadius: '50%',
        transform: '150deg',
    },
};

const expandingTransition = {
    type: 'spring',
    duration: 2.3,
    stiffness: 30,
};

const Login = () => {
    const { setUser } = useProfile();
    const { setToken, token } = useLogin();
    const [isExpanded, setIsExpanded] = useState(false);
    const [active, setActive] = useState('login');
    const navigate = useNavigate();

    const handleLogin = async (email: string, password: string) => {
        const res = await axios.post(`https://dkmg.glitch.me/auth/login`, {
            email: email,
            password: password,
        });
        setUser(res.data.user);
        setToken(res.data.access_token);
    };

    const handleSubmit = async (email: string, password: string) => {
        const res = await axios.post(`https://dkmg.glitch.me/auth/register`, {
            email: email,
            password: password,
        });
        setUser(res.data.user);
        setToken(res.data.access_token);
    };

    const playExpandedAnimation = () => {
        setIsExpanded(true);
        setTimeout(() => {
            setIsExpanded(false);
        }, expandingTransition.duration * 1000 - 1800);
    };

    const switchToSignUp = () => {
        playExpandedAnimation();
        setTimeout(() => {
            setActive('signup');
        }, 400);
    };

    const switchToLogIn = () => {
        playExpandedAnimation();
        setTimeout(() => {
            setActive('login');
        }, 400);
    };
    const contextValue = { switchToSignUp, switchToLogIn };

    useEffect(() => {
        if (token) {
            navigate('/profile');
        } else {
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        if (active === 'login') {
            document.title = 'Login';
        } else if (active === 'signup') {
            document.title = 'Sign Up';
        }
    }, [active]);

    return (
        <AccountContext.Provider value={contextValue}>
            <Container>
                <BoxContainer>
                    <TopContainer>
                        <BackDrop
                            initial={false}
                            animate={isExpanded ? 'expanded' : 'collapsed'}
                            variants={backDropVariants}
                            transition={expandingTransition}
                        />
                        {active === 'login' && (
                            <HeaderContainer>
                                <HeaderText>Welcome</HeaderText>
                                <HeaderText>Back Foodie!</HeaderText>
                                <SmallText>Please log in to continue</SmallText>
                            </HeaderContainer>
                        )}
                        {active === 'signup' && (
                            <HeaderContainer>
                                <HeaderText>Create</HeaderText>
                                <HeaderText>Account</HeaderText>
                                <SmallText>
                                    Sign up & help your guests!
                                </SmallText>
                            </HeaderContainer>
                        )}
                    </TopContainer>
                    <InnerContainer>
                        {active === 'login' && (
                            <LoginForm handleLogin={handleLogin} />
                        )}
                        {active === 'signup' && (
                            <SignUpForm handleSubmit={handleSubmit} />
                        )}
                    </InnerContainer>
                </BoxContainer>
            </Container>
        </AccountContext.Provider>
    );
};

export default Login;
