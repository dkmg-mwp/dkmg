// import axios from 'axios';
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
} from '../LoginForm/LoginForm.styles';

const SignUpForm = () => {
    const { switchToLogIn } = useContext(AccountContext);
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const res = await axios.post(`https://dkmg.glitch.me/auth/register`, {
            firstname: firstName,
            email: email,
            password: password,
        });
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
                    handleSubmit(), e.preventDefault();
                }}
            >
                <Input
                    type='text'
                    placeholder='Full Name'
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                    type='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <SubmitButton type='submit'>Sign up</SubmitButton>
            </FormContainer>

            <MutedLink>
                Already have an account?
                <BoldLink href='#' onClick={switchToLogIn}>
                    Log in
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    );
};

export default SignUpForm;
