import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useState } from 'react';
import {
    CardImage,
    CardTitle,
    CardContainer,
    CardColumn,
    CardSection,
} from './Card.styles';
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
        <CardContainer>
            <CardColumn>
                <CardImage src={dish.image} />
            </CardColumn>
            <CardColumn>
                <CardTitle>{dish.title}</CardTitle>
                {!open ? (
                    <SmallButton primary onClick={() => handleOnClick()}>
                        Allergies <RiArrowDownSLine />
                    </SmallButton>
                ) : (
                    <SmallButton onClick={() => handleOnClick()}>
                        See Less <RiArrowUpSLine />
                    </SmallButton>
                )}
            </CardColumn>

            <CardSection>
                {open && <AllergyList key={dish.id} dish={dish} />}
            </CardSection>
        </CardContainer>
    );
};

export default Card;
