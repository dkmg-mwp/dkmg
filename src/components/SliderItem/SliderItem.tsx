import { RiArrowRightLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useRecipe } from '../../routes/Recipe/Recipe.context';
import { SmallButton } from '../styles/Button.styles';
import Heading from '../styles/Heading.styles';
import * as Styled from './Slideritem.styles';

type Props = {
    recipe: Recipe;
};

const SliderItem = ({ recipe }: Props) => {
    const { setRecipe } = useRecipe();

    const navigate = useNavigate();

    const handleOnClick = (id: number) => {
        setRecipe(recipe);
        navigate(`recipe/${id}`);
    };

    return (
        <Styled.CardContainer>
            <Styled.CardImage src={recipe.image} />
            <Styled.CardColumnTop>
                <Heading variant='h5'>{recipe.title}</Heading>
            </Styled.CardColumnTop>
            <Styled.CardColumnBottom>
                <SmallButton primary onClick={() => handleOnClick(recipe.id)}>
                    See recipe
                    <RiArrowRightLine />
                </SmallButton>
            </Styled.CardColumnBottom>
        </Styled.CardContainer>
    );
};

export default SliderItem;
