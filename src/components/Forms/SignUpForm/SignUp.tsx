import { useContext, useState } from 'react';
import { AccountContext } from '../../../routes/Login/Login.context';
import { useProfile } from '../../../routes/Profile/Profile.context';
import { LargeButton } from '../../styles/Button.styles';
import * as Styled from '../LoginForm/Form.styles';

type Props = {
    handleSubmit: (username: Username , email: string, password: string) => void;
};

const SignUpForm = ({ handleSubmit }: Props) => {
    const { switchToLogIn, switchToProfile } = useContext(AccountContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { username, setUsername } = useProfile();

    return (
        <Styled.BoxContainer>
            <Styled.FormContainer
                onSubmit={(e) => {
                    handleSubmit(username, email, password), e.preventDefault();
                }}
            >
                <Styled.Input
                    type='name'
                    placeholder='Username'
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Styled.Input
                    type='email'
                    placeholder='Email'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Styled.Input
                    type='password'
                    placeholder='Password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <LargeButton
                    bgColor='#ef8a62'
                    type='submit'
                    onClick={switchToProfile}
                >
                    Sign up
                </LargeButton>
            </Styled.FormContainer>

            <Styled.MutedLink>
                Already have an account?
                <Styled.BoldLink href='#' onClick={switchToLogIn}>
                    Log in
                </Styled.BoldLink>
            </Styled.MutedLink>
        </Styled.BoxContainer>
    );
};

export default SignUpForm;
