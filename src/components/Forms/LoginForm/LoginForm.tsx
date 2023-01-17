import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../../../routes/Login/Login.context';

import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from './LoginForm.styles';

const LoginForm = () => {
    const { switchToSignUp } = useContext(AccountContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const res = await axios.post(`https://dkmg.glitch.me/auth/login`, {
            email: email,
            password: password,
        });
        console.log(res);
        setToken(res.data);
        if (token) {
            navigate('/profile');
        } else {
            navigate('/login');
        }
        console.log(token);
    };

    return (
        <BoxContainer>
            <FormContainer
                onSubmit={(e) => {
                    handleLogin(), e.preventDefault();
                }}
            >
                <Input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <SubmitButton type='submit'>Log in</SubmitButton>
            </FormContainer>
            <MutedLink>Forget your password?</MutedLink>
            <MutedLink>
                {' '}
                Don&apos;t have an account?{' '}
                <BoldLink href='#' onClick={switchToSignUp}>
                    Sign Up
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    );
};

export default LoginForm;
