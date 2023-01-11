import { useEffect, useState } from 'react';
import { RiUserAddFill } from 'react-icons/ri';
import { InnerContainer, TextContainer } from '../Search/Search.styles';
import { Container, Input, InputSection, Title, Wrapper } from './User.styles';
import { addGuest, fetchGuests, removeGuest } from '../../api/dkmg-api';

const User = () => {
    const [guests, setGuests] = useState<Guest[]>([]);
    const [input, setInput] = useState('');

    const handleAdd = async (name: string) => {
        if (input.length === 0) return;
        await addGuest(name);
        setInput('');
        await fetchGuests().then(setGuests);
    };

    const handleRemove = async (id: string) => {
        await removeGuest(id).then(() => fetchGuests().then(setGuests));
    };

    useEffect(() => {
        document.title = 'User';
        fetchGuests().then(setGuests);
    }, []);
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
                            onClick={() => handleAdd(input)}
                            size={25}
                        />
                    </InputSection>
                    {guests.map((g) => (
                        <div key={g.id}>
                            <p>{g.name}</p>
                            <button onClick={() => handleRemove(g.id)}>
                                click
                            </button>
                        </div>
                    ))}
                </InnerContainer>
            </Wrapper>
        </Container>
    );
};

export default User;
