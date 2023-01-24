import axios from 'axios';
import { CiWheat } from 'react-icons/ci';
import { RiPlantFill, RiPlantLine } from 'react-icons/ri';
import { TbMilk } from 'react-icons/tb';
import * as Styled from './AllergyList.styles';
import { useNavigate } from 'react-router';

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

    const handleClick = async (id: number) => {
        const res = await axios.get(
            `${import.meta.env.VITE_URL_KEY}recipes/${id}/information?apiKey=${
                import.meta.env.VITE_API_KEY
            }`
        );
        navigate(`/recipe/${id}`);
        console.log(res.data);
        // Put some kind of state/contex here?
        return res.data;
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
            <button onClick={() => handleClick(dish.id)}>Recipe</button>
        </Styled.CardAccordionBox>
    );
};

export default AllergyList;
