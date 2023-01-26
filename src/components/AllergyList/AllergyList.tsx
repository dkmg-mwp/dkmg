import { useNavigate } from 'react-router';
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
            icon: <Styled.Dairy size={30} />,
            prop: dish.dairyFree,
        },
        {
            name: 'gluten free',
            icon: <Styled.Gluten size={30} />,
            prop: dish.glutenFree,
        },
        {
            name: 'vegan safe',
            icon: <Styled.Vegan size={30} />,
            prop: dish.vegan,
        },
        {
            name: 'vegetarian safe',
            icon: <Styled.Vegetarian size={30} />,
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
                <Styled.ArrowRight />
            </SmallButton>
        </Styled.ListSection>
    );
};

export default AllergyList;
