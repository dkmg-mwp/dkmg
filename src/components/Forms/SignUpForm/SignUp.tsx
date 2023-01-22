import { useContext, useState } from 'react';
import { AccountContext } from '../../../routes/Login/Login.context';
import { LargeButton } from '../../styles/Button.styles';
import * as Styled from '../LoginForm/Form.styles';

type Props = {
    handleSubmit: (email: string, password: string) => void;
};

const SignUpForm = ({ handleSubmit }: Props) => {
    const { switchToLogIn, switchToProfile } = useContext(AccountContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Styled.BoxContainer>
            <Styled.FormContainer
                onSubmit={(e) => {
                    handleSubmit(email, password), e.preventDefault();
                }}
            >
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
