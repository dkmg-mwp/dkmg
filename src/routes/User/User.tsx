import { useState } from 'react';
import { RiUserAddFill } from 'react-icons/ri';
import { InnerContainer, TextContainer } from '../Search/Search.styles';
import { Container, Input, InputSection, Title, Wrapper } from './User.styles';
import { v4 as uuidv4 } from 'uuid';

const User = () => {
    const [guest, setGuest] = useState<Guest[]>([]);
    const [input, setInput] = useState('');

    const customId = uuidv4();

    const handleGuest = (guestInput: string) => {
        if (input.length === 0) return;
        const guestName = [
            {
                id: customId,
                name: guestInput,
            },
        ];
        setGuest(guestName);
        setInput('');
        // There might be a problem with setGuest is not finished afther one click and the state is always one click behind. Needs to be tested more
    };

    return (
        <Container>
            <Wrapper>
                <TextContainer>
                    <Title>Who’s your annoying friend?</Title>
                </TextContainer>

                <InnerContainer>
                    <InputSection>
                        <Input
                            type='text'
                            value={input}
                            placeholder='Enter name'
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <RiUserAddFill
                            onClick={() => handleGuest(input)}
                            size={25}
                        />
                    </InputSection>
                </InnerContainer>
            </Wrapper>
        </Container>
    );
};

export default User;
