import { RiArrowRightLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { SmallButton } from '../styles/Button.styles';
import Heading from '../styles/Heading.styles';
import * as Styled from './Slideritem.styles';

type Props = {
    recipe: Recipe;
};

const SliderItem = ({ recipe }: Props) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(`/recipe/${recipe.id}`);
    };
    return (
        <Styled.CardContainer>
            <Styled.CardImage src={recipe.image} />
            <Styled.CardColumnTop>
                <Heading variant='h5'>{recipe.title}</Heading>
            </Styled.CardColumnTop>
            <Styled.CardColumnBottom>
                <SmallButton primary onClick={() => handleOnClick()}>
                    See recipe
                    <RiArrowRightLine />
                </SmallButton>
            </Styled.CardColumnBottom>
        </Styled.CardContainer>
    );
};

export default SliderItem;
