import { useEffect, useState } from 'react';
import { RiPlantFill, RiPlantLine, RiUserAddFill } from 'react-icons/ri';
import { CiWheat } from 'react-icons/ci';
import { TbMilk } from 'react-icons/tb';
import { Navigate, Form } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import GuestCard from '../../components/GuestCard/GuestCard';
import { MediumButton } from '../../components/styles/Button.styles';
import { LoadingOverlay } from '../../components/Loader/LoadingOverlay';
import { useLogin } from '../Login/Login.context';
import { useProfile } from './Profile.context';
import Heading from '../../components/styles/Heading.styles';
import * as Styled from './Profile.styles';

const User = () => {
    const {
        user,
        guests,
        fetchGuests,
        handleAddGuest,
        username,
        loading,
        setLoading,
    } = useProfile();
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
                id: uuidv4(),
                name,
                dairyFree,
                glutenFree,
                vegan,
                vegetarian,
                userId: user,
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
                                bgColor={`${
                                    input.length !== 0 ? '#ef8a62' : '#2b8872'
                                }`}
                            >
                                {'Add guest'}
                                <RiUserAddFill />
                            </MediumButton>
                        </Styled.InputSection>
                        {input.length !== 0 && (
                            <Styled.ListSection>
                                <Heading variant={'h4'}>Restrictions:</Heading>
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
                                        <Styled.Label>
                                            Dairy sensitive?
                                        </Styled.Label>
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
                                        <Styled.Label>
                                            Glutenintolerant?
                                        </Styled.Label>
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
                                        <Styled.Label>Vegan?</Styled.Label>
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
                                        <Styled.Label>Vegetarian?</Styled.Label>
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
        setLoading(true);
        try {
            fetchGuests();
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }, []);
    
    useEffect(() => {
        setLoading(true);
        fetchGuests().then(() => setLoading(false));
    }, []);

    if (!token) {
        return <Navigate to='/login' />;
    }

    if (loading) {
        return <LoadingOverlay />;
    }

    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.TextContainer>
                    {username && (
                        <Heading variant={'h1'}>
                            Who’s your annoying friend {username} ?
                        </Heading>
                    )}
                </Styled.TextContainer>
                <Styled.GuestCreateContainer>
                    {guestCreationRender()}
                </Styled.GuestCreateContainer>
                {user && (
                    <Styled.AllGuest>
                        {[...guests]
                            .reverse()
                            .filter((guest) => guest.userId === user)
                            .map((guest) => (
                                <GuestCard key={guest.id} guest={guest} />
                            ))}
                    </Styled.AllGuest>
                )}
            </Styled.Wrapper>
        </Styled.Container>
    );
};

export default User;
