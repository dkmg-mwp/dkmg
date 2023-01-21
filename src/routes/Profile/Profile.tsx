import { useEffect, useState } from 'react';
import { RiPlantFill, RiPlantLine, RiUserAddFill } from 'react-icons/ri';
import {
    InnerContainer,
    SearchContainer,
    SearchResult,
    TextContainer,
} from '../Search/Search.styles';
import * as Styled from './Profile.styles';
import { useProfile } from './Profile.context';
import GuestCard from '../../components/GuestCard/GuestCard';
import { Form } from 'react-router-dom';
import { CiWheat } from 'react-icons/ci';
import { TbMilk } from 'react-icons/tb';
import { MediumButton } from '../../components/Buttons/Button.styles';
import { v4 as uuidv4 } from 'uuid';
import { useLogin } from '../Login/Login.context';
import { Navigate } from 'react-router-dom';

const User = () => {
    const { user, guests, fetchGuests, handleAddGuest } = useProfile();
    const { token } = useLogin();
    const [input, setInput] = useState('');
    const [dairyFree, setDairyFree] = useState(false);
    const [glutenFree, setGlutenFree] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);

    const handleAdd = async (name: string) => {
        if (input.length === 0) return;
        if (user !== null) {
            const data = {
                id: uuidv4(), // ID borde(?) komma från DB men kanske behöver vara så just nu, kanske fuckar med db poulation av guests?
                name,
                dairyFree,
                glutenFree,
                vegan,
                vegetarian,
                userId: user.id,
            };
            await handleAddGuest(data);
            await fetchGuests();
            setInput('');
            setDairyFree(false);
            setGlutenFree(false);
            setVegan(false);
            setVegetarian(false);
        }
    };

    const guestCreationRender = () => {
        return (
            <Styled.GuestContainer>
                {
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Styled.InputSection>
                            <Styled.Input
                                type='text'
                                value={input}
                                placeholder='Enter name'
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <MediumButton
                                onClick={() => handleAdd(input)}
                                type='submit'
                                bgColor='#2b8872'
                            >
                                {'Add guest'}
                                <RiUserAddFill />
                            </MediumButton>
                        </Styled.InputSection>
                        {input.length !== 0 && (
                            <Styled.ListSection>
                                <Styled.Subtitle>Restrictions:</Styled.Subtitle>
                                <Styled.List>
                                    <Styled.ListItem>
                                        <TbMilk size={30} />
                                        <Styled.Checkbox
                                            type='checkbox'
                                            name='Dairy Free'
                                            checked={dairyFree}
                                            onChange={() =>
                                                setDairyFree((prev) => !prev)
                                            }
                                        />
                                        <Styled.Label>Dairy Free</Styled.Label>
                                    </Styled.ListItem>
                                    <Styled.ListItem>
                                        <CiWheat size={30} />
                                        <Styled.Checkbox
                                            type='checkbox'
                                            name='Gluten Free'
                                            checked={glutenFree}
                                            onChange={() =>
                                                setGlutenFree((prev) => !prev)
                                            }
                                        />
                                        <Styled.Label>Gluten Free</Styled.Label>
                                    </Styled.ListItem>
                                    <Styled.ListItem>
                                        <RiPlantFill size={30} />
                                        <Styled.Checkbox
                                            type='checkbox'
                                            name='Vegan'
                                            checked={vegan}
                                            onChange={() =>
                                                setVegan((prev) => !prev)
                                            }
                                        />
                                        <Styled.Label>Vegan Safe</Styled.Label>
                                    </Styled.ListItem>
                                    <Styled.ListItem>
                                        <RiPlantLine size={30} />
                                        <Styled.Checkbox
                                            type='checkbox'
                                            name='Vegetarian'
                                            checked={vegetarian}
                                            onChange={() =>
                                                setVegetarian((prev) => !prev)
                                            }
                                        />
                                        <Styled.Label>
                                            Vegetarian Safe
                                        </Styled.Label>
                                    </Styled.ListItem>
                                </Styled.List>
                            </Styled.ListSection>
                        )}
                    </Form>
                }
            </Styled.GuestContainer>
        );
    };

    useEffect(() => {
        document.title === 'Profile';
    }, []);

    return !token ? (
        <Navigate to='/login' />
    ) : (
        <Styled.Container>
            <Styled.Wrapper>
                <TextContainer>
                    <Styled.Title>Who’s your annoying friend?</Styled.Title>
                </TextContainer>
                <InnerContainer>
                    <SearchContainer>{guestCreationRender()}</SearchContainer>{' '}
                    {/* Search container??? Vi skapar i den, söker ej  */}
                    <Styled.Guests>
                        {user && (
                            <SearchResult>
                                {[...guests]
                                    .reverse()
                                    .filter((guest) => guest.userId === user.id)
                                    .map((guest) => (
                                        <GuestCard
                                            key={guest.id}
                                            guest={guest}
                                        />
                                    ))}
                            </SearchResult>
                        )}
                    </Styled.Guests>
                </InnerContainer>
            </Styled.Wrapper>
        </Styled.Container>
    );
};

export default User;
