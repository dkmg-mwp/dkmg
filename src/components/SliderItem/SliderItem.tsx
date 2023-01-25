import { useState } from 'react';
import { RiArrowRightLine } from 'react-icons/ri';
import { SmallButton } from '../styles/Button.styles';
import Heading from '../styles/Heading.styles';
import * as Styled from './Slideritem.styles';

type Props = {
    recipe: Recipe;
};

const SliderItem = ({ recipe }: Props) => {
    const [open, setOpen] = useState(false);

    const handleOnClick = () => {
        setOpen((prev) => !prev);
    };

    return (
        <Styled.CardContainer>
            <Styled.CardImage src={recipe.image} />
            <Styled.CardColumnTop>
                <Heading variant='h6'>{recipe.title}</Heading>
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
