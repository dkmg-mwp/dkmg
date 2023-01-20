import { useContext, useState } from 'react';
import { AccountContext } from '../../../routes/Login/Login.context';

import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
} from '../LoginForm/LoginForm.styles';
import * as StyledButton from './../../Buttons/Button.styles';

type Props = {
    handleSubmit: (email: string, password: string) => void;
};

const SignUpForm = ({ handleSubmit }: Props) => {
    const { switchToLogIn, switchToProfile } = useContext(AccountContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <BoxContainer>
            <FormContainer
                onSubmit={(e) => {
                    handleSubmit(email, password), e.preventDefault();
                }}
            >
                <Input
                    type='email'
                    placeholder='Email'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type='password'
                    placeholder='Password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <StyledButton.SignUpPageButton
                    type='submit'
                    onClick={switchToProfile}
                >
                    Sign up
                </StyledButton.SignUpPageButton>
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
