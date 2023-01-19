import { useEffect, useState } from 'react';
import { RiPlantFill, RiPlantLine, RiUserAddFill } from 'react-icons/ri';
import {
    InnerContainer,
    SearchContainer,
    SearchResult,
    TextContainer,
} from '../Search/Search.styles';
import {
    Checkbox,
    Container,
    GuestContainer,
    Guests,
    Input,
    InputSection,
    Label,
    List,
    ListItem,
    ListSection,
    Subtitle,
    Title,
    Wrapper,
} from './Profile.styles';
import { useProfile } from './Profile.context';
import GuestCard from '../../components/GuestCard/GuestCard';
import { Form } from 'react-router-dom';
import { CiWheat } from 'react-icons/ci';
import { TbMilk } from 'react-icons/tb';
import { AddButton } from '../../components/Buttons/Button.styles';
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
            <GuestContainer>
                x
                {
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <InputSection>
                            <Input
                                type='text'
                                value={input}
                                placeholder='Enter name'
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <AddButton
                                onClick={() => handleAdd(input)}
                                type='submit'
                            >
                                {'Add guest'}
                                <RiUserAddFill size={15} />
                            </AddButton>
                        </InputSection>
                        {input.length !== 0 && (
                            <ListSection>
                                <Subtitle>Restrictions:</Subtitle>
                                <List>
                                    <ListItem>
                                        <TbMilk size={30} />
                                        <Checkbox
                                            type='checkbox'
                                            name='Dairy Free'
                                            checked={dairyFree}
                                            onChange={() =>
                                                setDairyFree((prev) => !prev)
                                            }
                                        />
                                        <Label>Dairy Free</Label>
                                    </ListItem>
                                    <ListItem>
                                        <CiWheat size={30} />
                                        <Checkbox
                                            type='checkbox'
                                            name='Gluten Free'
                                            checked={glutenFree}
                                            onChange={() =>
                                                setGlutenFree((prev) => !prev)
                                            }
                                        />
                                        <Label>Gluten Free</Label>
                                    </ListItem>
                                    <ListItem>
                                        <RiPlantFill size={30} />
                                        <Checkbox
                                            type='checkbox'
                                            name='Vegan'
                                            checked={vegan}
                                            onChange={() =>
                                                setVegan((prev) => !prev)
                                            }
                                        />
                                        <Label>Vegan Safe</Label>
                                    </ListItem>
                                    <ListItem>
                                        <RiPlantLine size={30} />
                                        <Checkbox
                                            type='checkbox'
                                            name='Vegetarian'
                                            checked={vegetarian}
                                            onChange={() =>
                                                setVegetarian((prev) => !prev)
                                            }
                                        />
                                        <Label>Vegetarian Safe</Label>
                                    </ListItem>
                                </List>
                            </ListSection>
                        )}
                    </Form>
                }
            </GuestContainer>
        );
    };

    useEffect(() => {
        document.title === 'Profile';
    }, []);

    return !token ? (
        <Navigate to='/login' />
    ) : (
        <Container>
            <Wrapper>
                <TextContainer>
                    <Title>Who’s your annoying friend?</Title>
                </TextContainer>

                <InnerContainer>
                    <SearchContainer>{guestCreationRender()}</SearchContainer>

                    <Guests>
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
                    </Guests>
                </InnerContainer>
            </Wrapper>
        </Container>
    );
};

export default User;
