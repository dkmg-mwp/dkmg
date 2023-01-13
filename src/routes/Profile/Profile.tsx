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
            <GuestContainer>
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
                                        <Label>Vegan</Label>
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
                                        <Label>Vegetarian</Label>
                                    </ListItem>
                                </List>
                            </ListSection>
                        )}
                    </Form>
                }
            </GuestContainer>
        );
    };

    const guestRender = () => {
        return (
            <SearchResult>
                {[...guests].reverse().map((guest) => (
                    <GuestCard
                        key={guest.id}
                        guest={guest}
                        setDairyFree={setDairyFree}
                        setGlutenFree={setGlutenFree}
                        setVegan={setVegan}
                        setVegetarian={setVegetarian}
                    />
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
                    <SearchContainer>{guestCreationRender()}</SearchContainer>

                    <Guests> {guestRender()}</Guests>
                </InnerContainer>
            </Wrapper>
        </Container>
    );
};

export default User;

// document.addEventListener('click', e => {
//     console.log(e.target)
//     //om e.target är input
// })
