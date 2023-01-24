import { useEffect, useState } from 'react';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import SignUpForm from '../../components/Forms/SignUpForm/SignUp';
import { AccountContext, useLogin } from './Login.context';
import * as Styled from './Login.styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../Profile/Profile.context';
import { addToken, addUser } from '../../api/LocalStorage/token-api';
import Heading from '../../components/styles/Heading.styles';

const backDropVariants = {
    expanded: {
        width: '233%',
        height: '1050px',
        borderRadius: '20%',
        transform: 'rotate(150deg)',
    },
    collapsed: {
        width: '140%',
        height: '450px',
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
    const { setUser, fetchGuests, setUsername } = useProfile();
    const { setToken, token } = useLogin();
    const [isExpanded, setIsExpanded] = useState(false);
    const [active, setActive] = useState('login');
    const navigate = useNavigate();

    const handleLogin = async (email: string, password: string) => {
        if (!email && !password) return;
        const res = await axios.post(`https://dkmg.glitch.me/auth/login`, {
            email: email,
            password: password,
        });
        setUser(res.data.user.id);
        setToken(res.data.access_token);
        addToken(res.data.access_token);
        setUsername(res.data.user.username);
        addUser(res.data.user.id, res.data.user.username);
    };

    const handleSubmit = async (
        username: string,
        email: string,
        password: string
    ) => {
        if (!email && !password) return;
        const res = await axios.post(`https://dkmg.glitch.me/auth/register`, {
            username: username,
            email: email,
            password: password,
        });
        setUser(res.data.user.id);
        setToken(res.data.access_token);
        addToken(res.data.access_token);
        setUsername(res.data.user.username);
        addUser(res.data.user.id, res.data.user.username);
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

    const switchToProfile = () => {
        playExpandedAnimation();
        setTimeout(() => {
            navigate('/profile');
        }, 1500);
    };
    const contextValue = { switchToSignUp, switchToLogIn, switchToProfile };

    useEffect(() => {
        if (token) {
            navigate('/profile');
            fetchGuests();
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
            <Styled.Container>
                <Styled.BoxContainer>
                    <Styled.TopContainer>
                        <Styled.BackDrop
                            initial={false}
                            animate={isExpanded ? 'expanded' : 'collapsed'}
                            variants={backDropVariants}
                            transition={expandingTransition}
                        />
                        {active === 'login' && (
                            <Styled.HeaderContainer>
                                <Heading variant='h1'>
                                    Welcome <br /> Back Foodie!
                                </Heading>
                                <Heading variant='h5'>
                                    Please log in to continue
                                </Heading>
                            </Styled.HeaderContainer>
                        )}
                        {active === 'signup' && (
                            <Styled.HeaderContainer>
                                <Heading variant='h1'>
                                    Create An
                                    <br />
                                    Account
                                </Heading>
                                <Heading variant='h5'>
                                    Sign up & help your guests!
                                </Heading>
                            </Styled.HeaderContainer>
                        )}
                    </Styled.TopContainer>
                    <Styled.InnerContainer>
                        {active === 'login' && (
                            <LoginForm handleLogin={handleLogin} />
                        )}
                        {active === 'signup' && (
                            <SignUpForm handleSubmit={handleSubmit} />
                        )}
                    </Styled.InnerContainer>
                </Styled.BoxContainer>
            </Styled.Container>
        </AccountContext.Provider>
    );
};

export default Login;
