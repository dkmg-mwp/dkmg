import { useEffect, useState } from 'react';
import { RiUserAddFill } from 'react-icons/ri';
import {
    InnerContainer,
    SearchContainer,
    SearchResult,
    TextContainer,
} from '../Search/Search.styles';
import {
    Container,
    Input,
    InputSection,
    Title,
    Wrapper,
} from './Profile.styles';
import { useProfile } from './Profile.context';
import GuestCard from '../../components/GuestCard/GuestCard';
import { CardContainer } from '../../components/Card/Card.styles';

const User = () => {
    const { guests, handleAddProfile } = useProfile();
    const [input, setInput] = useState('');
    const [dairyFree, setDairyFree] = useState(false);
    const [glutenFree, setGlutenFree] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);

    const handleAdd = async (name: string) => {
        if (input.length === 0) return;
        await handleAddProfile(name, dairyFree, glutenFree, vegan, vegetarian);
        setInput('');
        setDairyFree(false);
        setGlutenFree(false);
        setVegan(false);
        setVegetarian(false);
    };

    const guestCreationRender = () => {
        return (
            <CardContainer>
                {
                    <SearchContainer>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <InputSection>
                                <Input
                                    type='text'
                                    value={input}
                                    placeholder='Enter name'
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                <button
                                    onClick={() => handleAdd(input)}
                                    type='submit'
                                >
                                    <RiUserAddFill size={25} />
                                </button>
                            </InputSection>
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
                        </form>
                    </SearchContainer>
                }
            </CardContainer>
        );
    };

    const guestRender = () => {
        return (
            <SearchResult>
                {guests.map((guest) => (
                    <GuestCard key={guest.id} guest={guest} />
                ))}
            </SearchResult>
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
                    <SearchContainer> {guestCreationRender()}</SearchContainer>

                    <SearchResult> {guestRender()}</SearchResult>
                </InnerContainer>
            </Wrapper>
        </Container>
    );
};

export default User;
