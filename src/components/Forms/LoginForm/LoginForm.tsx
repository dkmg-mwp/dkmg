import { useContext, useState } from 'react';
import { AccountContext } from '../../../routes/Login/Login.context';
import { LargeButton } from '../../styles/Button.styles';
import * as Styled from '../Form.styles';

type Props = {
    handleLogin: (email: string, password: string) => void;
};

const LoginForm = ({ handleLogin }: Props) => {
    const { switchToSignUp, switchToProfile } = useContext(AccountContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Styled.BoxContainer>
            <Styled.FormContainer
                onSubmit={(e) => {
                    handleLogin(email, password), e.preventDefault();
                }}
            >
                <Styled.Input
                    type='email'
                    placeholder='Email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Styled.Input
                    type='password'
                    placeholder='Password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <LargeButton
                    bgColor='#2b8872'
                    type='submit'
                    onClick={switchToProfile}
                >
                    Log in
                </LargeButton>
            </Styled.FormContainer>
            <Styled.MutedLink>
                {' '}
                Don&apos;t have an account?{' '}
                <Styled.BoldLink href='#' onClick={switchToSignUp}>
                    Sign Up
                </Styled.BoldLink>
            </Styled.MutedLink>{' '}
            <Styled.MutedLink />
        </Styled.BoxContainer>
    );
};

export default LoginForm;
