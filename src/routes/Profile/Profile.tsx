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
import { useProfile } from './Profile.context';

const User = () => {
    const { guests, handleAddProfile, handleRemoveProfile } = useProfile();
    const [input, setInput] = useState('');
    const [dairyFree, setDairyFree] = useState(false);
    const [glutenFree, setGlutenFree] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);

    const handleAdd = async (name: string) => {
        if (input.length === 0) return;
        await handleAddProfile(name, dairyFree, glutenFree, vegan, vegetarian);
        setInput('');
    };

    const guestRender = () => {
        return (
            <span>
                {guests.map((g) => (
                    <div key={g.id}>
                        <p>{g.name}</p>
                        <button onClick={() => handleRemoveProfile(g.id)}>
                            Remove
                        </button>
                    </div>
                ))}
            </span>
        );
    };

    useEffect(() => {
        document.title = 'Profile';
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
                    {guestRender()}
                </InnerContainer>
            </Wrapper>
        </Container>
    );
};

export default User;
