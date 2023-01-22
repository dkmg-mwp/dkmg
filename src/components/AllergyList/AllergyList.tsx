import { CiWheat } from 'react-icons/ci';
import { RiPlantFill, RiPlantLine } from 'react-icons/ri';
import { TbMilk } from 'react-icons/tb';
import * as Styled from './AllergyList.styles';

type TagProps = {
    type: boolean;
    children: React.ReactNode;
};
const Tag = ({ type, children }: TagProps) => {
    const TagStyle = type ? Styled.IncludeTag : Styled.ExcludeTag;
    return <TagStyle>{children}</TagStyle>;
};

type Props = {
    dish: Dish;
};

const AllergyList = ({ dish }: Props) => {
    const allergies = [
        {
            name: 'dairy free',
            icon: <TbMilk size={30} />,
            prop: dish.dairyFree,
        },
        {
            name: 'gluten free',
            icon: <CiWheat size={30} />,
            prop: dish.glutenFree,
        },
        {
            name: 'vegan safe',
            icon: <RiPlantFill size={30} />,
            prop: dish.vegan,
        },
        {
            name: 'vegetarian safe',
            icon: <RiPlantLine size={30} />,
            prop: dish.vegetarian,
        },
    ];

    return (
        <Styled.CardAccordionBox>
            {allergies.map((allergy) => (
                <Styled.CardAccordionInfo key={allergy.name}>
                    <Tag type={allergy.prop}>
                        {allergy.icon}
                        {allergy.prop
                            ? `Is ${allergy.name}`
                            : `Not ${allergy.name}`}
                    </Tag>
                </Styled.CardAccordionInfo>
            ))}
        </Styled.CardAccordionBox>
    );
};

export default AllergyList;
