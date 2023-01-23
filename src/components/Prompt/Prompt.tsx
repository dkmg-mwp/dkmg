import * as Styled from './Prompt.styles';

const Prompt = () => {
    return (
        <Styled.Container>
            <Styled.PromptContainer>
                <Styled.SmallerContainer>
                    <Styled.Card>
                        <Styled.Group />
                        <Styled.H3>Log out from DMKG?</Styled.H3>
                        <Styled.H5>
                            Are you sure you want to log out from your account ?
                        </Styled.H5>
                        <Styled.ButtonContainer>
                            <Styled.ButtonCancel>Cancel</Styled.ButtonCancel>
                            <Styled.ButtonLogout />
                        </Styled.ButtonContainer>
                    </Styled.Card>
                </Styled.SmallerContainer>
            </Styled.PromptContainer>
        </Styled.Container>
    );
};

export default Prompt;
