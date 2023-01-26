import { MediumButton } from '../styles/Button.styles';
import Heading from '../styles/Heading.styles';
import * as Styled from './Prompt.styles';

type Props = {
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    handleLogOut: React.MouseEventHandler<HTMLButtonElement>;
};

const Prompt = ({ handleClick, handleLogOut }: Props) => {
    return (
        <Styled.PromptContainer>
            <Styled.Card>
                <Styled.Group>
                    <Styled.Icon />
                </Styled.Group>
                <Heading variant='h4'>Log out from DMKG?</Heading>
                <Heading variant='p'>
                    Are you sure you want to log out from your account ?
                </Heading>
                <Styled.ButtonContainer>
                    <MediumButton bgColor='#2b8872' onClick={handleClick}>
                        Cancel
                    </MediumButton>
                    <MediumButton bgColor='#ef8a62' onClick={handleLogOut}>
                        Log out
                    </MediumButton>
                </Styled.ButtonContainer>
            </Styled.Card>
        </Styled.PromptContainer>
    );
};

export default Prompt;
