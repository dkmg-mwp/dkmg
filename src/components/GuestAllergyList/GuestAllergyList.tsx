import { CiWheat } from 'react-icons/ci';
import { RiPlantFill, RiPlantLine } from 'react-icons/ri';
import { TbMilk } from 'react-icons/tb';
import { useProfile } from '../../routes/Profile/Profile.context';
import * as Styled from './GuestAllergyList.style';

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
        <Styled.CardAccordion>
            <Styled.CardAccordionBox>
                <Styled.CardAccordionInfo>
                    {guest.dairyFree ? (
                        <Styled.IncludeTag>
                            <label>Dairy Free</label>
                            <TbMilk size={30} />
                            <input
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
                        </Styled.IncludeTag>
                    ) : (
                        <Styled.ExcludeTag>
                            <label>Dairy Free</label>
                            <TbMilk size={30} />
                            <input
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
                        </Styled.ExcludeTag>
                    )}
                    {guest.glutenFree ? (
                        <Styled.IncludeTag>
                            <label>Gluten Free</label>
                            <CiWheat size={30} />
                            <input
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
                        </Styled.IncludeTag>
                    ) : (
                        <Styled.ExcludeTag>
                            <label>Gluten Free</label>
                            <CiWheat size={30} />
                            <input
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
                        </Styled.ExcludeTag>
                    )}
                    {guest.vegan ? (
                        <Styled.IncludeTag>
                            <label>Vegan Safe</label>
                            <RiPlantFill size={30} />
                            <input
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
                        </Styled.IncludeTag>
                    ) : (
                        <Styled.ExcludeTag>
                            <label>Vegan Safe</label>
                            <RiPlantFill size={30} />
                            <input
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
                        </Styled.ExcludeTag>
                    )}
                    {guest.vegetarian ? (
                        <Styled.IncludeTag>
                            <label>Vegetarian Safe</label>
                            <RiPlantLine size={30} />
                            <input
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
                        </Styled.IncludeTag>
                    ) : (
                        <Styled.ExcludeTag>
                            <label>Vegetarian Safe</label>
                            <RiPlantLine size={30} />
                            <input
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
                        </Styled.ExcludeTag>
                    )}
                </Styled.CardAccordionInfo>
            </Styled.CardAccordionBox>
        </Styled.CardAccordion>
    );
};

export default GuestAllergyList;
