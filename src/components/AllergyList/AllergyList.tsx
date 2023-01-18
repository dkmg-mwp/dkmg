import { CiWheat } from 'react-icons/ci';
import { RiPlantFill, RiPlantLine } from 'react-icons/ri';
import { TbMilk } from 'react-icons/tb';

import {
    CardAccordion,
    CardAccordionBox,
    CardAccordionInfo,
    ExcludeTag,
    IncludeTag,
} from './AllergyList.styles';

type Props = {
    dish: Dish;
};

const AllergyList = ({ dish }: Props) => {
    return (
        <CardAccordion>
            <CardAccordionBox>
                <CardAccordionInfo>
                    {dish.dairyFree ? (
                        <IncludeTag>
                            {' '}
                            <TbMilk size={30} />
                            Dairy Free: Yes
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            {' '}
                            <TbMilk size={30} /> Dairy Free: No{' '}
                        </ExcludeTag>
                    )}
                </CardAccordionInfo>
                <CardAccordionInfo>
                    {dish.glutenFree ? (
                        <IncludeTag>
                            {' '}
                            <CiWheat size={30} /> Gluten Free: Yes
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            {' '}
                            <CiWheat size={30} />
                            Gluten Free: No
                        </ExcludeTag>
                    )}
                </CardAccordionInfo>
                <CardAccordionInfo>
                    {dish.vegan ? (
                        <IncludeTag>
                            {' '}
                            <RiPlantFill size={30} /> Vegan Safe: Yes
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            {' '}
                            <RiPlantFill size={30} /> Vegan Safe: No
                        </ExcludeTag>
                    )}
                </CardAccordionInfo>
                <CardAccordionInfo>
                    {dish.vegetarian ? (
                        <IncludeTag>
                            {' '}
                            <RiPlantLine size={30} />
                            Vegetarian Safe: Yes
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            {' '}
                            <RiPlantLine size={30} /> Vegetarian Safe: No
                        </ExcludeTag>
                    )}
                </CardAccordionInfo>
            </CardAccordionBox>
        </CardAccordion>
    );
};

export default AllergyList;
