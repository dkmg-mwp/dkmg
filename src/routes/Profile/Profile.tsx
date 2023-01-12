import { useEffect, useState } from 'react';
import { RiUserAddFill } from 'react-icons/ri';
import { InnerContainer, TextContainer } from '../Search/Search.styles';
import {
    Container,
    Input,
    InputSection,
    Title,
    Wrapper,
} from './Profile.styles';
import { addGuest, fetchGuests, removeGuest } from '../../api/dkmg-api';

const User = () => {
    const [guests, setGuests] = useState<Guest[]>([]);
    const [input, setInput] = useState('');
    const [dairyFree, setDairyFree] = useState(false);
    const [glutenFree, setGlutenFree] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);

    const handleAdd = async (name: string) => {
        if (input.length === 0) return;
        await addGuest(name, dairyFree, glutenFree, vegan, vegetarian);
        setInput('');
        setDairyFree(false);
        setGlutenFree(false);
        setVegan(false);
        setVegetarian(false);
        await fetchGuests().then(setGuests);
    };

    const handleRemove = async (id: string) => {
        await removeGuest(id).then(() => fetchGuests().then(setGuests));
    };

    const guestCreationRender = () => {
        return (
            <span>
                {
                    <InputSection>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Input
                                type='text'
                                value={input}
                                placeholder='Enter name'
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <div>
                                <h4>Restrictions:</h4>
                                <ul>
                                    <li>
                                        <input
                                            type='checkbox'
                                            name='Dairy Free'
                                            checked={dairyFree}
                                            onChange={() =>
                                                setDairyFree((prev) => !prev)
                                            }
                                        />
                                        <label>Dairy Free</label>
                                    </li>
                                    <li>
                                        <input
                                            type='checkbox'
                                            name='Gluten Free'
                                            checked={glutenFree}
                                            onChange={() =>
                                                setGlutenFree((prev) => !prev)
                                            }
                                        />
                                        <label>Gluten Free</label>
                                    </li>
                                    <li>
                                        <input
                                            type='checkbox'
                                            name='Vegan'
                                            checked={vegan}
                                            onChange={() =>
                                                setVegan((prev) => !prev)
                                            }
                                        />
                                        <label>Vegan</label>
                                    </li>
                                    <li>
                                        <input
                                            type='checkbox'
                                            name='Vegetarian'
                                            checked={vegetarian}
                                            onChange={() =>
                                                setVegetarian((prev) => !prev)
                                            }
                                        />
                                        <label>Vegetarian</label>
                                    </li>
                                </ul>
                            </div>
                            <button
                                onClick={() => handleAdd(input)}
                                type='submit'
                            >
                                <RiUserAddFill size={25} />
                            </button>
                        </form>
                    </InputSection>
                }
            </span>
        );
    };

    const guestRender = () => {
        return (
            <span>
                {guests.map((g) => (
                    <div key={g.id}>
                        <p>{g.name}</p>
                        <button onClick={() => handleRemove(g.id)}>
                            Remove
                        </button>
                    </div>
                ))}
            </span>
        );
    };

    useEffect(() => {
        document.title = 'Profile';
        fetchGuests().then(setGuests);
    }, []);

    return (
        <Container>
            <Wrapper>
                <TextContainer>
                    <Title>Who’s your annoying friend?</Title>
                </TextContainer>

                <InnerContainer>
                    {guestCreationRender()}
                    {guestRender()}
                </InnerContainer>
            </Wrapper>
        </Container>
    );
};

export default User;
