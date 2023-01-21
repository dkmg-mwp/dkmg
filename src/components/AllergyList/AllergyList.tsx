import { CiWheat } from 'react-icons/ci';
import { RiPlantFill, RiPlantLine } from 'react-icons/ri';
import { TbMilk } from 'react-icons/tb';
import * as Styled from './AllergyList.styles';

type Props = {
    dish: Dish;
};

const AllergyList = ({ dish }: Props) => {
    return (
        <Styled.CardAccordion>
            <Styled.CardAccordionBox>
                <Styled.CardAccordionInfo>
                    {dish.dairyFree ? (
                        <Styled.IncludeTag>
                            {' '}
                            <TbMilk size={30} />
                            Dairy Free: Yes
                        </Styled.IncludeTag>
                    ) : (
                        <Styled.ExcludeTag>
                            {' '}
                            <TbMilk size={30} /> Dairy Free: No{' '}
                        </Styled.ExcludeTag>
                    )}
                </Styled.CardAccordionInfo>
                <Styled.CardAccordionInfo>
                    {dish.glutenFree ? (
                        <Styled.IncludeTag>
                            {' '}
                            <CiWheat size={30} /> Gluten Free: Yes
                        </Styled.IncludeTag>
                    ) : (
                        <Styled.ExcludeTag>
                            {' '}
                            <CiWheat size={30} />
                            Gluten Free: No
                        </Styled.ExcludeTag>
                    )}
                </Styled.CardAccordionInfo>
                <Styled.CardAccordionInfo>
                    {dish.vegan ? (
                        <Styled.IncludeTag>
                            {' '}
                            <RiPlantFill size={30} /> Vegan Safe: Yes
                        </Styled.IncludeTag>
                    ) : (
                        <Styled.ExcludeTag>
                            {' '}
                            <RiPlantFill size={30} /> Vegan Safe: No
                        </Styled.ExcludeTag>
                    )}
                </Styled.CardAccordionInfo>
                <Styled.CardAccordionInfo>
                    {dish.vegetarian ? (
                        <Styled.IncludeTag>
                            {' '}
                            <RiPlantLine size={30} />
                            Vegetarian Safe: Yes
                        </Styled.IncludeTag>
                    ) : (
                        <Styled.ExcludeTag>
                            {' '}
                            <RiPlantLine size={30} /> Vegetarian Safe: No
                        </Styled.ExcludeTag>
                    )}
                </Styled.CardAccordionInfo>
            </Styled.CardAccordionBox>
        </Styled.CardAccordion>
    );
};

export default AllergyList;
