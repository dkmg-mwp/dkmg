import { useContext, useState } from 'react';
import { AccountContext } from '../../../routes/Login/Login.context';
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from './LoginForm.styles';

type Props = {
    handleLogin: (email: string, password: string) => void;
};

const LoginForm = ({ handleLogin }: Props) => {
    const { switchToSignUp, switchToProfile } = useContext(AccountContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <BoxContainer>
            <FormContainer
                onSubmit={(e) => {
                    handleLogin(email, password), e.preventDefault();
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
                <SubmitButton type='submit' onClick={switchToProfile}>
                    Log in
                </SubmitButton>
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
