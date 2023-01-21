import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useState } from 'react';
import * as Styled from './Card.styles';
import AllergyList from '../AllergyList/AllergyList';
import { SmallButton } from '../Buttons/Button.styles';

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
            <Styled.CardColumnImage>
                <Styled.CardImage src={dish.image} />
            </Styled.CardColumnImage>
            <Styled.CardColumnInfo>
                <h5>{dish.title}</h5>
                {!open ? (
                    <SmallButton primary onClick={() => handleOnClick()}>
                        Allergies <RiArrowDownSLine size={20} />
                    </SmallButton>
                ) : (
                    <SmallButton onClick={() => handleOnClick()}>
                        See Less <RiArrowUpSLine size={20} />
                    </SmallButton>
                )}
            </Styled.CardColumnInfo>
            <Styled.CardSection>
                {open && <AllergyList key={dish.id} dish={dish} />}
            </Styled.CardSection>
        </Styled.CardContainer>
    );
};

export default Card;
