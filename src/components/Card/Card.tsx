import { useState } from 'react';
import AllergyList from '../AllergyList/AllergyList';
import { SmallButton } from '../styles/Button.styles';
import Heading from '../styles/Heading.styles';
import * as Styled from './Card.styles';

type Props = {
    dish: Dish;
};

const Card = ({ dish }: Props) => {
    const [open, setOpen] = useState(false);

    const handleOnClick = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <Styled.CardContainer>
            <Styled.CardWrapper>
                <Styled.CardColumnLeft>
                    <Styled.CardImage src={dish.image} />
                </Styled.CardColumnLeft>
                <Styled.CardColumnRight>
                    <Heading variant={'h5'}>{dish.title}</Heading>
                    {!open ? (
                        <SmallButton primary onClick={() => handleOnClick()}>
                            Allergies <Styled.ArrowDown size={20} />
                        </SmallButton>
                    ) : (
                        <SmallButton onClick={() => handleOnClick()}>
                            See Less <Styled.ArrowUp size={20} />
                        </SmallButton>
                    )}
                </Styled.CardColumnRight>
            </Styled.CardWrapper>
            {open && <AllergyList key={dish.id} dish={dish} />}
        </Styled.CardContainer>
    );
};

export default Card;
