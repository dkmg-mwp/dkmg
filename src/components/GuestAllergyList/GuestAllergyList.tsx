import { CiWheat } from 'react-icons/ci';
import { RiPlantFill, RiPlantLine } from 'react-icons/ri';
import { TbMilk } from 'react-icons/tb';
import { useProfile } from '../../routes/Profile/Profile.context';
import {
    List,
    ListItem,
    ListSection,
} from '../../routes/Profile/Profile.styles';

import Heading from '../styles/Heading.styles';
import * as Styled from './GuestAllergyList.styles';

const GuestAllergyList = ({ guest }: GuestList) => {
    const { handleUpdateGuest } = useProfile();

    const handleUpdate = async (
        id: string,
        restriction: boolean,
        choice: string
    ) => {
        await handleUpdateGuest(id, restriction, choice);
    };

    return (
        <ListSection>
            <Heading variant={'h4'}>Restrictions:</Heading>
            <List>
                {guest.dairyFree ? (
                    <ListItem>
                        <Styled.AllergyTag include>
                            <TbMilk size={30} />
                            <Styled.Checkbox
                                type='checkbox'
                                name='Dairy Free'
                                checked={guest.dairyFree}
                                onChange={() => {
                                    handleUpdate(
                                        guest.id,
                                        guest.dairyFree,
                                        'dairyFree'
                                    );
                                }}
                            />
                            <Styled.Label>No Dairy, here!</Styled.Label>
                        </Styled.AllergyTag>
                    </ListItem>
                ) : (
                    <ListItem>
                        <Styled.AllergyTag>
                            <TbMilk size={30} />
                            <Styled.Checkbox
                                type='checkbox'
                                name='Dairy Free'
                                checked={guest.dairyFree}
                                onChange={() => {
                                    handleUpdate(
                                        guest.id,
                                        guest.dairyFree,
                                        'dairyFree'
                                    );
                                }}
                            />
                            <Styled.Label>Dairy sensitive?</Styled.Label>
                        </Styled.AllergyTag>
                    </ListItem>
                )}
                {guest.glutenFree ? (
                    <ListItem>
                        <Styled.AllergyTag include>
                            <CiWheat size={30} />
                            <Styled.Checkbox
                                type='checkbox'
                                name='Gluten Free'
                                checked={guest.glutenFree}
                                onChange={() => {
                                    handleUpdate(
                                        guest.id,
                                        guest.glutenFree,
                                        'glutenFree'
                                    );
                                }}
                            />
                            <Styled.Label>Is glutenintolerant!</Styled.Label>
                        </Styled.AllergyTag>
                    </ListItem>
                ) : (
                    <ListItem>
                        <Styled.AllergyTag>
                            <CiWheat size={30} />
                            <Styled.Checkbox
                                type='checkbox'
                                name='Gluten Free'
                                checked={guest.glutenFree}
                                onChange={() => {
                                    handleUpdate(
                                        guest.id,
                                        guest.glutenFree,
                                        'glutenFree'
                                    );
                                }}
                            />
                            <Styled.Label>Glutenintolerant?</Styled.Label>
                        </Styled.AllergyTag>
                    </ListItem>
                )}
                {guest.vegan ? (
                    <ListItem>
                        <Styled.AllergyTag include>
                            <RiPlantFill size={30} />
                            <Styled.Checkbox
                                type='checkbox'
                                name='Vegan'
                                checked={guest.vegan}
                                onChange={() => {
                                    handleUpdate(
                                        guest.id,
                                        guest.vegan,
                                        'vegan'
                                    );
                                }}
                            />
                            <Styled.Label>Is Vegan!</Styled.Label>
                        </Styled.AllergyTag>
                    </ListItem>
                ) : (
                    <ListItem>
                        <Styled.AllergyTag>
                            <RiPlantFill size={30} />
                            <Styled.Checkbox
                                type='checkbox'
                                name='Vegan'
                                checked={guest.vegan}
                                onChange={() => {
                                    handleUpdate(
                                        guest.id,
                                        guest.vegan,
                                        'vegan'
                                    );
                                }}
                            />
                            <Styled.Label>Vegan?</Styled.Label>
                        </Styled.AllergyTag>
                    </ListItem>
                )}
                {guest.vegetarian ? (
                    <ListItem>
                        <Styled.AllergyTag include>
                            <RiPlantLine size={30} />
                            <Styled.Checkbox
                                type='checkbox'
                                name='Vegetarian'
                                checked={guest.vegetarian}
                                onChange={() => {
                                    handleUpdate(
                                        guest.id,
                                        guest.vegetarian,
                                        'vegetarian'
                                    );
                                }}
                            />
                            <Styled.Label>Is Vegetarian!</Styled.Label>
                        </Styled.AllergyTag>
                    </ListItem>
                ) : (
                    <ListItem>
                        <Styled.AllergyTag>
                            <RiPlantLine size={30} />
                            <Styled.Checkbox
                                type='checkbox'
                                name='Vegetarian'
                                checked={guest.vegetarian}
                                onChange={() => {
                                    handleUpdate(
                                        guest.id,
                                        guest.vegetarian,
                                        'vegetarian'
                                    );
                                }}
                            />
                            <Styled.Label>Vegetarian?</Styled.Label>
                        </Styled.AllergyTag>
                    </ListItem>
                )}
            </List>
        </ListSection>
    );
};

export default GuestAllergyList;
