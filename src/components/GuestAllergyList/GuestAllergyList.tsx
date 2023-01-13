import { CiWheat } from 'react-icons/ci';
import { RiPlantFill, RiPlantLine } from 'react-icons/ri';
import { TbMilk } from 'react-icons/tb';
import { useProfile } from '../../routes/Profile/Profile.context';
import {
    CardAccordion,
    CardAccordionBox,
    CardAccordionInfo,
    ExcludeTag,
    IncludeTag,
} from './GuestAllergyList.style';

const GuestAllergyList = ({ guest }: GuestList) => {
    const { handleUpdateProfile } = useProfile();

    const handleUpdate = async (
        id: string,
        restriction: boolean,
        choice: string
    ) => {
        await handleUpdateProfile(id, restriction, choice);
    };

    return (
        <CardAccordion>
            <CardAccordionBox>
                <CardAccordionInfo>
                    {guest.dairyFree ? (
                        <IncludeTag>
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
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
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
                        </ExcludeTag>
                    )}
                    {guest.glutenFree ? (
                        <IncludeTag>
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
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
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
                        </ExcludeTag>
                    )}
                    {guest.vegan ? (
                        <IncludeTag>
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
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
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
                        </ExcludeTag>
                    )}
                    {guest.vegetarian ? (
                        <IncludeTag>
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
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
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
                        </ExcludeTag>
                    )}
                </CardAccordionInfo>
            </CardAccordionBox>
        </CardAccordion>
    );
};

export default GuestAllergyList;
