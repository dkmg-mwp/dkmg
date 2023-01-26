import { useNavigate } from 'react-router';
import { CiWheat } from 'react-icons/ci';
import { RiArrowRightLine, RiPlantFill, RiPlantLine } from 'react-icons/ri';
import { TbMilk } from 'react-icons/tb';
import { useRecipe } from '../../routes/Recipe/Recipe.context';
import { SmallButton } from '../styles/Button.styles';
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
    const navigate = useNavigate();
    
    const { setRecipe } = useRecipe();

    const handleClick = async (id: number) => {
        setRecipe(dish);
        navigate(`/recipe/${id}`);
    };

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
        <Styled.ListSection>
            {allergies.map((allergy) => (
                <Styled.List key={allergy.name}>
                    <Styled.ListItem>
                        <Tag type={allergy.prop}>
                            {allergy.icon}
                            {allergy.prop
                                ? `Is ${allergy.name}`
                                : `Not ${allergy.name}`}
                        </Tag>
                    </Styled.ListItem>
                </Styled.List>
            ))}
            <SmallButton primary onClick={() => handleClick(dish.id)}>
                See recipe
                <RiArrowRightLine />
            </SmallButton>
        </Styled.ListSection>
    );
};

export default AllergyList;
