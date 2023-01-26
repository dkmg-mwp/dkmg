import { useProfile } from '../../routes/Profile/Profile.context';
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
        <Styled.ListSection>
            <Heading variant={'h4'}>Restrictions:</Heading>
            <Styled.List>
                {guest.dairyFree ? (
                    <Styled.ListItem>
                        <Styled.AllergyTag include>
                            <Styled.Dairy size={30} />
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
                    </Styled.ListItem>
                ) : (
                    <Styled.ListItem>
                        <Styled.AllergyTag>
                            <Styled.Dairy size={30} />
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
                    </Styled.ListItem>
                )}
                {guest.glutenFree ? (
                    <Styled.ListItem>
                        <Styled.AllergyTag include>
                            <Styled.Gluten size={30} />
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
                    </Styled.ListItem>
                ) : (
                    <Styled.ListItem>
                        <Styled.AllergyTag>
                            <Styled.Gluten size={30} />
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
                    </Styled.ListItem>
                )}
                {guest.vegan ? (
                    <Styled.ListItem>
                        <Styled.AllergyTag include>
                            <Styled.Vegan size={30} />
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
                    </Styled.ListItem>
                ) : (
                    <Styled.ListItem>
                        <Styled.AllergyTag>
                            <Styled.Vegan size={30} />
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
                    </Styled.ListItem>
                )}
                {guest.vegetarian ? (
                    <Styled.ListItem>
                        <Styled.AllergyTag include>
                            <Styled.Vegetarian size={30} />
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
                    </Styled.ListItem>
                ) : (
                    <Styled.ListItem>
                        <Styled.AllergyTag>
                            <Styled.Vegetarian size={30} />
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
                    </Styled.ListItem>
                )}
            </Styled.List>
        </Styled.ListSection>
    );
};

export default GuestAllergyList;
