import { useContext, useState } from 'react';
import { AccountContext } from '../../../routes/Login/Login.context';
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
} from './LoginForm.styles';
import * as StyledButton from './../../Buttons/Button.styles';

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
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type='password'
                    placeholder='Password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <StyledButton.LargeButton
                    bgColor='#2b8872'
                    type='submit'
                    onClick={switchToProfile}
                >
                    Log in
                </StyledButton.LargeButton>
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
