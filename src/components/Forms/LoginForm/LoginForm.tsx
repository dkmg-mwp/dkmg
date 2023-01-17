import { useContext } from 'react';
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
    return (
        <BoxContainer>
            <FormContainer>
                <Input type='email' placeholder='Email' />
                <Input type='password' placeholder='Password' />
            </FormContainer>
            <MutedLink>Forget your password?</MutedLink>
            <SubmitButton type='submit'>Log in</SubmitButton>
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
