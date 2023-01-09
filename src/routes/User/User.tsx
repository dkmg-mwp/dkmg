import { useState } from 'react';
import { RiUserAddFill } from 'react-icons/ri';
import { InnerContainer, TextContainer } from '../Search/Search.styles';
import { Container, Input, InputSection, Title, Wrapper } from './User.styles';

const User = () => {
    const [guest, setGuest] = useState<Guest[]>([]);

    return (
        <Container>
            <Wrapper>
                <TextContainer>
                    <Title>Who’s your annoying friend?</Title>
                </TextContainer>

                <InnerContainer>
                    <InputSection>
                        <Input />
                        <RiUserAddFill size={25} />
                    </InputSection>
                </InnerContainer>
            </Wrapper>
        </Container>
    );
};

export default User;
