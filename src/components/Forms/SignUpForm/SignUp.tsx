import { useContext, useState } from 'react';
import { AccountContext } from '../../../routes/Login/Login.context';

import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from '../LoginForm/LoginForm.styles';

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
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <SubmitButton type='submit' onClick={switchToProfile}>
                    Sign up
                </SubmitButton>
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
