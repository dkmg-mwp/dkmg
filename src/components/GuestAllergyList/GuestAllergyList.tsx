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
    dairyFree: boolean;
    setDairyFree: React.Dispatch<React.SetStateAction<boolean>>;
    glutenFree: boolean;
    setGlutenFree: React.Dispatch<React.SetStateAction<boolean>>;
    vegan: boolean;
    setVegan: React.Dispatch<React.SetStateAction<boolean>>;
    vegetarian: boolean;
    setVegetarian: React.Dispatch<React.SetStateAction<boolean>>;
};

const GuestAllergyList = ({
    guest,
    dairyFree,
    setDairyFree,
    glutenFree,
    setGlutenFree,
    vegan,
    setVegan,
    vegetarian,
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
                                checked={dairyFree}
                                onChange={() => setDairyFree((prev) => !prev)}
                            />
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            <TbMilk size={30} />
                            <input
                                type='checkbox'
                                name='Dairy Free'
                                checked={dairyFree}
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
                                checked={glutenFree}
                                onChange={() => setGlutenFree((prev) => !prev)}
                            />
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            <CiWheat size={30} />
                            <input
                                type='checkbox'
                                name='Gluten Free'
                                checked={glutenFree}
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
                                checked={vegan}
                                onChange={() => setVegan((prev) => !prev)}
                            />
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            <RiPlantFill size={30} />
                            <input
                                type='checkbox'
                                name='Vegan'
                                checked={vegan}
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
                                checked={vegetarian}
                                onChange={() => setVegetarian((prev) => !prev)}
                            />
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            <RiPlantLine size={30} />
                            <input
                                type='checkbox'
                                name='Vegetarian'
                                checked={vegetarian}
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
