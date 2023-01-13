import { CiWheat } from 'react-icons/ci';
import { RiPlantFill, RiPlantLine } from 'react-icons/ri';
import { TbMilk } from 'react-icons/tb';
import {
    CardAccordion,
    CardAccordionBox,
    CardAccordionInfo,
    ExcludeTag,
    IncludeTag,
} from './GuestAllergyList.style';

type Props = {
    guest: Guest;
    setDairyFree: React.Dispatch<React.SetStateAction<boolean>>;
    setGlutenFree: React.Dispatch<React.SetStateAction<boolean>>;
    setVegan: React.Dispatch<React.SetStateAction<boolean>>;
    setVegetarian: React.Dispatch<React.SetStateAction<boolean>>;
};

const GuestAllergyList = ({
    guest,
    setDairyFree,
    setGlutenFree,
    setVegan,
    setVegetarian,
}: Props) => {
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
                                onChange={() => setDairyFree((prev) => !prev)}
                            />
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            <TbMilk size={30} />
                            <input
                                type='checkbox'
                                name='Dairy Free'
                                checked={guest.dairyFree}
                                onChange={() => setDairyFree((prev) => !prev)}
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
                                onChange={() => setGlutenFree((prev) => !prev)}
                            />
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            <CiWheat size={30} />
                            <input
                                type='checkbox'
                                name='Gluten Free'
                                checked={guest.glutenFree}
                                onChange={() => setGlutenFree((prev) => !prev)}
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
                                onChange={() => setVegan((prev) => !prev)}
                            />
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            <RiPlantFill size={30} />
                            <input
                                type='checkbox'
                                name='Vegan'
                                checked={guest.vegan}
                                onChange={() => setVegan((prev) => !prev)}
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
                                onChange={() => setVegetarian((prev) => !prev)}
                            />
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            <RiPlantLine size={30} />
                            <input
                                type='checkbox'
                                name='Vegetarian'
                                checked={guest.vegetarian}
                                onChange={() => setVegetarian((prev) => !prev)}
                            />
                        </ExcludeTag>
                    )}
                </CardAccordionInfo>
            </CardAccordionBox>
        </CardAccordion>
    );
};

export default GuestAllergyList;
