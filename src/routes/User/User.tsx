import { useEffect, useState } from 'react';
import { RiUserAddFill } from 'react-icons/ri';
import { InnerContainer, TextContainer } from '../Search/Search.styles';
import { Container, Input, InputSection, Title, Wrapper } from './User.styles';
import { addGuest, fetchGuests, removeGuest } from '../../api/dkmg-api';

const User = () => {
    const [guests, setGuests] = useState<Guest[]>([]);
    const [input, setInput] = useState('');
    const [dairyFree, setDairyFree] = useState(false);
    const [glutenFree, setGlutenFree] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);

    const handleDairyFree = () => {
        setDairyFree((prev) => !prev);
    };

    const handleGlutenFree = () => {
        setGlutenFree((prev) => !prev);
    };

    const handleVegan = () => {
        setVegan((prev) => !prev);
    };

    const handleVegetarian = () => {
        setVegetarian((prev) => !prev);
    };

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
                                            value={dairyFree.toString()}
                                            onChange={handleDairyFree}
                                        />
                                        <label>Dairy Free</label>
                                    </li>
                                    <li>
                                        <input
                                            type='checkbox'
                                            name='Gluten Free'
                                            value={glutenFree.toString()}
                                            onChange={handleGlutenFree}
                                        />
                                        <label>Gluten Free</label>
                                    </li>
                                    <li>
                                        <input
                                            type='checkbox'
                                            name='Vegan'
                                            value={vegan.toString()}
                                            onChange={handleVegan}
                                        />
                                        <label>Vegan</label>
                                    </li>
                                    <li>
                                        <input
                                            type='checkbox'
                                            name='Vegetarian'
                                            value={vegetarian.toString()}
                                            onChange={handleVegetarian}
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
                    {guestRender()}
                </InnerContainer>
            </Wrapper>
        </Container>
    );
};

export default User;
